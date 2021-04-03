import { useState } from "react";
import FieldWrapper from "../../../fieldWrapper";
import styles from "./Select.module.scss";

function SelectInput({ model, isFormValid }) {
  const [value, setValue] = useState("");
  const [isOpen, setOpen] = useState(false);

  const handleDropdownClick = () => {
    setOpen((prev) => prev !== true);
  };

  const onClick = (option) => (e) => {
    e.stopPropagation();
    setValue(option.database_name);
    model.value = option.database_name;
    setOpen(false);
  };

  let cls = styles.select;
  if (isOpen) cls += " " + styles._active;

  let selectedValue = "";
  if (value) {
    const selectedOption = model.options.find(
      (option) => option.database_name === value
    );
    selectedValue = selectedOption.display_name;
  } else {
    selectedValue = model.options[0].display_name;
  }

  console.log(isFormValid, model.errorMsg);
  return (
    <FieldWrapper errorMsg={model.errorMsg}>
      <div className={styles.group}>
        <div className={`${cls}`} onClick={handleDropdownClick}>
          <div className={styles.selectSelected}>{selectedValue}</div>

          {isOpen && (
            <div className={styles.selectDropdown}>
              {model.options.map((option) => {
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
        <label>{model.label}</label>
      </div>
    </FieldWrapper>
  );
}

export default SelectInput;
