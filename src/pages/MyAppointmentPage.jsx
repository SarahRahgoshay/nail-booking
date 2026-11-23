import { useMemo, useState } from 'react';
import AppointmentCard from '../components/appointments/AppointmentCard';
import { mockAppointments } from '../mockData/appointmentData';
import { services } from '../mockData/mockData';
import Styles from './MyAppointmentPage.module.css';
import { FiCalendar } from "react-icons/fi";
import { Link } from "react-router-dom";
import { sortAppointments } from '../utils/appointmentUtils';
import { toFaDigits } from '../utils/format';
import NextAppointmentCard from '../components/appointments/NextAppointmentCard';

const serviceById = new Map(services.map(service => [service.id, service]));

const tabs = [
    { key: "all", label: "همه", statuses: null },
    { key: "upcoming", label: "نوبت‌های پیش‌رو", statuses: ["confirmed"] },
    {
        key: "history",
        label: "سوابق نوبت‌ها",
        statuses: ["completed", "cancelled"]
    },
];


const MyAppointmentPage = () => {
    const [appointments, setAppointments] = useState(mockAppointments);
    const [activeFilter, setActiveFilter] = useState('all')

    const appointmentsWithService = useMemo(
        () => appointments.map(appointment => ({
            ...appointment,
            service: serviceById.get(appointment.serviceId) ?? null
        })), [appointments]
    )

    const currentTab = tabs.find(tab => tab.key === activeFilter)

    const visibleAppointments = sortAppointments(
        appointmentsWithService.filter(appointment =>
            !currentTab?.statuses || currentTab.statuses.includes(appointment.status)
        )
    )

    const nextAppointment = sortAppointments(
        appointmentsWithService.filter((appointment) => appointment.status === "confirmed"),
        "upcoming"
    )[0];

    const showNext = Boolean(nextAppointment) && activeFilter !== 'history';

    const listAppointments = showNext
        ? visibleAppointments.filter((appointment) => appointment.id !== nextAppointment.id)
        : visibleAppointments;

    const getTabCount = (tab) => {
        if (!tab.statuses) return appointments.length;
        return appointments.filter(appointment =>
            tab.statuses.includes(appointment.status)
        ).length;
    }

    const handleCancelAppointment = (appointmentId) => {
        setAppointments(prev =>
            prev.map(appointment =>
                appointment.id === appointmentId &&
                    appointment.status === "confirmed" ?
                    { ...appointment, status: 'cancelled' } : appointment
            )
        )
    }

    return (
        <div className={Styles.pageBackground}>
            <section className={Styles.appointmentPage}>
                <header className={Styles.appointmentHeader}>
                    <h2>نوبت‌های من</h2>
                    <p>نوبت بعدی‌ات را ببین و سوابق رزروهایت را مدیریت کن.</p>
                </header>
                <div className={Styles.tabs}>
                    {tabs.map(tab => (
                        <button
                            key={tab.key}
                            className={Styles.tab}
                            onClick={() => setActiveFilter(tab.key)}
                            aria-pressed={tab.key === activeFilter}>
                            {tab.label}
                            <span className={Styles.count}>
                                {toFaDigits(getTabCount(tab))}
                            </span>
                        </button>
                    ))}
                </div>

                {showNext && <NextAppointmentCard appointment={nextAppointment} onCancel={handleCancelAppointment} />}

                {!showNext && listAppointments.length === 0 && (
                    <div className={Styles.empty}>
                        <div className={Styles.emptyIcon}>
                            <FiCalendar />
                        </div>

                        <h3>
                            {appointments.length === 0
                                ? "هنوز نوبتی ثبت نکرده‌اید"
                                : "نوبتی در این دسته ندارید"}
                        </h3>

                        <p>
                            {appointments.length === 0
                                ? "با رزرو اولین نوبت، جزئیات آن را اینجا مشاهده خواهید کرد."
                                : "با ثبت نوبت جدید، جزئیات آن در این قسمت نمایش داده می‌شود."}
                        </p>

                        {appointments.length === 0 && (
                            <Link to="/booking" className={Styles.emptyButton}>
                                رزرو نوبت
                            </Link>
                        )}
                    </div>
                )}

                {listAppointments.length > 0 && (
                    <>
                        {showNext && <h3 className={Styles.sectionTitle}>نوبت‌های دیگر</h3>}
                        <ul className={Styles.list}>
                            {listAppointments.map((appointment) => (
                                <li key={appointment.id}>
                                    <AppointmentCard
                                        appointment={appointment}
                                        onCancel={handleCancelAppointment}
                                    />
                                </li>
                            ))}
                        </ul>
                    </>
                )}
            </section>
        </div>
    );
};

export default MyAppointmentPage;