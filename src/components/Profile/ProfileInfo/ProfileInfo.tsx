import React from "react";
import classes from "./ProfileInfo.module.css"
import {ProfileType} from "../ProfileContainer";
import Preloader from "../../common/Preloader/Preloader";
import {ProfileStatus} from "./ProfileStatus";

type ProfileInfoPropsType = {
    profile: ProfileType
}


export const ProfileInfo = (props: ProfileInfoPropsType) => {
    if(!props.profile) {
        return <Preloader/>
    }
    return (
        <>
            <div>
                <img src="https://i.ytimg.com/vi/ZXsQAXx_ao0/maxresdefault.jpg" alt=""/>
            </div>
            <div className={classes.descriptionBlock}>
                <div>{props.profile.fullName}</div>
                <img src={props.profile.photos.large} alt="profilePhoto"/>
                <div>{props.profile.aboutMe}</div>
            </div>
            <ProfileStatus status={"Hello my friends"}/>
        </>
    );
};

