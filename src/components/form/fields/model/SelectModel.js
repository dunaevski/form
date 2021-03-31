import BaseFormFieldModel from './BaseFieldModel';

export default class SelectModel extends BaseFormFieldModel {
    constructor(data) {
        super(data);
        super.mergeData(data);
    }
}
