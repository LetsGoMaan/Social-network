import React, {ChangeEvent, useState} from "react";
import classes from "./ProfileInfo.module.css"
import {ProfileType} from "../ProfileContainer";
import Preloader from "../../common/Preloader/Preloader";
import {ProfileStatusWithHooks} from "./ProfileStatusWithHooks";
import userPhoto from "../../../assets/images/user.png";
import ProfileDataForm from "./ProfileDataForm";


type ProfileInfoPropsType = {
    profile: ProfileType
    status: string
    updateStatus: (status: string) => void
    isOwner: boolean
    savePhoto: (photo: File) => void
    saveProfile: (formData: any) => Promise<any>
}


export const ProfileInfo = (props: ProfileInfoPropsType) => {
    const [editMode, setEditMode] = useState(false)
    if (!props.profile) {
        return <Preloader/>
    }

    const onMainPhotoSelected = (e: ChangeEvent<HTMLInputElement>) => {
        if (e.target.files?.length) {
            props.savePhoto(e.target.files[0])
        }
    }
    const onSubmit = (formData: any) => {
        props.saveProfile(formData).then(
            () => {
                setEditMode(false)
            }
        )
    }
    return (
        <>
            <div>
                <img style={{width: "400px"}} src="https://i.ytimg.com/vi/ZXsQAXx_ao0/maxresdefault.jpg" alt=""/>
            </div>
            <div className={classes.descriptionBlock}>
                <img src={props.profile.photos.large || userPhoto} className={classes.mainPhoto} alt="profilePhoto"/>
                {props.isOwner && <input type={"file"} onChange={onMainPhotoSelected}/>}
                {editMode ? <ProfileDataForm profile={props.profile} onSubmit={onSubmit}/> :
                    <ProfileData profile={props.profile} isOwner={props.isOwner} goToEditMode={() => {
                        setEditMode(true)
                    }}/>}

                {/*<ProfileStatus status={props.status} updateStatus={props.updateStatus}/>*/}
                <ProfileStatusWithHooks status={props.status} updateStatus={props.updateStatus}/>
            </div>


        </>
    );
};

const ProfileData = ({profile, isOwner, goToEditMode}: any) => { /// fix any

    return (
        <div>
            {isOwner && <div>
                <button onClick={goToEditMode}>edit</button>
            </div>}
            <div>
                <b>Full name:</b>: {profile.fullName}
            </div>
            <div>
                <b>About me</b>: {profile.aboutMe}
            </div>
            <div>
                <b>Looking for a job</b>: {profile.lookingForAJob ? "yes" : "no"}
            </div>
            {profile.lookingForAJob ?
                <div>
                    <b>My professional skills</b>: {profile.lookingForAJobDescription}
                </div> : <></>
            }
            <div>
                <b>Contacts</b>: {Object.keys(profile.contacts).map(key => {
                return <Contact key={key} contactTitle={key} contactValue={profile.contacts[key]}/>
            })}
            </div>
        </div>
    )
}


type ContactPropsType = {
    contactTitle: string
    contactValue: string
}

const Contact = ({contactTitle, contactValue}: ContactPropsType) => {
    return <div className={classes.contact}>
        <b>{contactTitle}</b>: {contactValue}
    </div>
}

