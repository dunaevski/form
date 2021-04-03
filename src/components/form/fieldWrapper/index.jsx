import styles from "./FieldWrapper.module.scss";

export default function FieldWrapper({children, errorMsg}) {
    return (
        <div className={styles.fieldWrap}>
            <div className={styles.group}>
                {children}
            </div>
            <span className={styles.errorMessage}>{errorMsg}</span>
        </div>
    )
}