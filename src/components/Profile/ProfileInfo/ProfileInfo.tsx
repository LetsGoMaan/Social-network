import React from "react";
import classes from "./ProfileInfo.module.css"
import {ProfileType} from "../ProfileContainer";
import Preloader from "../../common/Preloader/Preloader";
import {ProfileStatusWithHooks} from "./ProfileStatusWithHooks";

type ProfileInfoPropsType = {
    profile: ProfileType
    status: string
    updateStatus: (status: string) => void
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
            {/*<ProfileStatus status={props.status} updateStatus={props.updateStatus}/>*/}
            <ProfileStatusWithHooks status={props.status} updateStatus={props.updateStatus}/>
        </>
    );
};

