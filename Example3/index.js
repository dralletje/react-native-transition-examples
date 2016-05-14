import React from 'react';

import { SceneContainer, transitions } from 'react-native-transition'
let { linear, style, compose } = transitions

import { withState } from 'recompose'

import Scene1 from './Scene1'
import Scene2 from './Scene2'


let Example2 = withState('page', 'setPage', 'scene1')(({ page, setPage }) => {
  let Page = page === 'scene1' ? Scene1 : Scene2

  return (
    <SceneContainer
      transitions={{
        img1: compose([
          style(['backgroundColor', 'borderRadius']),
          linear(),
        ]),
        text1: style(['fontSize', 'color', 'margin']),
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
