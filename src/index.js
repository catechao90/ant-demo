import React from 'react';
import ReactDOM from 'react-dom';
import {
  BrowserRouter as Router,
  Route,
  Redirect
} from 'react-router-dom'
import '@/index.css'
import Login from '@/components/Login'
import App from '@/components/App'
import registerServiceWorker from '@/registerServiceWorker';
import { createStore } from 'redux'
import { Provider } from 'react-redux'
import appReducers from './reducers'
import { Value } from '@/public'
import '@/style.css'

const store = createStore(appReducers)

const PrivateRoute = ({ component: Component, ...rest }) => (
  <Route {...rest} render={props => (
    Value.auth.isAuthenticated ? (
    	<Component {...props}/>
    ) : (
      <Redirect to={{
        pathname: '/login',
        state: { from: props.location }
      }}/>
    )
  )}/>
)


ReactDOM.render(
	<Provider store={store}>
		<Router>
			<div>
				<Route path="/login" component={Login}/>
				<PrivateRoute path="/" component={App}/>
			</div>
	  	</Router>
  	</Provider>, document.getElementById('root'));

registerServiceWorker();
