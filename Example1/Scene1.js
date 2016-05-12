import React from 'react'
import { View, Text, TouchableOpacity } from 'react-native'

import { Scene, SceneProp } from 'react-native-transition'

class Scene1 extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      time: 1,
    }
    setTimeout(() => {
      this.setState({ time: 5 })
    }, 1000)
  }
  render() {
    let { time } = this.state
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
              sceneKey="text1"
              style={{
                margin: 10,
                overflow: 'hidden',
              }}
            >
              <Text
                style={{
                  fontSize: 20,
                  textAlign: 'center',
                  backgroundColor: 'rgba(0,0,0,0)',
                }}
              >
                Welcome to React Native!{'\n'}
                {
                  time === 1 ? '' : '.......asdjsdafohiaewrhoiearofuhaeasdassdasdasdasdasdasdasdasdasdadsdwoifh'
                }
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
          </View>
        </Scene>
      </TouchableOpacity>
    );
  }
}

export default Scene1
