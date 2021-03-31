import StringInput from '../fields/view/stringInput/index';
import Select from '../fields/view/select/index';
import DateInput from '../fields/view/dateInput/index';
import MaskInput from '../fields/view/maskInput/index';

function FieldFactory(props) {
    const tags = {
        stringInput: StringInput,
        select: Select,
        dateInput: DateInput,
        maskInput: MaskInput,
    };

    const getComponent = () => {
        const { type } = props.model;
        return tags[type];
    }

    const Component = getComponent();
    return Component ? <Component {...props } /> : null;
}

export default FieldFactory;