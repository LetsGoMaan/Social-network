import React from "react";
import {reduxForm} from "redux-form";
import {createField, Input, Textarea} from "../../common/FormsControls/FormsControls";
import classes from "./ProfileInfo.module.css"
import styles from "../../common/FormsControls/FormsControls.module.css"



const ProfileDataForm = ({profile, handleSubmit,error}: any) => {
    console.log(profile)
    return (
        <form onSubmit={handleSubmit}>
            <div>
                <button onClick={() => {
                }}>Save
                </button>
                {error && <div className={styles.formSummaryError}>
                    {error}
                </div>}
            </div>
            <div>
                <b>Full name:</b>: {createField("Full name", "fullName", [], Input)}
            </div>
            <div>
                <b>Looking for a job</b>: {createField("", "lookingForAJob", [], Input, {type: "checkbox"})}
            </div>
            <div>
                <b>My professional skills</b>: {createField("My professional skills", "lookingForAJobDescription", [], Textarea)}
            </div>
            <div>
                <b>About Me</b>: {createField("About Me", "aboutMe", [], Textarea)}
            </div>


            <div>
                <b>Contacts</b>: {Object.keys(profile.contacts).map(key => {
                return <div key={key} className={classes.contact}>
                    <b>{key}: {createField(key, "fullName." + key, [], Input)}</b>
                </div>
            })}
            </div>
        </form>
    )
}

const ProfileDataFormReduxForm = reduxForm({form: "edit-profile"})(ProfileDataForm)

export default ProfileDataFormReduxForm