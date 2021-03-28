import {Route, Switch} from 'react-router-dom'
import {ApolloClient, ApolloProvider, HttpLink, InMemoryCache} from '@apollo/client'

import '../App.css'
import {LoginWindow} from './LoginWindow'
import SignInWindow from './SignInWindow'
import {Welcome} from './Welcome'
import {Books} from './Books'


// Initialize Apollo client
const client = new ApolloClient({
  cache: new InMemoryCache(),
  link: new HttpLink({
    uri: "http://localhost:8000/graphql/",
  }),
  credentials: "same-origin"
})

function App() {
  return (
    <ApolloProvider client={client}>
      <div className="App">
          <Switch>
            <Route exact path="/" component={Welcome}/>
            <Route path="/login" component={LoginWindow}/>
            <Route path="/sign-in" component={SignInWindow}/>
            <Route path="/books" component={Books}/>
          </Switch>
      </div>
    </ApolloProvider>
  );
}

export default App;
