import {useState} from "react";
import FieldWrapper from "../../../fieldWrapper";
import './styles.scss'


function SelectInput({model}) {
    const [value, setValue] = useState('');
    const [isOpen, setOpen] = useState(false);


    const handleDropdownClick = () => {
        setOpen((prev) => prev !== true)
    }

    const onClick = (option) => (e) => {
        e.stopPropagation();
        setValue(option.database_name)
        setOpen(false);
    }

    let cls = 'select';
    if(isOpen) cls += ' _active';

    let selectedValue = '';
    if (value) {
        const selectedOption = model.options.find(option => option.database_name === value)
        selectedValue = selectedOption.display_name
    } else {
        selectedValue = model.options[0].display_name
    }
    return (
        <FieldWrapper errorMsg={model.errorMsg}>
            <div className='group'>
                <div
                    className={`${cls}`}
                    onClick={handleDropdownClick}
                >
                    <div className="select-selected">{selectedValue}</div>

                    {isOpen && <div className="select-dropdown">

                        {model.options.map(option => {
                            return (
                                <div
                                    key={option.database_name}
                                    className="select-option"
                                    onClick={onClick(option)}
                                >
                                    {option.display_name}
                                </div>
                            )
                        })}

                    </div>}
                </div>
                <label className={'selectLabel'}>{model.label}</label>

            </div>
        </FieldWrapper>
    );
}

export default SelectInput;

