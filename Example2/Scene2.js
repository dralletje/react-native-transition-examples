import React from 'react'
import { View, Text, TouchableOpacity } from 'react-native'

import { Scene, SceneProp } from 'react-native-transition'

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
            <SceneProp
              sceneKey="img1"
              style={{
                flex: 1,
                backgroundColor: 'blue',
              }}
            />
          </View>
        </Scene>
      </TouchableOpacity>
    );
  }
}

export default Scene1
