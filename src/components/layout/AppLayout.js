import React, { Component } from 'react'
import Header from '../layout/header'

const AppLayout = props => {
  return (
    <div>
      <div>
        <Header />
        <div>
          <section>{props.children}</section>
        </div>
        <footer>
          <div>Copyright &copy; 2020</div>
        </footer>
      </div>
    </div>
  )
}

export default AppLayout
