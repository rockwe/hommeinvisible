import React from 'react'

import Login from '../screens/login'
import Games from '../screens/games'

import {
  Route,
  BrowserRouter as Router,
  Switch,
  Redirect
} from 'react-router-dom'

const Routes = () => {
  return (
    <Router>
      <Switch>
        <Route exact path='/' component={Login}></Route>
        <Route path='/games' component={Games}></Route>
        <Redirect to='/' />
      </Switch>
    </Router>
  )
}

export default Routes
