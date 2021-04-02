import {useState} from "react";
import FieldWrapper from "../../../fieldWrapper";

function MaskInput({model}) {
    const [value, setValue] = useState('');

    const handleChange = (e) => {
        setValue(e.target.value)
        model.value = e.target.value
    }

    return (
        <FieldWrapper errorMsg={model.errorMsg}>
            <div className="group">
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

export default MaskInput;

