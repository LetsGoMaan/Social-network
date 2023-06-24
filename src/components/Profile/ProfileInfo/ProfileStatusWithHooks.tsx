import React, {ChangeEvent, useState} from "react";

type PropsType = {
    status: string
    updateStatus: (status: string) => void
}


export const ProfileStatusWithHooks = (props: PropsType) => {

    const [editMode, setEditMote] = useState(false)
    const [status, setStatus] = useState(props.status)

    const activateEditMode = () => {
        setEditMote(true)
    }

    const deactivateEditMode = () => {
        setEditMote(false)
        props.updateStatus(status)
    }

    const onStatusChange = (e: ChangeEvent<HTMLInputElement>) => {
        setStatus(e.currentTarget.value)
    }

    return (
        <div>
            {!editMode
                ?
                <div>
                    <span onDoubleClick={activateEditMode}>{props.status || "-----"}</span>
                </div>
                :
                <div>
                    <input onChange={onStatusChange} autoFocus onBlur={deactivateEditMode} value={status}/>
                </div>
            }
        </div>
    );
}

