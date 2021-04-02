import * as _ from 'lodash';
/**
 * Базовый класс модели поля формы
 */
export default class BaseFormFieldModel {

    /**
     * тип поля
     * column_type
     *
     * @type {string}
     */
    type;

    /**
     * флаг который указывает обязательно ли поле для заполнения
     * isRequired
     *
     * @type {boolean}
     */
    isRequired;


    /**
     * Имя поля, используется как дефолтное значение для label
     * @type {string}
     */
     name;


    /**
     *
     * @type {*}
     */
    value;

    /**
     * подпись рядом с полем
     *
     * @type {string}
     */
    label;


    /**
     * ошибки валидации
     *
     * @type {object}
     */
    errorMessages

    /**
     * ошибка валидации
     *
     * @type {string}
     */
    errorMsg = '';


    /**
     *
     * @param data {{}}
     * @returns {BaseFormFieldModel}
     */
    constructor(data, ) {
        this.mergeData(data);
    }

    /**
     *
     * @param data
     * @param exclude
     */
    mergeData(data, exclude = []) {
        _.each(data, (value, key) => {
            if (key === 'validation') {
                this.setValidateRules(data[key]);
            }
            this[key] = value;
        });
    }



    setValidateRules({ required, messages}) {
        if (required) {
            this.isRequired = required
        }

        if(messages) {
            this.errorMessages = {...messages}
        }
    }

    showValidateMsg(message) {

    }

    hideValidateMsg() {

    }
}
