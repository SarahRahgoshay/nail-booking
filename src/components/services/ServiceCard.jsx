import Styles from './ServiceCard.module.css'
import { MdOutlineTimer } from "react-icons/md";
import { LuCalendarDays } from "react-icons/lu";
import { useNavigate } from 'react-router-dom';

const ServiceCard = ({ service }) => {

    const navigate = useNavigate();

    const goToBookingPage = () => navigate(`/booking/${service.id}`)

    return (
        <article className={Styles.card} key={service.id}>
            <div className={Styles.cardImage}>
                <img src={service.image} alt={service.title} />
            </div>
            <div className={Styles.cardInfo}>
                <span className={Styles.category}> NAIL SERVICE </span>
                <h2 className={Styles.title}> {service.title} </h2>
                <p className={Styles.desc}>{service.desc}</p>
                <div className={Styles.duration}> {service.duration} <MdOutlineTimer size={17} /></div>
                <div className={Styles.cardBottom}>
                    <span className={Styles.price}>
                        {service.price.toLocaleString('fa-IR')} <small>تومان</small>
                    </span>
                    <button onClick={goToBookingPage} className={Styles.btn}> رزرو نوبت <LuCalendarDays size={17} /></button>
                </div>
            </div>
        </article>
    );
};

export default ServiceCard;