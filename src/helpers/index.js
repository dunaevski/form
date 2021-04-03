import * as _ from 'lodash';

const getInitialForms = (fields) => {
    const fattenFields = _.flattenDeep(fields)
    return _.reduce(fattenFields, (initialFields, field) => {
        initialFields[field.name] = {
            ...field,
            errorMsg: '',
            isValid: true,
        }
        return initialFields;
    }, {});
}

export {getInitialForms};