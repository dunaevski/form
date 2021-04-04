import FieldWrapper from "../../../fieldWrapper";
import styles from "./MaskInput.module.scss";
import NumberFormat from 'react-number-format'
import {useState} from "react";

function MaskInput({value, name, isValid, label, errorMsg, changed, checkValidation, format, mask, placeholder}) {
    const [ _placeholder, setPlaceholder ] = useState('')

    const handleChange = ({formattedValue}) => {
        debugger
        changed(formattedValue, name)
    };

    const handleFocus = () => {
        checkValidation(name, true, '');
        setPlaceholder(placeholder);
    };

    const handleBlur = () => {
        setPlaceholder('');
    };

    let fieldStyles = [styles.fieldStyles];
    if (!isValid) {
        fieldStyles += ' ' + styles.errorField;
    }
    return (
        <FieldWrapper errorMsg={errorMsg}>
            <div className={fieldStyles}>
                <NumberFormat
                    className={styles.fieldInput}
                    format={format}
                    mask={mask}
                    placeholder={_placeholder}
                    value={value}
                    onFocus={handleFocus}
                    onBlur={handleBlur}
                    onValueChange={handleChange}
                    />
                <label>{label}</label>
            </div>
        </FieldWrapper>
    );
}

export default MaskInput;
