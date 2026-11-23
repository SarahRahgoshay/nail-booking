import Styles from "./AppointmentCard.module.css"
import { getDateParts, toFaDigits } from "../../utils/format";
import { Link } from "react-router-dom";

const statusLabels = {
    confirmed: "تأیید شده",
    completed: "انجام شده",
    cancelled: "لغو شده"
};

const AppointmentCard = ({ appointment, onCancel }) => {

    const { id, serviceId, service, date, time, deposit, status } = appointment;
    const { day, monthName } = getDateParts(date);

    const secondAmount = status === 'completed' ? { label: "مبلغ پرداخت شده", value: service?.price }
        : { label: 'بیعانه', value: deposit }

    const handleCancel = () => {
        const isConfirmed = window.confirm("آیا از لغو این نوبت اطمینان دارید؟");
        if (isConfirmed) {
            onCancel(appointment.id)
        }
    }


    const formatPrice = (value) => value != null ? `${value.toLocaleString("fa-IR")} تومان` : "-";

    return (
        <article className={Styles.row}>
            <div className={Styles.dateBox}>
                <strong> {day} </strong>
                <span> {monthName} </span>
            </div>

            <div className={Styles.service}>
                <h3>{service?.title ?? 'خدمت نامشخص'}</h3>
                <p>
                    {toFaDigits(time)}
                </p>
            </div>

            <div className={Styles.amount}>
                <div>
                    <span> مبلغ خدمت </span>
                    <strong> {formatPrice(service?.price)} </strong>
                </div>
                <div>
                    <span>{secondAmount.label}</span>
                    <strong>{formatPrice(secondAmount.value)}</strong>
                </div>
            </div>

            <span className={Styles.status} data-status={status}>
                {statusLabels[status] ?? "نامشخص"}
            </span>
            <div className={Styles.action}>
                {status === 'confirmed' ? (
                    <button type="button" className={Styles.cancel} onClick={handleCancel}> لغو نوبت </button>
                ) : (
                    <Link className={Styles.rebook} to={`/booking/${serviceId}`}>رزرو مجدد</Link>
                )}
            </div>
        </article>
    );
};

export default AppointmentCard;