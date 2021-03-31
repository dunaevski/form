import './styles.scss'
import FieldFactory  from './fieldFactory/index'

export default function Form({title, fieldsModel}) {
    return (
        <div>
            <h2 className='headerTitle'> {title}</h2>
            <form>
                { fieldsModel.map((fieldModel, i) => {
                    return <FieldFactory key={i} model={fieldModel}/>
                })}
            </form>
        </div>
    );
}
