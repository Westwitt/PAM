import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { Text, View, Image, TouchableOpacity } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { useNavigation } from '@react-navigation/native';

import styles from './styles';

export default function Account() {
  const [nome, setNome] = useState('');
  const [email, setEmail] = useState('');


  const navigation = useNavigation();

  AsyncStorage.getItem('nome')
  .then(value => {
    setNome(value);
  })
  .catch(err => {
    console.log('faz o l');
  })

  AsyncStorage.getItem('email')
  .then(value => {
    setEmail(value);
  })
  .catch(err => {
    console.log('faz o l');
  })

  const signoutAccount = async () => {
    await AsyncStorage.clear();

    navigation.navigate('Initial');
  }

  return (
    <View style={styles.container}>
      <Image source={ require('../../../assets/imgs/logo-green.png') } style={ styles.ilustrationLogo } />
      <View style={styles.infoContainer}>
        <View>
          <Image source={ require('../../../assets/imgs/profile.jpg') } style={ styles.perfilImage } />
        </View>
        <TouchableOpacity style={styles.signout} onPress={() => { signoutAccount() }}>
          <Text style={styles.signoutText}>Sair da conta</Text>
        </TouchableOpacity>
        <Text style={styles.name}>{nome}</Text>
        <Text style={styles.email}>{email}</Text>
        <Text style={styles.textAnimals}>Animais preferidos</Text>
        <View style={styles.prefferedAnimals}>
          <View style={styles.box}>
            <Image source={ require('../../../assets/imgs/leao.png') } style={ styles.animalIcon } />
            <Text style={styles.boxText}>Leão</Text>
          </View>
          <View style={styles.box}>
            <Image source={ require('../../../assets/imgs/elefante.png') } style={ styles.animalIcon } />
            <Text style={styles.boxText}>Elefante</Text>
          </View>
          <View style={styles.box}>
            <Image source={ require('../../../assets/imgs/tigre.png') } style={ styles.animalIcon } />
            <Text style={styles.boxText}>Tigre</Text>
          </View>
        </View>
      </View>
    </View>
  );
}