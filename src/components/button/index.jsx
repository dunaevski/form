import styles from './Button.module.scss'

export default function Button({children, color, disabled, onClick}) {

    let btnClass;
    switch (color) {
        case 'green':
            btnClass = styles.color_green;
            break;
        default:
            btnClass = styles.color_default;
    }

    return (
        <button className={`${styles.buttonWrap} ${btnClass}`} onClick={onClick} disabled={disabled}>
            {children}
        </button>
    );
}
