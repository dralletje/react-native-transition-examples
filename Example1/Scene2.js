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
              justifyContent: 'center',
              alignItems: 'center',
              backgroundColor: '#F5FCFF',
            }}
          >
            <SceneProp
              sceneKey="text1"
              style={{
                paddingBottom: 25,
                marginBottom: 25,
                overflow: 'hidden',
              }}
            >
              <Text
                style={{
                  fontSize: 20,
                  textAlign: 'center',
                }}
              >
                Welcome to React Native!{'\n'}
                .......asdjsdafohiaewrhoiearofuhaewoifh
              </Text>
            </SceneProp>
            <SceneProp
              sceneKey="text2"
              style={{
                marginBottom: 5,
              }}
            >
              <Text
                style={{
                  textAlign: 'center',
                  color: '#333333',
                  backgroundColor: 'rgba(0,0,0,0)',
                }}
              >
                To get started, edit index.ios.js
              </Text>
            </SceneProp>
            <SceneProp
              sceneKey="text3"
              style={{
                marginBottom: 5,
              }}
            >
              <Text
                style={{
                  textAlign: 'center',
                  color: '#333333',
                  backgroundColor: 'rgba(0,0,0,0)',
                }}
              >
                Press Cmd+R to reload,{'\n'}
                Cmd+D or shake for dev menu
              </Text>
            </SceneProp>
            <SceneProp
              sceneKey="text4"
              style={{
                marginBottom: 5,
              }}
            >
              <Text
                style={{
                  textAlign: 'center',
                  color: '#333333',
                  backgroundColor: 'rgba(0,0,0,0)',
                }}
              >
                :D :D :D :D :D
                Cmd+D or shake for dev menu
              </Text>
            </SceneProp>
          </View>
        </Scene>
      </TouchableOpacity>
    );
  }
}

export default Scene1
