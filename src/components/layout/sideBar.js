import React, { useState } from 'react'
import styled from 'styled-components'
import { motion } from 'framer-motion'

const sideBar = props => {
  const [menu, setMenu] = useState('hidden')
  return (
    <Container>
      <Menu animate={menu} variants={menuVariants}>
        <p>Coco</p>
      </Menu>
      <p
        onClick={() => {
          setMenu(menu === 'visible' ? 'hidden' : 'visible')
        }}
      >
        Burger
      </p>
      <Content>
        <HoverMotion whileHover={{ scale: 2 }}></HoverMotion>
        <TapMotion whileTap={{ scale: 1.3 }}></TapMotion>
      </Content>
    </Container>
  )
}

const Menu = styled(motion.div)`
  width: 300px;
  height: 100vh;
  background-color: red;
`

const Content = styled.div``

const Container = styled.div`
  height: 100vh;
  display: flex;
  width: 100%;
  flex-direction: row;
`

const HoverMotion = styled(motion.img)`
  width: 300px;
  height: 100px;
`

const TapMotion = styled(motion.img)`
  width: 300px;
  height: 100px;
`
export default sideBar
