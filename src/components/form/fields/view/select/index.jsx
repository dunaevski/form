import {useState} from "react";
import FieldWrapper from "../../../fieldWrapper";
import styles from "./Select.module.scss";

function SelectInput({value, isValid, name, label, errorMsg, changed, options}) {
    const [isOpen, setOpen] = useState(false);

    const handleDropdownClick = () => {
        setOpen((prev) => prev !== true);
    };

    const onClick = (option) => (e) => {
        e.stopPropagation();
        changed(option.database_name, name)
        setOpen(false);
    };

    let fieldStyles = [styles.select];
    if (isOpen) {
        fieldStyles.push(styles._active)
    }
    if (!isValid) {
        fieldStyles.push(styles.errorField)
    }

    let selectedValue = "";
    if (value) {
        const selectedOption = options.find(
            (option) => option.database_name === value
        );
        selectedValue = selectedOption.display_name;
    } else {
        selectedValue = options[0].display_name;
    }

    return (
        <FieldWrapper errorMsg={errorMsg}>
            <div className={fieldStyles.join(' ')} onClick={handleDropdownClick}>
                <div className={styles.selectSelected}>{selectedValue}</div>

                {isOpen && (
                    <div className={styles.selectDropdown}>
                        {options.map((option) => {
                            return (
                                <div
                                    key={option.database_name}
                                    className={styles.selectOption}
                                    onClick={onClick(option)}
                                >
                                    {option.display_name}
                                </div>
                            );
                        })}
                    </div>
                )}
            </div>
            <label>{label}</label>
        </FieldWrapper>
    );
}

export default SelectInput;
