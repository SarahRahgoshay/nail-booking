import { Navigate, useNavigate } from 'react-router-dom';
import { getCurrentUser } from '../auth/Auth';
import Styles from './BookingPage.module.css';
import StepIndicator from './StepIndicator';
import { useEffect, useReducer, useState } from 'react';
import ServiceStep from './steps/ServiceStep';
import DateTimeStep from './steps/DateTimeStep';
import PaymentStep from './steps/PaymentStep';
import { bookingReducer, initialBookingState } from './BookingReducer';
import { validateStep } from './bookingValidation';
import ConfirmStep from './steps/ConfirmStep';


const mockPayment = () => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve({
                success: false,
                error: undefined
            });
        }, 2000);
    });
};

const BookingPage = () => {
    const currentUser = getCurrentUser();
    const [bookingState, dispatch] = useReducer(bookingReducer, initialBookingState);
    const [currentStep, setCurrentStep] = useState(0);
    const [validationError, setValidationerror] = useState(null);
    const navigate = useNavigate()

    const stepNames = ["service", "dateTime", "payment", "confirm"];

    useEffect(() => {
        window.scrollTo(0 , 0)
    }, [currentStep]);


    if (!currentUser) {
        return <Navigate to='/login' replace />
    }

    const handleNext = () => {
        const step = stepNames[currentStep]
        const validation = validateStep(step, bookingState);

        if (!validation.isValid) {
            setValidationerror(validation.error)
            return;
        }

        setValidationerror(null)
        setCurrentStep((prev) => prev + 1);
    };

    const handleBack = () => {
        setValidationerror(null)
        setCurrentStep((prev) => Math.max(0, prev - 1))
    }

    const handleStepClick = (stepIndex) => {
        if (stepIndex <= currentStep) {
            setCurrentStep(stepIndex);
        }
    };

    const handlePaymentStatusChange = async (status) => {
        dispatch({
            type: "SET_PAYMENT_STATUS",
            payload: status
        });

        if (status === "loading") {
            const result = await mockPayment();

            if (result.success) {
                dispatch({
                    type: "SET_PAYMENT_STATUS",
                    payload: "success"
                });
            } else {
                dispatch({
                    type: "SET_PAYMENT_STATUS",
                    payload: "failed"
                });

                dispatch({
                    type: "SET_PAYMENT_ERROR",
                    payload: result.error
                });
            }

            console.log(result);
        }
    };

    const steps = [
        { key: "service", label: "انتخاب سرویس" },
        { key: "dateTime", label: "انتخاب تاریخ و زمان" },
        { key: "payment", label: "پرداخت بیعانه" },
        { key: "confirmation", label: "تایید نهایی نوبت" },

    ]
    return (
        <div className={Styles.bookingPage}>

            <div className={Styles.bookingCard}>
                <StepIndicator
                    steps={steps}
                    currentStep={currentStep}
                    onStepClick={handleStepClick}
                />
                <div className={Styles.stepContent}>
                    {currentStep === 0 &&
                        <ServiceStep
                            selectedService={bookingState.service}
                            onSelect={(service) => { dispatch({ type: "SET_SERVICE", payload: service }), setValidationerror(null) }}
                            onNext={handleNext}
                            validationError={validationError}
                        />
                    }
                    {currentStep === 1 &&
                        <DateTimeStep
                            selectedDate={bookingState.dateTime.date}
                            onDateSelect={(date) => { dispatch({ type: "SET_DATETIME", payload: date }), setValidationerror(null) }}
                            selectedTime={bookingState.dateTime.time}
                            onTimeSelect={(time) => { dispatch({ type: "SET_TIME", payload: time }), setValidationerror(null) }}
                            validationError={validationError}
                            onNext={handleNext}
                            onBack={handleBack}
                        />
                    }

                    {currentStep === 2 &&
                        <PaymentStep
                            service={bookingState.service}
                            date={bookingState.dateTime.date}
                            time={bookingState.dateTime.time}
                            paymentStatus={bookingState.payment.status}
                            paymentError={bookingState.payment.error}
                            onPaymentStatusChange={handlePaymentStatusChange}
                            onBack={handleBack}
                            onNext={handleNext}
                        />
                    }

                    {currentStep === 3 &&
                        <ConfirmStep
                            selectedService={bookingState.service}
                            selectedDate={bookingState.dateTime.date}
                            selectedTime={bookingState.dateTime.time}
                            onBackHome={() => navigate('/')}
                        />
                    }

                </div>

            </div>

        </div>
    );
};

export default BookingPage;