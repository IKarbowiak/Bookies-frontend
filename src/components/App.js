import {Route, Switch} from 'react-router-dom'

import '../App.css'
import {LoginWindow} from './LoginWindow'
import SignInWindow from './SignInWindow'
import {Welcome} from './Welcome'


function App() {
  return (
    <div className="App">
        <Switch>
          <Route exact path="/" component={Welcome}/>
          <Route path="/login" component={LoginWindow}/>
          <Route path="/sign-in" component={SignInWindow}/>
        </Switch>
    </div>
  );
}

export default App;
