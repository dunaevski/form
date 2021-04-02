import {useState} from "react";
import './styles.scss'
import styles from './styles.scss'
import FieldWrapper from "../../../fieldWrapper";


function StringInput({model}) {
    const [value, setValue] = useState('');

    const handleChange = (e) => {
        setValue(e.target.value)
        model.value = e.target.value
    }

    return (
        <FieldWrapper errorMsg={model.errorMsg}>
            <div className={styles.group}>
                <input
                    type="text"
                    value={value}
                    onChange={handleChange}
                />
                <label>{model.label}</label>
            </div>
        </FieldWrapper>

    );
}

export default StringInput;
