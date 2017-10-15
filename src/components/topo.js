import React, { Component } from 'react';
import {
  View, 
  Image 
} from 'react-native';

const imgJokenpo = require('../../imgs/jokenpo.png');

class Topo extends Component {
  render() {
    return (
       <View>
		<Image source={imgJokenpo} />
       </View>
    );
  }
}

export default Topo;
