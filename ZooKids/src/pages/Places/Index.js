import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { Text, View, Image } from 'react-native';
import EvilIcons from '@expo/vector-icons/EvilIcons';

import styles from './styles';

export default function Places() {
  return (
    <View style={styles.container}>
        <Text style={styles.title}>Crie sua conta:</Text>
        <EvilIcons name="chart" color='#ff0000' size={22} />
        <Image source={ require('../../../assets/imgs/logo-white.png') } style={ styles.ilustrationLogo } />
    </View>
  );
}