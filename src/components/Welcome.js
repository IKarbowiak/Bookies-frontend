import {Link} from 'react-router-dom'

export const Welcome = () => (
  <div>
    <div className="App-header">
      <p>
        Welcome in Bookies!
      </p>
      <p>
       <Link to="/login">Log in</Link> <br/>
       <Link to="/sign-in">Sign in</Link>
      </p>
    </div>
  </div>
)