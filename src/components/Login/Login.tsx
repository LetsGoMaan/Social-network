import React from "react";
import {Field, InjectedFormProps, reduxForm} from "redux-form";
import {Input} from "../common/FormsControls/FormsControls";
import {required} from "../../utils/validators/validators";
import {connect} from "react-redux";
import {login} from "../../redux/auth-reducer";
import {Redirect} from "react-router-dom";
import {AppStateType} from "../../redux/redux-store";
import styles from "../common/FormsControls/FormsControls.module.css"


type FormDataType = {
    email: string
    password: string
    rememberMe: boolean
    captcha: null
}
type MapStatePropsType = {
    isAuth: boolean
    captchaUrl: null
}

const Login = (props: any) => {

    const onSubmit = (formData: FormDataType) => { //// fix any
        console.log(formData)
        props.login(formData.email, formData.password, formData.rememberMe, formData.captcha)
    }

    if (props.isAuth) {
        return <Redirect to={"/profile"}/>
    }

    return (
        <div>
            <h1>LOGIN</h1>
            <LoginReduxForm onSubmit={onSubmit} captchaUrl={props.captchaUrl}/>
        </div>
    );
};

const mapStateToProps = (state: AppStateType): MapStatePropsType => {
    return {
        isAuth: state.auth.isAuth,
        captchaUrl: state.auth.captchaUrl
    }
}

export default connect(mapStateToProps, {login})(Login);

export type LoginFormProsType = {captchaUrl:any}
const LoginForm:  React.FC<InjectedFormProps<FormDataType,LoginFormProsType> & LoginFormProsType> = ({handleSubmit,error, captchaUrl}) => { /////// fix any/
    return (
        <form onSubmit={handleSubmit}>
            <div>
                <Field placeholder={"Email"} name={"email"} component={Input} validate={[required]}/>
            </div>
            <div>
                <Field placeholder={"Password"} name={"password"} component={Input} validate={[required]}
                       type={"password"}/>
            </div>
            <div>
                <Field type={"checkbox"} name={"remember me"} component={Input}/> remember me
            </div>

            {captchaUrl && <img src={captchaUrl}/>}
            {/*{captchaUrl && createField('Symbols from image', "captcha", [required], Input,{})}*/}
            {captchaUrl && <Field placeholder={"Captcha"} name={"captcha"} component={Input}/>}
            {error && <div className={styles.formSummaryError}>
                    {error}
                </div>
            }
            <div>
                <button>Login</button>
            </div>
        </form>
    );
};

const LoginReduxForm = reduxForm<FormDataType,LoginFormProsType>({form: "login"})(LoginForm)
