import React, {Component} from 'react';
import { useHistory } from 'react-router-dom';
import Input from '@material-ui/core/Input';
import InputLabel from '@material-ui/core/InputLabel';
import FormControl from '@material-ui/core/FormControl';
import FormHelperText from '@material-ui/core/FormHelperText';
import Button from '@material-ui/core/Button';


class Edit extends Component {
  
  // counter = 0;
  state = {
   data: [],
    isEdit: false,
   eventId: "",
   eventName: ""
  };

  // handleUpdate = (eventId, eventName) => {
  //   // e.preventDefault();
  //   console.log("a");

  //   let dataListCopy = this.state.data.map((n) => {
  //     if (n.eventId === eventId) {
  //       n.eventId = eventId;
  //       n.eventName = eventName;
       
  //     }
  //     return n;
  //   });
  //   console.log("dataListCopy", dataListCopy)
  //   this.setState((prevState, props) => ({
  //     data: dataListCopy
  //   }));
  //   localStorage.setItem('document', JSON.stringify(dataListCopy));

  // }

  handleUpdate = () => {
    
  }

  // handleUpdate = (e, eventId, eventName) => {
  //   e.preventDefault();
  //   const res = this.state.data && this.state.data.length;
  //   console.log("res",res, eventId)
  //   // const {id} = this.props.eventId;
  //   // console.log(id);
  //   this.setState((prevState,props) => ({
  //     isEdit : !prevState.isEdit
  //   }));

  //   let dataListCopy = this.state.data.map(n => {
  //     if(n.eventId === res){
  //         n.eventId = eventId;
  //         n.eventName = eventName;
  //     }
  //     return n;
  // });
  // console.log("dataListCopy", dataListCopy);
  // this.setState((prevState, props) => ({
  //     data: dataListCopy
  //   }));
  //   localStorage.setItem('document', JSON.stringify(dataListCopy));

  // }



  handleChange = (e) => {
    this.setState({[e.target.name]:e.target.value});
  }

  
  componentDidMount(){
    const Data =  JSON.parse(localStorage.getItem('document'));
    console.log("Data123", Data);
    this.setState({ data: Data});
  }

  render() {
      const {data} = this.state;
    return(
      <React.Fragment>
           <h1>Edit Notification</h1>
           {
               data && data.map((input,n) => {
                   return (
                       <div key={input}>
                         {input}
                        <form className="row mt-5" onSubmit={this.handleUpdate}>
               <div className="col-md-4">
                 <FormControl className="mb-5" fullWidth>
                   <InputLabel htmlFor="name-simple">EventId</InputLabel>
                   <Input type="text" name="eventId" id="nameSimple" defaultValue={n.eventId} onChange={this.handleChange}/>
                 </FormControl>
               </div>
               <div className="col-md-4">
                 <FormControl className="mb-5" fullWidth>
                   <InputLabel htmlFor="name-helper">EventName</InputLabel>
                   <Input type="text" name="eventName" id="nameHelper" defaultValue={n.eventName} onChange={this.handleChange}/>    
                 </FormControl>
               </div>
              
               
               <div>
               <Button variant="contained"  type="submit"  color="primary" className="jr-btn text-white mt-5"style={{marginLeft: "520px"}}>Add</Button>
               </div>
                 </form>
                       </div>
                   )
               })
           }
       
               
      </React.Fragment>
    )
  }
}

export default Edit;

