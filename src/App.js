import logo from './logo.svg';
import './App.css';
import { Route, BrowserRouter as Router, Switch } from 'react-router-dom'
// import Main from "./components/main";
 import New from "./components/new";
// import Edit from "./components/edit";
// import Display from './components/display';
// import List from './components/list';
import Notification from './components/container/notification';


function App() {
  return (
    <div className="App">
       <Router>

      <Switch>
     {/* <Route exact path="/" component={Main} />{' '}
        <Route path="/new" component={New} />{' '}
        <Route path="/edit/:id" component={Edit} />{' '}  */}
        {/* <Route path="/" component={Display} /> */}
        <Route exact path="/" component={Notification}/>
        <Route exact path="/new" component={New} />{' '}
      </Switch>{' '}

    </Router>
    </div>
  );
}

export default App;
