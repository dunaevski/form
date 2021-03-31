import BaseFormFieldModel from './BaseFieldModel';

export default class StringInputModel extends BaseFormFieldModel {
    constructor(data) {
        super(data);
        super.mergeData(data);
    }
}
