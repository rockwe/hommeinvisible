import React from 'react'

const sideBar = props => {
  const isActiveRoute = route => {
    return window.location.pathname.indexOf(route) !== -1
  }
  return (
    <div>
      <div>
        <a href='/'>Accueil</a>
      </div>
      <ul>
        <li>
          <a href='/games' className='nav-link'>
            <i className='fas fa-fire' />
            <span>games</span>
          </a>
        </li>
        <li>
          <a href='/mygames' className='nav-link'>
            <i className='fas fa-lightbulb' />
            <span>MyGames</span>
          </a>
        </li>
      </ul>
    </div>
  )
}

export default sideBar
