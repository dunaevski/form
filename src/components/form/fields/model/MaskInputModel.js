import BaseFormFieldModel from './BaseFieldModel';

export default class MaskInputModel extends BaseFormFieldModel {
    constructor(data) {
        super(data);
        super.mergeData(data);
    }
}
