import styles from "./StringInput.module.scss";
import FieldWrapper from "../../../fieldWrapper";

function StringInput({value, name, isValid, label, errorMsg, changed, validation, checkValidation}) {

    const handleBlur = (e) => {
        if (name === 'email' && !validation.pattern.test(value)) {
            checkValidation(name, false, validation.messages.pattern);
        }
    };

    const handleFocus = () => {
        checkValidation(name, true, '');
    };

    const handleChange = e => {
        const _value = e.target.value;
        changed(_value, name)
    }

    let fieldStyles = [styles.fieldStyles];
    if (!isValid) {
        fieldStyles.push(styles.errorField);
    }

    return (
        <FieldWrapper errorMsg={errorMsg}>
            <div className={fieldStyles.join(' ')}>
                <input
                    className={styles.fieldInput}
                    type="text"
                    value={value}
                    onBlur={handleBlur}
                    onFocus={handleFocus}
                    onChange={handleChange}
                />
                <label>{label}</label>
            </div>
        </FieldWrapper>
    );
}

export default StringInput;
