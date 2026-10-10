import Styles from './StepIndicator.module.css';

const StepIndicator = ({ steps, currentStep, onStepClick }) => {
    return (
        <div className={Styles.indicator}>
            {steps.map((step, index) => {
                const isActive = index === currentStep;
                const isCompleted = index < currentStep;

                return (
                    <div key={step.key} className={Styles.stepWrapper}>
                        <div className={Styles.circleCol}>
                            <div className={`${Styles.stepCircle}
                                    ${isActive ? Styles.active : ''}
                                    ${isCompleted ? Styles.completed : ''}
                                `}
                                onClick={() => onStepClick(index)}
                            >
                                {isCompleted ? '✓' : index + 1}
                            </div>

                            <span
                                className={`${Styles.stepLabel}
                                    ${isActive ? Styles.activeLabel : ''}
                                `}
                            >
                                {step.label}
                            </span>
                        </div>

                        {index < steps.length - 1 && (
                            <div
                                className={`${Styles.connector}
                                    ${isCompleted ? Styles.completed : ''}
                                `}
                            />
                        )}
                    </div>
                );
            })}
        </div>
    );
};

export default StepIndicator;