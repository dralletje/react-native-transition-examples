import React from 'react'
import { View, Text, TouchableOpacity } from 'react-native'

import { Scene, SceneView } from 'react-native-transition'

let Scene1 = ({ onPress }) => {
  let style = {
    width: 150,
    height: 150,
    marginBottom: 50,
    marginTop: 50,
  }

  return (
    <TouchableOpacity style={{ flex: 1 }} onPress={onPress}>
      <Scene>
        <View
          style={{
            flex: 1,
            justifyContent: 'space-around',
            alignItems: 'stretch',
            backgroundColor: '#F5FCFF',
            flexDirection: 'row',
            flexWrap: 'wrap',
          }}
        >
          <SceneView
            sceneKey="img1"
            style={{
              ...style,
              backgroundColor: 'blue',
            }}
          />
          <SceneView
            sceneKey="img2"
            style={{
              ...style,
              backgroundColor: 'red',
            }}
          />
          <SceneView
            sceneKey="img3"
            style={{
              ...style,
              backgroundColor: 'green',
            }}
          />
          <SceneView
            sceneKey="img4"
            style={{
              ...style,
              backgroundColor: 'yellow',
            }}
          />
        </View>
      </Scene>
    </TouchableOpacity>
  );
}

export default Scene1
