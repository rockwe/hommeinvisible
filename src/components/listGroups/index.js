import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

import { connect } from 'react-redux'
import GroupItem from '../groupItem/'

const Groups = props => {
  console.log('props', props)

  return (
    <Wrapper>
      {props.gameState?.group?.map(form => {
        console.log('form', form)
        if (
          (props.filters.game !== 'all' &&
            props.filters.game !== form.group.game) ||
          form.group.players == '0'
        )
          return
        return (
          <GroupItem
            key={form.id}
            game={form.group.game}
            players={form.group.players}
            desc={form.group.description}
          ></GroupItem>
        )
      })}
    </Wrapper>
  )
}

Groups.propTypes = {
  filters: PropTypes.object,
  gameState: PropTypes.object
}
const Wrapper = styled.div`
  width: 100%;
`

const mapStateToProps = state => ({
  gameState: state.formGame,
  filters: state.filters
})

export default connect(mapStateToProps)(Groups)
