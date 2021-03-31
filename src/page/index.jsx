import Form from '../components/form/index'
import {mockData} from "../mock";
import mapper from "../components/form/fields/model/mapper";
import './styles.scss'

function FormPage() {
    const {fields = [], title = ''} = mockData;

    const getFieldsModelByType = (field) => {
        return new mapper[field.type](field);
    }

    const fieldsModel = fields.map(getFieldsModelByType);
    return (
        <div className='container'>
            <Form title={title} fieldsModel={fieldsModel}/>
        </div>
    );
}

export default FormPage;
