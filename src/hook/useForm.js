import {useReducer, useState} from "react";
import * as _ from 'lodash'

const useForm = (initialValues, onSubmit) => {
    const [state, dispatch] = useReducer(formReducer, initialValues);
    const [isLoading, setLoading] = useState(false);

    const changeHandler = (value, name) => {
        const updatedElement = {...state[name]};
        updatedElement.value = value;
        updatedElement.isValid = true;
        dispatch({name, updatedElement})
    }

    const changeValidField = (name, isValid, errorMsg) => {
        const updatedElement = {...state[name]};
        updatedElement.isValid = isValid;
        updatedElement.errorMsg = errorMsg;
        dispatch({name, updatedElement})
    }

    const validationSubmitForm = () => {
        let isFormValid = true;
        _.forEach(state, field => {
            if (field.validation && field.validation.required && field.value === '') {
                if(field.name === 'birthday') debugger
                changeValidField(field.name, false, field.validation.messages.required)
                isFormValid = false;
            }
        })
        return isFormValid;
    }

    const submitHandler = e => {
        e.preventDefault();
        setLoading(true);
        const isValidForm = validationSubmitForm();
        if (isValidForm) {
            setTimeout(() => {
                alert("to see data go into console");
                const results = Object.keys(state).reduce((final, key) => {
                    final[key] = state[key].value;
                    return final;
                }, {});
                setLoading(false);
                onSubmit(results)
            }, 2000);
        } else {
            setLoading(false);
        }
    }
    return {state, isLoading, submitHandler, changeHandler, changeValidField}
}


//Our custom hook also needs a reducer so I've included a very simple one here
function formReducer(prevState, {name, updatedElement}) {
    return {...prevState, [name]: updatedElement};
}

export {useForm};