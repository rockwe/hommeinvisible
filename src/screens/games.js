/* eslint-disable react/jsx-key */
import React from 'react'
import data from '../data.json'

const Jeux = data.Jeux

const Games = () => {
  //console.log(Jeux)
  return (
    <div>
      {Jeux.map(s => (
        <div>
          <p key={s.id}>ID: {s.id}</p>
          <p key={s.id}>TITLE: {s.title}</p>
          <p key={s.id}>DESCIRPTION{s.description}</p>
        </div>
      ))}
    </div>
  )
}

export default Games
