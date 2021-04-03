import StringInput from '../fields/view/stringInput/index';
import Select from '../fields/view/select/index';
import DateInput from '../fields/view/dateInput/index';

function FieldFactory(props) {
    const tags = {
        stringInput: StringInput,
        select: Select,
        dateInput: DateInput,
    };

    const getComponent = () => {
        const {type} = props;
        return tags[type] || null;
    }

    const Component = getComponent();
    return Component ? <Component {...props} /> : null;
}

export default FieldFactory;