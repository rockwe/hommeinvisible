import React, { Component } from 'react'

class AuthLayout extends Component {
  constructor(props) {
    super(props)
  }

  render() {
    return (
      <React.Fragment>
        <section className='section'>
          <div className='container mt-5'>
            <div className='row'>{this.props.children}</div>
          </div>
        </section>
      </React.Fragment>
    )
  }
}

export default AuthLayout
