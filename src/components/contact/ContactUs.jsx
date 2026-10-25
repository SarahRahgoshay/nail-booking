import Styles from './ContactUs.module.css';
import {
    FiMapPin,
    FiClock,
    FiPhone,
    FiInstagram,
} from 'react-icons/fi';

const ContactUs = ({dontShow = false}) => {
    const contactItems = [
        {
            id: 'address',
            title: 'آدرس ما',
            description: 'آدرس سالن و مسیر دسترسی به ما',
            value: 'آدرس سالن زیبایی شما',
            linkText: 'مشاهده روی نقشه',
            icon: FiMapPin,
            href: 'https://maps.google.com',
        },
        {
            id: 'hours',
            title: 'ساعت کاری',
            description: 'در ساعات زیر پذیرای شما هستیم',
            value: 'شنبه تا پنجشنبه',
            detail: '۱۰:۰۰ تا ۲۰:۰۰',
            icon: FiClock,
        },
        {
            id: 'phone',
            title: 'تماس با ما',
            description: 'برای مشاوره و رزرو نوبت',
            value: '۰۹۱۲۱۲۳۴۵۶۷',
            linkText: 'تماس تلفنی',
            icon: FiPhone,
            href: 'tel:+989121234567',
        },
        {
            id: 'social',
            title: 'شبکه‌های اجتماعی',
            description: 'همراه ما در دنیای زیبایی',
            value: '@nail.salon',
            linkText: 'صفحه اینستاگرام',
            icon: FiInstagram,
            href: 'https://instagram.com/',
        },
    ];

    return (
        <section className={`${Styles.contact} ${dontShow ? Styles.dontShow : ''}`} id='contact'>
            <div className={Styles.container}>
                <div className={Styles.contactHeader}>
                    <h3 className={Styles.eyebrow}> GET IN TOUCH </h3>
                    <h2 className={Styles.title}>
                        با ما در ارتباط باشید
                    </h2>
                    <p className={Styles.subtitle}>
                        برای رزرو نوبت، دریافت مشاوره و پاسخ به سؤالات شما،
                        از راه‌های ارتباطی زیر با ما در تماس باشید.
                    </p>
                </div>

                <div className={Styles.contactGrid}>
                    {contactItems.map((item) => {
                        const Icon = item.icon;

                        return (
                            <article
                                className={Styles.contactCard}
                                key={item.id}
                            >
                                <div className={Styles.cardTop}>
                                    <div className={Styles.iconWrapper}>
                                        <Icon aria-hidden="true" />
                                    </div>
                                </div>

                                <div className={Styles.cardContent}>
                                    <h3>{item.title}</h3>

                                    <p className={Styles.description}>
                                        {item.description}
                                    </p>

                                    <div className={Styles.cardInfo}>
                                        {item.href && item.id !== 'hours' ? (
                                            <>
                                                <p className={Styles.linkText}>
                                                    {item.linkText}
                                                </p>

                                                <a
                                                    className={Styles.valueLink}
                                                    href={item.href}
                                                    target={
                                                        item.id === 'address' || item.id === 'social'
                                                            ? '_blank'
                                                            : undefined
                                                    }
                                                    rel={
                                                        item.id === 'address' || item.id === 'social'
                                                            ? 'noopener noreferrer'
                                                            : undefined
                                                    }
                                                >
                                                    <span className={Styles.value}>
                                                        {item.value}
                                                    </span>
                                                    <Icon aria-hidden="true" />
                                                </a>
                                            </>
                                        ) : (
                                            <>
                                                <p className={Styles.value}>{item.value}</p>
                                                {item.detail && (
                                                    <p className={Styles.detail}>{item.detail}</p>
                                                )}
                                            </>
                                        )}
                                    </div>
                                </div>
                            </article>
                        );
                    })}
                </div>

            </div>
        </section>
    );
};

export default ContactUs;