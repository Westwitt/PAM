import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { Text, View, Image } from 'react-native';

import styles from './styles';

export default function Account() {
  return (
    <View style={styles.container}>
        <Text style={styles.title}>Minha conta</Text>
        <Image source={ require('../../../assets/imgs/logo-white.png') } style={ styles.ilustrationLogo } />
    </View>
  );
}