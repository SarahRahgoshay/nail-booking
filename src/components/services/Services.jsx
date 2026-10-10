import Styles from './Services.module.css';
import { services } from '../../mockData';
import { FaAngleDoubleLeft } from "react-icons/fa";
import { Link } from 'react-router-dom';
import ServiceCard from './ServiceCard';

const Services = () => {

    const decorations = [
        { type: 'bubble', count: 15 },
        { type: 'glow', count: 3 },
        { type: 'ring', count: 4 },
    ];

    return (
        <div className={Styles.serviceContainer}>
            {decorations.map(({ type, count }) =>
                Array.from({ length: count }, (_, index) => {
                    const number = index + 1;
                    return (
                        <span
                            key={`${type}-${number}`}
                            className={`${Styles[type]} ${Styles[`${type}${number}`]}`}
                        />
                    );
                })
            )}

            <div className={Styles.headTitle}>
                <h3>SERVICES </h3>
                <h1> خدمات ما </h1>
                <p> با بهترین متریال و ظریف ترین طراحی </p>
            </div>
            <div className={Styles.cardGrid}>
                {services.slice(0 , 4).map((service) => (
                    <ServiceCard key={service.id} service={service} />
                ))}
            </div>

            {services.length > 4 && (
                <div className={Styles.moreServices}>
                    <Link to='/services' className={Styles.moreBtn}>
                     مشاهده بیشتر 
                    <FaAngleDoubleLeft />
                    </Link>
                </div>
            )}

        </div>
    );
};

export default Services;