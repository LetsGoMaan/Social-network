import React from "react";
import classes from "./Header.module.css"
import {NavLink} from "react-router-dom";

type HeaderPropsType = {
    isAuth: boolean
    login: string
}

export const Header = (props: HeaderPropsType) => {
    return (
        <>
            <header className={classes.header}>
                <img src="https://cdn-icons-png.flaticon.com/512/5233/5233785.png" alt="logo"/>
                <div className={classes.loginBlock}>
                    {props.isAuth ? props.login :  <NavLink to={'/login'}>Login</NavLink>}

                </div>
            </header>
        </>

    );
};
