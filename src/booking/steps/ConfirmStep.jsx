import Styles from './ConfirmStep.module.css';
import { GiCheckMark } from "react-icons/gi";
import { LuCalendarDays, LuClock2, LuClock3 } from "react-icons/lu";
import { MdOutlineNoteAlt } from "react-icons/md";
import { BsCreditCard } from "react-icons/bs";
import { FaCoins, FaHome  } from "react-icons/fa";


const ConfrimStep = ({ selectedService, selectedDate, selectedTime, onBackHome }) => {

    const bookingDetails = [
        {
            id: 'date',
            icon: <LuCalendarDays />,
            label: ' تاریخ نوبت ',
            value: selectedDate?.format('dddd، DD MMMM YYYY'),
        },
        {
            id: 'time',
            icon: <LuClock3 />,
            label: 'ساعت نوبت',
            value: selectedTime,
        },
        {
            id: 'duration',
            icon: <LuClock2 />,
            label: 'مدت زمان',
            value: selectedService?.duration,
        },
    ];

    const depositAmount = selectedService?.price * 0.6;

    return (
        <div className={Styles.confirmStep}>

            <div className={Styles.successIcon}>
                <GiCheckMark />
            </div>

            <div className={Styles.stepHeader}>
                <h2> تایید نهایی نوبت </h2>
                <p> اطلاعات نوبت شما با موفقیت ثبت شد </p>
            </div>

            <div className={Styles.summaryCard}>
                <div className={Styles.summaryHeader}>
                    <h3> خلاصه نوبت شما </h3>
                    <span className={Styles.summaryIcon}>
                        <LuCalendarDays />
                    </span>
                </div>

                <div className={Styles.serviceInfo}>
                    <div className={Styles.serviceContent}>
                        {selectedService?.image &&
                            <img src={selectedService.image} alt={selectedService.title} />
                        }

                        <div className={Styles.serviceDetails}>
                            <h4>{selectedService?.title}</h4>
                            <span>مدت زمان : {selectedService?.duration.toLocaleString('fa-IR')}</span>
                        </div>
                    </div>

                    <div className={Styles.serviceIcon}>
                        <MdOutlineNoteAlt />
                    </div>
                </div>

                <div className={Styles.bookingDetails}>
                    {bookingDetails.map((item, index) => (
                        <div className={Styles.detailItem} key={index}>
                            <span className={Styles.detailIcon}>
                                {item.icon}
                            </span>

                            <div>
                                <small> {item.label} </small>
                                <strong> {item.value} </strong>
                            </div>
                        </div>
                    ))}
                </div>

                <div className={Styles.priceSummary}>
                    <div className={Styles.priceRow}>
                        <span>
                            <FaCoins />
                            مبلغ کل
                        </span>
                        <strong> {selectedService?.price.toLocaleString('fa-IR')} تومان </strong>
                    </div>
                    <div className={Styles.priceRow}>
                        <span>
                            <BsCreditCard />
                            مبلغ پرداخت شده
                        </span>
                        <strong> {depositAmount.toLocaleString('fa-IR')} تومان </strong>
                    </div>
                </div>
            </div>

            <div className={Styles.actions}>
                <button
                    type="button"
                    className={Styles.homeButton}
                    onClick={onBackHome}
                >
                    <span>بازگشت به خانه</span>
                    <span className={Styles.homeIcon}>
                        <FaHome />
                    </span>
                </button>

            </div>

        </div>
    );
};

export default ConfrimStep;