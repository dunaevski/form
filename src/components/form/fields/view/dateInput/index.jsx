import { useState } from "react";
import FieldWrapper from "../../../fieldWrapper";
import styles from "./DatetimeInput.module.scss";

function DateInput({ model }) {
  const [value, setValue] = useState("");

  const handleChange = (e) => {
    setValue(e.target.value);
    model.value = e.target.value;
  };

  let fieldStyles = styles.group;
  if (model.errorMsg) {
    fieldStyles += ' ' + styles.errorField;
  }

  return (
    <FieldWrapper errorMsg={model.errorMsg}>
      <div className={fieldStyles}>
        <input
          type="date"
          className="dateInput"
          value={value}
          onChange={handleChange}
        />
        <label>{model.label}</label>
      </div>
    </FieldWrapper>
  );
}

export default DateInput;
