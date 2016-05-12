import React from 'react';

import { SceneContainer } from 'react-native-transition'
import { linear, slideIn, slideOut } from 'react-native-transition/source/animations'

import { withState } from 'recompose'

import Scene1 from './Scene1'
import Scene2 from './Scene2'


let Example2 = withState('page', 'setPage', 'scene1')(({ page, setPage }) => {
  let Page = page === 'scene1' ? Scene1 : Scene2

  let imgTransition = (side) => ({
    enter: slideIn(side),
    change: linear(),
    leave: slideOut(side),
  })

  return (
    <SceneContainer
      transitions={{
        img1: imgTransition(),
        img2: imgTransition('right'),
        img3: imgTransition('bottom'),
        img4: imgTransition('right'),
      }}
    >
      <Page
        onPress={() => {
          setPage(page === 'scene1' ? 'scene2' : 'scene1')
        }}
      />
    </SceneContainer>
  )
})

export default Example2
