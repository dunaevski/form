import {useState} from "react";

function SelectInput({model}) {
    const [value, setValue] = useState('');
    return (
        <div>
            <select
                name={model.name}
                value={value}
                onChange={setValue}
            >
                <option value="" disabled>{model.label}</option>
                {model.options.map(option => {
                    return (
                        <option
                            key={option.database_name}
                            value={option.display_name}
                            label={option.display_name}>{option.display_name}
                        </option>
                    );
                })}
            </select>
        </div>
    );
}

export default SelectInput;