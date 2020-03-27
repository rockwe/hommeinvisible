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
  const token = localStorage.getItem('x-access-token')

  const AppRoute = ({ component: Component, layout: Layout, ...rest }) => {
    return (
      <Route
        {...rest}
        render={props => (
          <Layout>
            <Component {...props} />
          </Layout>
        )}
      />
    )
  }

  const AuthRoute = ({ component: Component, layout: Layout, ...rest }) => {
    return (
      <Route
        {...rest}
        render={props =>
          token ? (
            <Layout>
              <Component {...props} />
            </Layout>
          ) : (
            <Redirect to='/signin' />
          )
        }
      />
    )
  }
  return (
    <Router>
      <Switch>
        <Redirect from='/' to='/games' exact />
        <AppRoute exact path='/signin' component={Login} layout={AuthLayout} />
        <AuthRoute path='/games' component={Games} layout={AppLayout} />
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
