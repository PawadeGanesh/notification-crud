import React, { Component } from 'react';
//import logo from './logo.svg';
import '../../App.css';
import NotificationItem from './notificationItem';

const notifictionList = [
{id: 1, eventId: 1, eventName: "as"}
];

if (localStorage.getItem("notifications") === null)
  localStorage.setItem('notifications', JSON.stringify(notifictionList));

class App extends Component {

    state = {
      notificationList: [],

    }
  
  
  componentWillMount() {
    let notificationList = JSON.parse(localStorage.getItem("notifications"));

    this.setState((prevState, props) => (
      {
        notificationList: notificationList
      }
    )
    );
  }

  addNewNotification = () => {

    
    this.setState((prevState, props) => ({
      notificationList: [...prevState.notificationList, { 
          id:Math.max(...prevState.notificationList.map(function(o){return o.id})) + 1, eventId: '', eventName: 1 
        }]
    }));

    this.setState((prevState,props) => ({ 
        isNew : !prevState.isNew
      }))
  }

  deleteNotification = (id) => {
    console.log(id)
    let r = window.confirm("Do you want to delete this item");
    if (r === true) {
      let filterednotificationList = this.state.notificationList.filter(x => x.id !== id);

      this.setState((prevState, props) => ({
        notificationList: filterednotificationList
      }));
      localStorage.setItem('notifications', JSON.stringify(filterednotificationList));
    }
  }
  saveNotification = (id,eventId, eventName) => {
    console.log("IDD",id)
    let notificationListCopy = this.state.notificationList.map((notification) => {
      
      if (notification.id === id) {
        notification.eventId = eventId;
        notification.eventName = eventName;
       
      }
      return notification;
    });
    console.log("notificationListCopy", notificationListCopy)
    this.setState((prevState, props) => ({
      notificationList: notificationListCopy
    }));
    localStorage.setItem('notifications', JSON.stringify(notificationListCopy));
  }
  render() {
      const {notificationList} = this.state;
      const res = notificationList.map (n => n);
      console.log("res", res);
    return (
        <React.Fragment>
        
    <div className="container-fluid">
        <div className="row mt-3"><div className="col-lg-12">
          <div className="card">
            <div className="card-header">
              Student Registry
              <button className="btn btn-dark pull-left" onClick={this.addNewNotification}>Add New</button> 
             
            </div>
            <div className="card-body">
                
              <table className="table table-hover">
                <thead className="thead-dark">
                    <tr>
                        <th>#</th>
                        <th>evenId</th>
                        <th>eventName</th>
                        <th>Edit/Save</th>
                        <th>Delete</th>
                    </tr>
                </thead>
               
                <tbody>
                {notificationList && notificationList.map ((item, index) => {
                   return (
                    <NotificationItem 
                    className="bg-warning"
                    key={index}
                    notification={item}s
                    index={index}
                    notificationList={this.state.notificationList}
                    deleteNotification={this.deleteNotification}
                    saveNotification={this.saveNotification}
               />
                   )
               })}  
                </tbody>
           
              </table>
            
            </div></div></div></div></div>

        </React.Fragment>

 
    );
  }
}

export default App;
