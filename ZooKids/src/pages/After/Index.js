import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { Text, View, Image } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { useFonts, Poppins_400Regular, Poppins_500Medium, Poppins_700Bold, Poppins_600SemiBold } from '@expo-google-fonts/poppins'

import styles from './styles';

export default function After() {
  const navigation = useNavigation();

  const [fontLoaded] = useFonts({
    Poppins_400Regular,
    Poppins_500Medium,
    Poppins_700Bold,
    Poppins_600SemiBold
  });

  if(!fontLoaded){
    return null;
  }
  function loading(){
    setTimeout(() => {
      navigation.navigate('CreateAccount');
    }, 1900)
  }
  loading();

  return (
    <View style={styles.container}>
        <Text style={styles.title}>Crie sua conta:</Text>
        <Image source={ require('../../../assets/imgs/logo-white.png') } style={ styles.ilustrationLogo } />
    </View>
  );
}