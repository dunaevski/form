import FieldWrapper from "../../../fieldWrapper";
import styles from "./DatetimeInput.module.scss";

function DateInput({value, name, isValid, label, errorMsg, changed, checkValidation}) {

    const handleChange = (e) => {
        const value = e.target.value;
        changed(value, name)
    };

    const handleFocus = () => {
        checkValidation(name, true, '');
    };

    let fieldStyles = [styles.fieldStyles];
    if (!isValid) {
        fieldStyles += ' ' + styles.errorField;
    }

    return (
        <FieldWrapper errorMsg={errorMsg}>
            <div className={fieldStyles}>
                <input
                    className={styles.fieldInput}
                    type="date"
                    value={value}
                    onFocus={handleFocus}
                    onChange={handleChange}
                />
                <label>{label}</label>
            </div>
        </FieldWrapper>
    );
}

export default DateInput;
