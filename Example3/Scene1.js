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
              backgroundColor: 'black',
              borderRadius: 75,
            }}
          >
            <Text
              style={{
                fontSize: 30,
                color: 'red',
                backgroundColor: 'transparent',
                margin: 20,
              }}
              sceneKey="text1"
            >Hello</Text>
          </View>
        </View>
      </Scene>
    </TouchableOpacity>
  );
}

export default Scene1
