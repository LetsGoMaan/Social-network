import React from "react";
import classes from "./ProfileInfo.module.css"

export const ProfileInfo = () => {
    return (
        <>
            <div>
                <img src="https://i.ytimg.com/vi/ZXsQAXx_ao0/maxresdefault.jpg" alt=""/>
            </div>
            <div className={classes.descriptionBlock}>
                ava + description
            </div>
        </>
    );
};

