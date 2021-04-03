import styles from "./Form.module.scss";
import FieldFactory from "./fieldFactory/index";
import Button from "../button";
import { useState, useEffect } from "react";
import FormModel from "./FormModel";
import _ from "lodash";

export default function Form({ title, fields }) {
  const [isLoading, setLoading] = useState(false);
  const [formModel, setFormModel] = useState({});
  const [isFormValid, setValidForm] = useState(true);

  useEffect(() => {
    setFormModel(new FormModel());
  }, []);

  const onClick = (e) => {
    e.preventDefault();
    saveForm();
  };

  const saveForm = () => {
    setLoading(true);

    const isValidForm = formModel.validationForm();
    setValidForm(isValidForm);

    if (isValidForm) {
      setTimeout(() => {
        alert("to see data go into console");
        console.log(formModel.setializeFields());
        setLoading(false);
      }, 2000);
    } else {
      setLoading(false);
    }
  };

  const getNode = (fields, isChild = false) => {
    return fields.map((field, i) => {
      if (isChild) {
        return getChildNode(field, i);
      }
      if (Array.isArray(field)) {
        return (
          <div className={styles.flexContainer}>{getNode(field, true)}</div>
        );
      }
      const fieldModel = formModel.getFieldsModelByType(field);
      console.log(isFormValid, fieldModel.errorMsg);
      return (
        <FieldFactory key={i} model={fieldModel} isFormValid={isFormValid} />
      );
    });
  };

  const getChildNode = (field, i) => {
    const fieldModel = formModel.getFieldsModelByType(field);
    console.log(isFormValid, fieldModel.errorMsg);
    return (
      <div className={styles.splitSection}>
        <FieldFactory key={i} model={fieldModel} isFormValid={isFormValid} />
      </div>
    );
  };

  if (_.isEmpty(formModel)) return null;

  return (
    <div>
      <h2 className={styles.headerTitle}> {title}</h2>
      <form className={styles.formContainer}>
        {getNode(fields)}
        <Button
          className={styles.buttonStyle}
          title="Сохранить"
          color={"green"}
          disabled={isLoading || !formModel.isValid}
          onClick={onClick}
        >
          {isLoading ? "Отправка" : "Сохранить"}
        </Button>
      </form>
    </div>
  );
}
