import Styles from './DateTimeStep.module.css';
import { TbCalendarTime } from "react-icons/tb";
import { GiCheckMark } from "react-icons/gi";
import { FcOvertime } from "react-icons/fc";
import { FcClock } from "react-icons/fc";
import { MdOutlineError  } from "react-icons/md";
import { GrFormNextLink, GrFormPreviousLink } from "react-icons/gr";
import { Calendar } from "react-multi-date-picker";
import persian from "react-date-object/calendars/persian";
import persian_fa from "react-date-object/locales/persian_fa";


const DateTimeStep = ({ selectedDate, onDateSelect, selectedTime, onTimeSelect, validationError, onNext, onBack }) => {

    const availableTimes = [
        { time: '09:00', available: true },
        { time: '10:00', available: false },
        { time: '11:00', available: true },
        { time: '12:00', available: true },
        { time: '13:30', available: true },
        { time: '14:30', available: false },
        { time: '15:00', available: true },
        { time: '16:30', available: false },
        { time: '17:30', available: true },
    ];

    const handleDateSelect = (date) => {
        onDateSelect(date);
        onTimeSelect(null);
    };


    return (
        <div className={Styles.dateTimeStep}>
            <div className={Styles.dateHeader}>
                <div className={Styles.dateIcon}> <TbCalendarTime size={30} /> </div>
                <h3>
                    انتخاب تاریخ و زمان
                </h3>
                <p>
                    تاریخ و ساعت موردنظر خود را انتخاب کنید
                </p>
            </div>
            {/* calender */}
            <div className={Styles.calendarSection}>
                <div className={Styles.calenderWrapper}>
                    <Calendar
                        value={selectedDate}
                        onChange={handleDateSelect}
                        calendar={persian}
                        locale={persian_fa}
                        className={Styles.pinkCalendar}
                        minDate={new Date()}
                        weekDays={[
                            "شنبه",
                            "یکشنبه",
                            "دوشنبه",
                            "سه‌شنبه",
                            "چهارشنبه",
                            "پنجشنبه",
                            "جمعه"
                        ]}
                    />
                </div>
            </div>

            {/* times */}
            {selectedDate &&
                <div className={Styles.timeSection}>
                    <h3> انتخاب ساعت </h3>

                    <div className={Styles.timeGrid}>
                        {
                            availableTimes.map((slot) => {
                                const isSelected = selectedTime === slot.time;

                                return (
                                    <button
                                        key={slot.time}
                                        className={`${Styles.timeButton} ${isSelected ? Styles.selectedTime : ''} ${!slot.available ? Styles.full : ''}`}
                                        onClick={() => onTimeSelect(slot.time)}
                                        disabled={!slot.available}
                                    >
                                        {slot.time}
                                    </button>
                                )
                            })
                        }
                    </div>
                </div>
            }
            {selectedDate && selectedTime && (
                <div className={Styles.selectedDateTime}>

                    <div className={Styles.selectedHeader}>
                        <span className={Styles.successIcon}>
                            <GiCheckMark />
                        </span>
                        <span>زمان انتخاب شد</span>
                    </div>

                    <div className={Styles.selectedInfo}>

                        <div className={Styles.selectedItem}>
                            <span className={Styles.infoIcon}>
                                <FcOvertime />
                            </span>

                            <div>
                                <small>تاریخ نوبت</small>
                                <strong>
                                    {selectedDate.format('dddd، DD MMMM YYYY')}
                                </strong>
                            </div>
                        </div>

                        <div className={Styles.selectedItem}>
                            <span className={Styles.infoIcon}> <FcClock /> </span>

                            <div>
                                <small>ساعت نوبت</small>
                                <strong>
                                    {selectedTime}
                                </strong>
                            </div>
                        </div>

                    </div>

                </div>
            )}

            {validationError && (
                <div className={Styles.validationError}>
                    <div className={Styles.errorDecoration}>
                        <span className={Styles.errorLine} />

                        <span className={Styles.errorIcon}>
                            <MdOutlineError />
                        </span>

                        <span className={Styles.errorLine} />
                    </div>

                    <p className={Styles.errorText}>
                        {validationError}
                    </p>
                </div>
            )}

            <div className={Styles.actions}>
                <button
                    type="button"
                    className={Styles.backButton}
                    onClick={onBack}
                >
                    <span> <GrFormNextLink /> </span>
                    بازگشت
                </button>

                <button
                    type="button"
                    className={Styles.nextButton}
                    onClick={onNext}
                // disabled= {!selectedDate || !selectedTime}
                >
                    ادامه
                    <span> <GrFormPreviousLink /> </span>
                </button>
            </div>
        </div>
    );
};

export default DateTimeStep;