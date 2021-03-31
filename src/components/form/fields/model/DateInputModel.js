import BaseFormFieldModel from './BaseFieldModel';

export default class DateInputModel extends BaseFormFieldModel {
    constructor(data) {
        super(data);
        super.mergeData(data);
    }
}
