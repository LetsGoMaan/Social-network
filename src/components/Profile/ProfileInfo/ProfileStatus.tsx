import React, {ChangeEvent} from "react";

type PropsType = {
    status: string
    updateStatus: (status: string) => void
}


export class ProfileStatus extends React.Component<PropsType, any> {
    state = {
        editMode: false,
        status: this.props.status
    }

    activateEditMode = () => {
        console.log("this:", this)
        this.setState({
            ...this.state,
            editMode: true
            }
        )
    }

    deactivateEditMode = () => {
        this.setState({
            ...this.state,
                editMode: false
            })
        this.props.updateStatus(this.state.status)
    }

    onStatusChange = (e:ChangeEvent<HTMLInputElement>) => {
        this.setState({
            ...this.state,
            status:e.currentTarget.value
        })
    }

    componentDidUpdate(prevProps: Readonly<PropsType>, prevState: Readonly<any>, snapshot?: any) {
        if(prevProps.status !== this.props.status) {
            this.setState({
                ...this.state,
                status: this.props.status
            })
        }
    }

    render() {
        return (
            <div>
                {!this.state.editMode
                    ?
                    <div>

                        <span onDoubleClick={this.activateEditMode}>{this.props.status || '-----'}</span>
                    </div>
                    :
                    <div>
                        <input onChange={this.onStatusChange} autoFocus onBlur={this.deactivateEditMode} value={this.state.status}/>
                    </div>
                }
            </div>
        );
    }
}

