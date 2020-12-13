import React, {Component} from 'react';
import { useHistory } from 'react-router-dom';
import Input from '@material-ui/core/Input';
import InputLabel from '@material-ui/core/InputLabel';
import FormControl from '@material-ui/core/FormControl';
import FormHelperText from '@material-ui/core/FormHelperText';
import Button from '@material-ui/core/Button';


class New extends Component {
  
  // counter = 0;
  state = {
 
    eventId: "",
    eventName: "",

  };

  handleSubmit = (e) => {
    e.preventDefault();
    // const a = [this.state];
    // const a = JSON.parse(localStorage.getItem('document') || []) ;
    // a.push(this.state);
    // localStorage.setItem('document',JSON.stringify(a));
    
    if(localStorage.getItem('document')===null){
      var document = [];
      document.push(this.state);
      localStorage.setItem('document', JSON.stringify(document))
  } else {
      var document = []
      document = JSON.parse(localStorage.getItem('document'))
      document.push(this.state)
      localStorage.setItem('document', JSON.stringify(document))
  }
    this.props.history.push('/');
  }

  handleChange = (e) => {
    this.setState({[e.target.name]:e.target.value});
  }

  render() {
    return(
      <React.Fragment>
           <h1>Add Notification</h1>
       
               <form className="row mt-5" onSubmit={this.handleSubmit}>
               <div className="col-md-4">
                 <FormControl className="mb-5" fullWidth>
                   <InputLabel htmlFor="name-simple">EventId</InputLabel>
                   <Input type="text" name="eventId" id="nameSimple" value={this.state.eventId} onChange={this.handleChange}/>
                 </FormControl>
               </div>
               <div className="col-md-4">
                 <FormControl className="mb-5" fullWidth>
                   <InputLabel htmlFor="name-helper">EventName</InputLabel>
                   <Input type="text" name="eventName" id="nameHelper" value={this.state.eventName} onChange={this.handleChange}/>    
                 </FormControl>
               </div>
              
               
               <div>
               <Button variant="contained"  type="submit"  color="primary" className="jr-btn text-white mt-5"style={{marginLeft: "520px"}}>Add</Button>
               </div>
                 </form>
      </React.Fragment>
    )
  }
}

export default New;

