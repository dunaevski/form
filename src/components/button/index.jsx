import './styles.scss'

export default function Button({children, color, disabled, onClick}) {
    const background = `${color ? color : "default"}`;

    return (
        <button className={`buttonWrap color_${background}`} onClick={onClick} disabled={disabled}>
            {children}
        </button>
    );
}
