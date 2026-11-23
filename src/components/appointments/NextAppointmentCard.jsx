import { formatPrice, getDateParts, getDateUntil, toFaDigits } from '../../utils/format';
import { FiCalendar, FiClock } from "react-icons/fi";
import Styles from './NextAppointmentCard.module.css';

const getCountdown = (daysLeft) => {
    if (daysLeft <= 0) return { value: "امروز", label: "نوبت شماست" };
    if (daysLeft === 1) return { value: "فردا", label: "نوبت شماست" };
    return { value: toFaDigits(daysLeft), label: "روز تا نوبت" };
};
const NextAppointmentCard = ({ appointment, onCancel }) => {

    const { id, service, date, time, deposit } = appointment;
    const { day, monthName, year } = getDateParts(date);
    const countdown = getCountdown(getDateUntil(date));
    return (
        <article className={Styles.hero}>
            <div className={Styles.info}>
                <span className={Styles.ring} aria-hidden="true" />
                <span className={Styles.badge}>
                    نوبت بعدی شما
                </span>
                <h3 className={Styles.title}>{service?.title ?? "خدمت نامشخص"}</h3>
                <div className={Styles.meta}>
                    <span>
                        <FiCalendar />
                        {day} {monthName} {year}
                    </span>
                    <span>
                        <FiClock /> {toFaDigits(time)}
                    </span>
                </div>

                <p className={Styles.prices}>
                    مبلغ خدمت {formatPrice(service?.price)} | بیعانه پرداخت‌شده {formatPrice(deposit)}
                </p>
            </div>

            <div className={Styles.countdown}>
                <div className={Styles.countdownBadge}>
                    <strong>{countdown.value}</strong>
                    <span>{countdown.label}</span>
                </div>
                <button type="button" className={Styles.cancel} onClick={() => onCancel(id)}>
                    لغو نوبت
                </button>
            </div>
        </article>
    );
};

export default NextAppointmentCard;