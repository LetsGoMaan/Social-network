import {Field, WrappedFieldProps} from "redux-form";
import styles from "./FormsControls.module.css"

interface TextareaProps extends WrappedFieldProps {
    [key: string]: any; // можно добавить дополнительные параметры через rest-оператор
}

export const Textarea: React.FC<TextareaProps> = ({input, meta, ...props}) => {
    const hasError = meta.touched && meta.error
    return (
        <div className={styles.formControl + ' ' + (hasError ? styles.error: '')}>
            <div>
                <textarea {...input} {...props}/>
            </div>
            { hasError && <span>{meta.error}</span>}
        </div>

    )
}

export const Input: React.FC<TextareaProps> = ({input, meta, ...props}) => {
    const hasError = meta.touched && meta.error
    return (
        <div className={styles.formControl + ' ' + (hasError ? styles.error: '')}>
            <div>
                <input {...input} {...props}/>
            </div>
            { hasError && <span>{meta.error}</span>}
        </div>
    )
}


export const createField = (placeholder:string, name:string, validators:any, component:any, props={}, text = "") => (
    <div>
        <Field placeholder = {placeholder} name={name} validate={validators} component={component} {...props}/>
        {text}
    </div>
)