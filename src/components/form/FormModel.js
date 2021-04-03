import mapper from "./fields/model/mapper";

/**
 * Базовый класс модели поля формы
 */
export default class FormModel {

    /**
     * поля формы
     *
     * @type {Array}
     */
    fields = []


    /**
     * Валидность формы
     *
     * @type {boolean}
     */
    isValid = true;

    getFieldsModelByType(field) {
        const fieldModel = new mapper[field.type](field)
        const existField = this.fields.find((_field) => _field.name === field.name)
        if (existField) {
            return existField
        } else {
            this.fields.push(fieldModel)
            return fieldModel;
        }
    }

    validationForm() {
        const isFormValid = this.fields.reduce((_isFormValud, field) => {
            const isInvalidField = !field.value && field.isRequired;
            if (isInvalidField) {
                field.errorMsg = field.validation.messages.required;
            }
            if (isInvalidField) {
                _isFormValud = !isInvalidField;
            }
            return _isFormValud;
        }, true)
        debugger
        this.isValid = isFormValid;
        return isFormValid;
    }


    setializeFields() {

        return this.fields.reduce((result, field) => {
            result[field.name] = field.value;
            return result;
        }, {})
    }

}