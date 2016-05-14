import React from 'react'
import { View, Text, TouchableOpacity } from 'react-native'

import { Scene } from 'react-native-transition'

class Scene1 extends React.Component {
  render() {
    return (
      <TouchableOpacity style={{ flex: 1 }} onPress={this.props.onPress}>
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
                flex: 1,
                backgroundColor: 'blue',
                borderRadius: 0,
                margin: 20,
              }}
            >
              <Text
                style={{
                  fontSize: 100,
                  color: 'white',
                  backgroundColor: 'transparent',
                  margin: 100,
                }}
                sceneKey="text1"
              >Hello</Text>
            </View>
          </View>
        </Scene>
      </TouchableOpacity>
    );
  }
}

export default Scene1
