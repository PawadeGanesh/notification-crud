import React,{Component} from "react";

class NotificationItem extends Component {

    state = {
        isEdit: false
    }

    handleCheck = () => {
        const {id} = this.props.notification;
        this.props.notificationCheck(id);
        console.log("check", id )
    }

    editNotification = () => {
        this.setState((prevState,props) => ({ 
            isEdit : !prevState.isEdit
          }))
        console.log("editNotification")
    }

    deleteNotification = () => {
        const {id} = this.props.notification;
        this.props.deleteNotification(id);
        console.log("deleteNotification")
    }

    saveNotification = () => {
        const {id} = this.props.notification;
        console.log("save",id);
        this.setState((prevState,props) => ({
          isEdit : !prevState.isEdit
        }));
        this.props.saveNotification(id,this.eventIdInput.value,this.evetNameInput.value);
        console.log("saveNotification")
    }

    render() {
        const {eventId, eventName} = this.props.notification;
        return (
            

            this.state.isEdit === true ? 
            (
                <tr className="bg-warning" key={this.props.index}>
                <td><input type="checkbox"/></td>
                <td><input ref={eventIdInput => this.eventIdInput = eventIdInput} defaultValue ={eventId}/></td>
                <td><input defaultValue={eventName} ref={evetNameInput => this.evetNameInput = evetNameInput}/></td>
                <td><i className="far fa-save" onClick={this.saveNotification}></i></td>
                <td><i className="fas fa-trash"></i></td>
              </tr>
            ) 
            : 
            (
                <tr key={this.props.index}>
               
                <td><input type="checkbox" onClick={this.handleCheck}/></td>
                <td>{eventId}</td>
                <td>{eventName}</td>
                <td><i className="far fa-edit" onClick={this.editNotification}></i></td>
                <td><i className="fas fa-trash" onClick={this.deleteNotification}></i></td> 
                </tr>
            )
           
           
        )
    }
}

export default NotificationItem;