import styles from './Button.module.scss'

export default function Button({children, color, disabled, onClick}) {

    let btnTypeClass;
    switch (color) {
        case 'green':
            btnTypeClass = styles.color_green;
            break;
        default:
            btnTypeClass = styles.color_default;
    }

    return (
        <button className={`${styles.buttonWrap} ${btnTypeClass}`} onClick={onClick} disabled={disabled}>
            {children}
        </button>
    );
}
