import Styles from './ServicesPage.module.css';
import { services } from '../mockData';
import ServiceCard from '../components/services/ServiceCard';

const ServicesPage = () => {
    return (
        <main className={Styles.servicesPage}>
            <div className={Styles.container}>

                <div className={Styles.headTitle}>
                    <span>SERVICES</span>
                    <h1>خدمات ما</h1>
                    <p>
                        با بهترین متریال و ظریف‌ترین طراحی
                    </p>
                </div>

                <div className={Styles.cardGrid}>
                    {services.map((service) => (
                        <ServiceCard
                            key={service.id}
                            service={service}
                        />
                    ))}
                </div>

            </div>
        </main>
    );
};

export default ServicesPage;