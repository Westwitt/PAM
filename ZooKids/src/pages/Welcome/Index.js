import { StatusBar } from 'expo-status-bar';
import React, { useState, createRef } from 'react';
import { Text, View, Button, Image, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { useFonts, Poppins_400Regular, Poppins_500Medium, Poppins_700Bold, Poppins_600SemiBold } from '@expo-google-fonts/poppins';
import { AsyncStorage } from 'AsyncStorage';

import styles from './styles';

export default function Welcome() {
  const navigation = useNavigation();
  const [fontLoaded] = useFonts({
    Poppins_400Regular,
    Poppins_500Medium,
    Poppins_700Bold,
    Poppins_600SemiBold,
  });

  const [nome, setNome] = useState('');
  AsyncStorage.getItem('nome')
  .then(value => {
    setNome(value); 
  })
  .catch(err => {
    console.log('faz o l');
  })

  return (
    <View style={styles.container}>
        <Image source={ require('../../../assets/imgs/logo-green.png') } style={ styles.logo } />
        <Text style={styles.title}>Bem-vindo, {nome}</Text>
        <Text style={styles.desc}>Desde a última vez em que você entrou, você ganhou:</Text>
        <Text style={styles.main}>9</Text>
        <Text style={styles.desc}>notificações. Deseja checá-las?</Text>

        <View style={styles.opacities}>
            <TouchableOpacity style={styles.read}>
                <Text style={styles.textRead}>Ler as notificações</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.leave}>
                <Text style={styles.textLeave}>Ir para o Menu</Text>
            </TouchableOpacity>
        </View>
        
      <StatusBar style="auto" />
    </View>
  );
}