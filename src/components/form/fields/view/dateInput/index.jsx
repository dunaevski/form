import {useState} from "react";
import FieldWrapper from "../../../fieldWrapper";
import './styles.scss'

function DateInput({model}) {
    const [value, setValue] = useState('');

    const handleChange = (e) => {
        setValue(e.target.value)
        model.value = e.target.value
    }

    return (
        <FieldWrapper errorMsg={model.errorMsg}>
            <div className="group">
                <input
                    type="date"
                    className='dateInput'
                    value={value}
                    onChange={handleChange}
                />
                <label className={'dateLabel'}>{model.label}</label>
            </div>
        </FieldWrapper>
    );
}

export default DateInput;

