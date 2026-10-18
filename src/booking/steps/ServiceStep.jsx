import Styles from './ServiceStep.module.css';
import { services } from '../../mockData/mockData';
import { MdOutlineTimer, MdOutlineError  } from "react-icons/md";
import { GiFingernail } from "react-icons/gi";

const ServiceStep = ({ selectedService, onSelect, onNext, validationError }) => {
    return (
        <div className={Styles.serviceStep}>

            <div className={Styles.stepHeader}>
                <div className={Styles.headerIcon}>
                    <GiFingernail />
                </div>
                <h2>انتخاب خدمت</h2>
                <p>
                    خدمت مورد نظر خود را انتخاب کنید
                </p>

            </div>

            <div className={Styles.serviceGrid}>

                {services.map((service) => {

                    const isSelected =
                        selectedService?.id === service.id;

                    return (
                        <button
                            key={service.id}
                            type="button"
                            onClick={() => onSelect(service)}
                            className={`${Styles.serviceCard} ${isSelected ? Styles.selected : ''
                                }`}
                        >

                            {isSelected && (
                                <span className={Styles.checkIcon}>
                                    ✓
                                </span>
                            )}

                            <div className={Styles.imageWrapper}>
                                <img
                                    src={service.image}
                                    alt={service.title}
                                />
                            </div>

                            <div className={Styles.serviceInfo}>
                                <h3>
                                    {service.title}
                                </h3>

                                <span className={Styles.duration}>
                                    <MdOutlineTimer size={17} />
                                    {service.duration}
                                </span>

                                <span className={Styles.price}>
                                    {service.price.toLocaleString('fa-IR')} تومان
                                </span>

                            </div>
                        </button>
                    );
                })}

            </div>

            {validationError && (
                <div className={Styles.validationError}>
                    <div className={Styles.errorDecoration}>
                        <span className={Styles.errorLine} />

                        <span className={Styles.errorIcon}>
                            <MdOutlineError  />
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
                    className={Styles.nextButton}
                    // disabled={!selectedService}
                    onClick={onNext}
                >
                    ادامه
                    <span>←</span>
                </button>
            </div>
        </div>
    );
};

export default ServiceStep;