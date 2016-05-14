import React from 'react'
import { View, Text, TouchableOpacity } from 'react-native'

import { Scene } from 'react-native-transition'

class Scene1 extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      showText: false,
    }
  }

  // componentDidMount() {
  //   let timeout = setTimeout(() => {
  //     this.setState({ showText: true })
  //   }, 1000)
  //   this.unsubscribe = () => {
  //     clearTimeout(timeout)
  //   }
  // }
  //
  // componentWillUnmount() {
  //   this.unsubscribe()
  // }

  render() {
    let { showText } = this.state
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
            <View
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
            </View>
            <View
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
                { showText && '.......asdjsdafohiaewrhoiearofuhaeasdassdasdasdasdasdasdasdasdasdadsdwoifh' }
              </Text>
            </View>
            <View
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
            </View>
          </View>
        </Scene>
      </TouchableOpacity>
    );
  }
}

export default Scene1
