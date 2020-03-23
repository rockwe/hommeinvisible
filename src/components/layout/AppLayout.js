import React, { Component } from 'react'
import Header from '../layout/header'
//import SideBar from '../layout/SideBar'

const AppLayout = props => {
  return (
    <div>
      <div>
        <Header />

        <div>
          <section>{props.children}</section>
        </div>
        <footer>
          <div>Copyright &copy; 2018</div>
          <div>2.3.0</div>
        </footer>
      </div>
    </div>
  )
}

export default AppLayout
