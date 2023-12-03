import React, { useRef } from 'react';
import { Image, View, Animated } from 'react-native';
import { PanGestureHandler } from 'react-native-gesture-handler';

const MapScreen = () => {
 const translateX = useRef(new Animated.Value(0)).current;
 const translateY = useRef(new Animated.Value(0)).current;

 const onGestureEvent = Animated.event(
  [{ nativeEvent: { translationX: translateX, translationY: translateY } }],
  { useNativeDriver: true },
 );

 return (
  <View style={{ flex: 1 }}>
    <PanGestureHandler onGestureEvent={onGestureEvent}>
      <Animated.Image
        style={{
          width: '100%',
          height: '100%',
          transform: [{ translateX }, { translateY }],
        }}
        source={{ uri: 'https://mir-s3-cdn-cf.behance.net/project_modules/max_1200/34a42e114485041.603c8e648ace2.png' }}
      />
    </PanGestureHandler>
  </View>
 );
};

export default MapScreen;
