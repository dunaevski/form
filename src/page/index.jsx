import Form from '../components/form/index'
import {mockData} from "../mock";
import styles from './FormPage.module.scss';

function FormPage() {
    const {fields = [], title = ''} = mockData;

    return (
        <div className={styles.container}>
            <Form title={title} fields={fields}/>
        </div>
    );
}

export default FormPage;
