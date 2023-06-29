import React, {ChangeEvent} from "react";
import classes from "./ProfileInfo.module.css"
import {ProfileType} from "../ProfileContainer";
import Preloader from "../../common/Preloader/Preloader";
import {ProfileStatusWithHooks} from "./ProfileStatusWithHooks";
import userPhoto from "../../../assets/images/user.png";

type ProfileInfoPropsType = {
    profile: ProfileType
    status: string
    updateStatus: (status: string) => void
    isOwner: boolean
    savePhoto: (photo: File) => void
}




export const ProfileInfo = (props: ProfileInfoPropsType) => {
    if(!props.profile) {
        return <Preloader/>
    }

    const onMainPhotoSelected = (e:ChangeEvent<HTMLInputElement>) => {
        if (e.target.files?.length) {
            props.savePhoto(e.target.files[0])
        }
    }
    return (
        <>
            <div>
                <img src="https://i.ytimg.com/vi/ZXsQAXx_ao0/maxresdefault.jpg" alt=""/>
            </div>
            <div className={classes.descriptionBlock}>
                <div>{props.profile.fullName}</div>
                <img src={props.profile.photos.large || userPhoto} className={classes.mainPhoto} alt="profilePhoto"/>
                {props.isOwner && <input type={"file"} onChange={onMainPhotoSelected}/>}
                <div>{props.profile.aboutMe}</div>
            </div>
            {/*<ProfileStatus status={props.status} updateStatus={props.updateStatus}/>*/}
            <ProfileStatusWithHooks status={props.status} updateStatus={props.updateStatus}/>
        </>
    );
};

