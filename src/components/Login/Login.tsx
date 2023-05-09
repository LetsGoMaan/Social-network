import React from "react";
import {SubmitHandler, useForm} from "react-hook-form"


type InputsType = {
    login: string,
    password: string,
    rememberMe: boolean
}


const LoginForm = () => {
    const {
        register,
        formState: {
            errors,
            isValid
        },
        handleSubmit,
        reset
    } = useForm({
        mode: "onBlur"
    })

    const onSubmit = (data: any) => {
        alert(JSON.stringify(data))
        reset()
    }

    return (
        <form onSubmit={handleSubmit(onSubmit)}>
            <label>
                <input
                    {...register('login', {
                        required: "Поле обязательно к заполнению",
                        minLength: {
                            value: 5,
                            message: "Минимум 5 символов"
                        },

                    })}
                    placeholder={"Login"}
                />
            </label>
            <div>
                {errors.login && <span>{errors?.login?.message
                    ? errors.login.message : 'error!'
                }</span>}
            </div>

            <label>
                <input
                    {...register('password', {
                        required: "Поле обязательно к заполнению",
                        minLength: {
                            value: 5,
                            message: "Минимум 5 символов"
                        }
                    })}
                    placeholder={"Password"}
                />
            </label>
            <div>
                {errors.password && <span>{errors?.password?.message
                    ? errors.password.message : 'error!'
                }</span>}
            </div>
            <div>
                <label>Remember me <input type="checkbox" {...register('rememberMe')}/></label>
            </div>
            <input type="submit" disabled={!isValid}/>

        </form>
    );
};


const Login = () => {
    return (
        <div>
            <h1>LOGIN</h1>
            <LoginForm/>
        </div>
    );
};

export default Login;