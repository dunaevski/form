import { useState } from "react";
import styles from "./StringInput.module.scss";
import FieldWrapper from "../../../fieldWrapper";
import useForceUpdate from "../../../../../helpers/index";

function StringInput({ model, isFormValid }) {
  const [value, setValue] = useState("");
  const forceUpdate = useForceUpdate();

  const handleChange = (e) => {
    setValue(e.target.value);
    model.value = e.target.value;
  };

  const handleBlur = (e) => {
    model.setInlineValidation(e.target.value);
    forceUpdate();
  };

  const handleFocus = (e) => {
    if (model.errorMsg) {
      model.errorMsg = "";
    }
  };

  let fieldStyles = styles.group;
  if (model.errorMsg) {
    fieldStyles += ' ' + styles.errorField;
  }

  return (
    <FieldWrapper errorMsg={model.errorMsg}>
      <div className={fieldStyles}>
        <input
          type="text"
          value={value}
          onBlur={handleBlur}
          onFocus={handleFocus}
          onChange={handleChange}
        />
        <label>{model.label}</label>
      </div>
    </FieldWrapper>
  );
}

export default StringInput;
