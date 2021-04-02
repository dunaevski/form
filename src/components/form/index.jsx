import './styles.scss'
import FieldFactory  from './fieldFactory/index'
import Button from "../button";
import {useState} from "react";

export default function Form({title, fieldsModel}) {
    const [isLoading, setLoading] = useState(false);

    const onClick = (e) => {
        e.preventDefault();
        setLoading(true)
        setTimeout(() => setLoading(false), 2000);
    }


    return (
        <div>
            <h2 className='headerTitle'> {title}</h2>
            <form className='formContainer'>
                { fieldsModel.map((fieldModel, i) => {
                    return <FieldFactory key={i} model={fieldModel}/>
                })}
                <Button
                    title='Сохранить'
                    color={'green'}
                    disabled={isLoading}
                    onClick={onClick}
                >
                    {isLoading ? 'Отправка' : 'Сохранить'}
                </Button>
            </form>
        </div>
    );
}
