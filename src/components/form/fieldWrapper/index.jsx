import './styles.scss'


function FieldWrapper({children, errorMsg}) {
    return (
        <div className='fieldWrap'>
            { children }
            <span className='errorMessage'>{errorMsg}</span>
        </div>
    );
}

export default FieldWrapper;
