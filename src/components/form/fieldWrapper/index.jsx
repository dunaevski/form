import './styles.scss'


function StringInput({children, name}) {
    return (
        <div className="group">
            { children }
            <label className='label'>{name}</label>
        </div>
    );
}

export default StringInput;
