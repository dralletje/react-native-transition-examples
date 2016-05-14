import React from 'react'
import { View, Text, TouchableOpacity } from 'react-native'

import { Scene } from 'react-native-transition'

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
          <View
            sceneKey="img1"
            style={{
              ...style,
              backgroundColor: 'blue',
            }}
          />
          <View
            sceneKey="img2"
            style={{
              ...style,
              backgroundColor: 'red',
            }}
          />
          <View
            sceneKey="img3"
            style={{
              ...style,
              backgroundColor: 'green',
            }}
          />
          <View
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
