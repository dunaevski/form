import {useState} from "react";

function DateInput({model}) {
    const [value, setValue] = useState('');

    const handleChange = (e) => {
        setValue(e.target.value)

    }

    return (
        <div className="group">
            <input
                type="text"
                required
                value={value}
                onChange={handleChange}
            />
            <label>{model.label}</label>
        </div>
    );
}

export default DateInput;

