import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { View, Image, Dimensions } from 'react-native';
import ImageZoom from 'react-native-image-pan-zoom';

import styles from './styles';

export default function Places() {
  return (
    <View style={styles.container}>
      <ImageZoom
        enableImageZoom={true}
        cropWidth={Dimensions.get('window').width}
        cropHeight={Dimensions.get('window').height}
        imageWidth={1284}
        imageHeight={896}
        enableCenterFocus={false}
        
      >
        <Image source={require('../../../assets/imgs/maps.png')} style={{width:1284, height:896}} />
      </ImageZoom>
    </View>
  );
}
