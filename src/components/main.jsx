import React, {Component} from "react";
//import { useHistory } from 'react-router-dom';


//const Main = () => {

class Main extends Component {

    // const [data, setData] = useState([]);
    // const [isEdit, setIsEdit] = useState(false);
    state = {
        data: [],
        isEdit: false
    }
    //const [id, setId] = useState("");

    //const history = useHistory()

//  handleNew = () => {
//         this.props.history.push("/new")
//     }


    // useEffect(() => {
    //     displayData()
    // },[]);
    componentDidMount() {
        this.displayData()
    }

    displayData = () => {
        const Data =  JSON.parse(localStorage.getItem('document'));
        console.log("document", Data);
        this.setState({data: Data})
        // setData(Data);
    }

      handleEdit = (e, id) => {
        console.log(id);
        this.setState((prevState,props) => ({ 
            isEdit : !prevState.isEdit
          }))
        this.props.history.push(`/edit/${id}`)
     }



    handleDelete = (e, id) => {
            console.log(id);
            // const Data =  JSON.parse(localStorage.getItem('document'));  
            // const res = Data && Data.filter(item => item.eventId !== id);
            // console.log("res", res)     
            // //Data && Data.splice(id, 1);
            // localStorage.setItem("document", JSON.stringify(res));
            // displayData();
            let r = window.confirm("Do you want to delete this item");
            if (r === true) {
                let filteredDataList = this.state.data.filter(x => x.eventId !== id);
                // setData(filteredDataList);
          
                this.setState((prevState, props) => ({
                  data: filteredDataList
                 }));
                localStorage.setItem('document', JSON.stringify(filteredDataList));
              }
    }

     handleCheck = (e, id) => {
        console.log("e", id);
        //setId(id);
    }
   
    render() {
        const {data} = this.state;
        

    return(
        <React.Fragment>
        {/* <Edit editSubmit={this.editHandleSubmit}/> */}
        <button className="btn btn-primary mr-5" onClick={this.handleNew}>Add</button>
       {/* <button className="btn btn-danger mr-5" onClick={(e) => handleDelete(id)}>Delete</button> 
       <button className="btn btn-warning mr-5" onClick={handleEdit}>Edit</button> */}
        <div>
           <table className="table">
           <thead>
             <tr>
           
               <th scope="col">EventId</th>
               <th scope="col">EventName</th>
               <th scope="col">Code</th>
       
              
            
             </tr>
           </thead>
           <tbody>
               {data && data.map(n =>  {       
                       return (
                        <tr key={n.eventId}>
                           
                            <td>{n.eventId}</td>
                            <td>{n.eventName}</td>
                            <td>
                            <div className="form-check">
                            <input type="checkbox" className="form-check-input" id="exampleCheck1" onClick={(e) => this.thandleCheck(e, n.eventId)}/>
                            <button className="btn btn-danger mr-5" onClick={(e) => this.handleDelete(e, n.eventId)}>Delete</button> 
                            <button className="btn btn-warning mr-5" onClick={e => this.handleEdit(e, n.eventId)}>Edit</button>
                            </div>
                            </td>
                        </tr>
                                  
                    )
                       
   
               })} 
           
           </tbody>
         </table>
        </div>
        </React.Fragment>
    )

            }
}

export default Main;