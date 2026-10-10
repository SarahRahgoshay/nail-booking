import Styles from "./PaymentStep.module.css";

import { TfiHandOpen } from "react-icons/tfi";
import { LuLockKeyhole, LuCalendarDays, LuClock3, LuDatabase, LuInfo, LuShieldCheck } from "react-icons/lu";
import { GiCheckMark } from "react-icons/gi";
import { GrFormPreviousLink } from "react-icons/gr";
import { BsCreditCard, BsFillExclamationCircleFill } from "react-icons/bs";
import { useEffect, useState } from "react";


const PaymentStep = ({ service, date, time, paymentStatus, paymentError, onPaymentStatusChange, onBack, onNext }) => {

    useEffect(() => {
        if (paymentStatus === 'success' || paymentStatus === 'failed') {
            window.scrollTo(0 ,0);
        }
    }, [paymentStatus]);
    const deposit = service.price * 0.6;

    const handlePayment = () => {
        onPaymentStatusChange("loading")
    }

    console.log("paymentStatus:", paymentStatus);

    if (paymentStatus === 'success') {
        return <PaymentSuccess
            deposit={deposit}
            onContinue={onNext}
        />
    }

    if (paymentStatus === 'failed') {
        return (
            <PaymentError
                paymentError={paymentError}
                onRetry={() => onPaymentStatusChange("pending")}
            />
        );
    }

    return (
        <div className={Styles.paymentStep}>

            <div className={Styles.paymentCard}>

                <div className={Styles.paymentHeader}>
                    <h2>
                        <LuLockKeyhole />
                        پرداخت بیعانه
                    </h2>
                    <p> برای ثبت نهایی نوبت، مبلغ بیعانه را به صورت آنلاین پرداخت کنید. </p>
                </div>

                <div className={Styles.topSection}>

                    {/* Amount */}
                    <div className={Styles.amountCard}>
                        <span> مبلغ قابل پرداخت </span>
                        <strong> {deposit.toLocaleString('fa-IR')} تومان </strong>
                        <small>  ( قیمت سرویس ٪۶۰) </small>
                        <p className={Styles.securePayment}>
                            پرداخت امن از طریق درگاه بانکی
                            <LuLockKeyhole />
                        </p>
                    </div>

                    {/* Booking Summary */}
                    <div className={Styles.bookingSummary}>
                        <h3> خلاصه نوبت </h3>

                        <div className={Styles.summaryRow}>
                            <span>
                                <TfiHandOpen />
                                سرویس
                            </span>
                            <strong>
                                {service.title}
                            </strong>
                        </div>

                        <div className={Styles.summaryRow}>
                            <span>
                                <LuCalendarDays />
                                تاریخ
                            </span>
                            <strong>  {date?.format("YYYY/MM/DD")} </strong>
                        </div>

                        <div className={Styles.summaryRow}>
                            <span>
                                <LuClock3 />
                                ساعت
                            </span>
                            <strong> {time} </strong>
                        </div>
                    </div>
                </div>

                {/* Payment Details*/}
                <div className={Styles.paymentDetails}>
                    <h3>
                        <LuDatabase />
                        جزییات پرداخت
                    </h3>

                    <div className={Styles.priceRow}>
                        <span> قیمت سرویس </span>
                        <strong> {service.price.toLocaleString('fa-IR')} تومان </strong>
                    </div>
                    <div className={Styles.priceRow}>
                        <span>بیعانه (٪ ۶۰)</span>
                        <strong> {deposit.toLocaleString('fa-IR')} تومان </strong>
                    </div>

                    <div className={Styles.finalAmount}>
                        <span>مبلغ قابل پرداخت</span>

                        <strong>
                            {deposit.toLocaleString('fa-IR')} تومان
                        </strong>
                    </div>

                    <p className={Styles.calculationInfo}>
                        <LuInfo />
                        مبلغ نهایی به صورت  ۶۰ ٪ از قیمت سرویس محاسبه شده است.
                    </p>
                </div>

                {/* Security Footer */}
                <div className={Styles.securityFooter}>

                    <span className={Styles.securityLine}></span>

                    <p className={Styles.securityText}>
                        <LuShieldCheck />
                        پرداخت امن و رمزنگاری‌شده
                    </p>

                    <span className={Styles.securityLine}></span>

                </div>
            </div>

            {/* buttons */}
            <div className={Styles.actions}>
                <button
                    type="button"
                    onClick={onBack}
                    className={Styles.backButton}
                >
                    بازگشت
                </button>

                {(paymentStatus === "pending" || paymentStatus === "loading") && (
                    <button
                        type="button"
                        className={Styles.payButton}
                        onClick={handlePayment}
                    // disabled={paymentStatus === "loading"}
                    >
                        {paymentStatus === "loading" ? (
                            <>
                                در حال انتقال به درگاه...
                                <span className={Styles.spinner}></span>
                            </>
                        ) : (
                            <>
                                پرداخت بیعانه
                                <BsCreditCard />
                            </>
                        )}
                    </button>
                )}
            </div>

        </div>
    );
};


const PaymentSuccess = ({ deposit, onContinue }) => {
    const [countDown, setCountDown] = useState(8);

    useEffect(() => {
        if (countDown === 0) {
            onContinue();
            return
        }

        const timer = setTimeout(() => {
            setCountDown(prev => prev - 1);
        }, 1000)

        return () => clearTimeout(timer)

    }, [countDown, onContinue])

    return (
        <>
            <div className={Styles.paymentSuccess}>
                <div className={Styles.successIcon}>
                    <GiCheckMark />
                </div>

                <h3>پرداخت با موفقیت انجام شد</h3>

                <p className={Styles.successMessage}>
                    پرداخت شما با موفقیت انجام شد.<br />
                    اکنون به مرحله تایید نهایی نوبت هدایت می شوید
                </p>

                <div className={Styles.paidAmount}>
                    <BsCreditCard />
                    <div className={Styles.amountInfo}>
                        <span>مبلغ پرداخت شده</span>
                        <strong>
                            {deposit.toLocaleString('fa-IR')} تومان
                        </strong>
                    </div>
                </div>


                <p className={Styles.redirectMessage}>
                    تا {countDown} ثانیه دیگر به مرحله بعد منتقل می‌شوید.
                </p>

            </div>

            <button type="button" className={Styles.continueButton} onClick={onContinue}>
                ادامه
                <GrFormPreviousLink />
            </button>
        </>
    );
};

//error mode
const PaymentError = ({ paymentError, onRetry }) => {

    return (
        <div className={Styles.paymentError}>
            <div className={Styles.errorIcon}>
                <BsFillExclamationCircleFill />
            </div>
            <h3> پرداخت ناموفق بود </h3>

            <p className={Styles.errorMessage}>
                {paymentError || <span> متأسفانه پرداخت شما با مشکل مواجه شد .<br /> لطفاً دوباره تلاش کنید. </span>}
            </p>

            <button
                type="button"
                className={Styles.retryButton}
                onClick={onRetry}
            >
                تلاش مجدد
            </button>
        </div>
    )
}

export default PaymentStep;