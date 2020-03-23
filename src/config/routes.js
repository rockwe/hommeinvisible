import React, { Component } from 'react'

import Login from '../screens/login'
import Games from '../screens/games'
import MyGames from '../screens/myGames'
import {
  Route,
  BrowserRouter as Router,
  Switch,
  Redirect
} from 'react-router-dom'
import AppLayout from '../components/layout/AppLayout'

import AuthLayout from '../components/layout/AuthLayout'
import { withTranslation } from 'react-i18next'

const Routes = (...props) => {
  const AppRoute = ({ component: Component, layout: Layout, t }) => {
    return (
      <Route
        render={props => (
          <Layout>
            <Component {...props} />
          </Layout>
        )}
      />
    )
  }

  const AuthRoute = ({ component: Component, layout: Layout }) => {
    return (
      <Route
        render={props =>
          localStorage.getItem('token') ? (
            <Layout>
              <Component {...props} />
            </Layout>
          ) : (
            <Redirect to='/games' />
          )
        }
      />
    )
  }
  return (
    <Router>
      <Switch>
        <AppRoute exact path='/' component={Login} layout={AuthLayout} exact />
        <AuthRoute path='/games' component={Games} layout={AppLayout} exact />
        <AuthRoute
          path='/mygames'
          component={MyGames}
          layout={AppLayout}
          exact
        />
        <Redirect to='/' />
      </Switch>
    </Router>
  )
}

export default withTranslation()(Routes)
