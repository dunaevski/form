import styles from "./Form.module.scss";
import FieldFactory from "./fieldFactory/index";
import Button from "../button";
import {useForm} from '../../hook/useForm'
import {getInitialForms} from "../../helpers";

export default function Form({title, fields}) {
    const initialForm = getInitialForms(fields);
    const {state, isLoading, submitHandler, changeHandler, changeValidField} = useForm(initialForm, values => console.log(values));

    const onClick = (e) => {
        e.preventDefault();
        submitHandler(e);
    };

    const getNode = fields => {
        return fields.map(field => {
            if (Array.isArray(field)) {
                return (
                    <div key={field.name} className={styles.flexContainer}>
                        {getChildNode(field)}
                    </div>
                );
            }

            const fieldProps = {
                key: field.name,
                changed: changeHandler,
                checkValidation: changeValidField,
                ...state[field.name]
            }
            return (
                <FieldFactory {...fieldProps} />
            );
        });
    };

    const getChildNode = (fields) => {
        return fields.map((field) => {
            const fieldProps = {
                changed: changeHandler,
                checkValidation: changeValidField,
                ...state[field.name]
            }

            return (
                <div key={field.name} className={styles.splitSection}>
                    <FieldFactory {...fieldProps} />
                </div>
            );
        });
    };

    return (
        <div>
            <h2 className={styles.headerTitle}> {title}</h2>
            <form className={styles.formContainer}>
                {getNode(fields)}
                <Button
                    className={styles.buttonStyle}
                    title="Сохранить"
                    color={"green"}
                    disabled={isLoading}
                    onClick={onClick}
                >
                    {isLoading ? "Отправка" : "Сохранить"}
                </Button>
            </form>
        </div>
    );
}
