import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { AntDesign } from '@expo/vector-icons'; 
import { Text, View, Image, ScrollView, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';

import styles from './styles';

export default function Home() {
  const navigation = useNavigation();

  return (
    <View style={styles.container}>
      <View>
        <Image source={ require('../../../assets/imgs/logo-green.png') } style={ styles.ilustrationLogo } />
      </View>
      <Text style={styles.title}>Animais mais procurados</Text>
      <ScrollView
        horizontal={true}
        style={styles.scrollview}
        showsHorizontalScrollIndicator={false} 
      >
        <View style={styles.box}>
          <Image source={ require('../../../assets/imgs/leao.png') } style={ styles.animalIcon } />
          <Text style={styles.boxText}>Leão</Text>
        </View>
        <View style={styles.box}>
          <Image source={ require('../../../assets/imgs/elefante.png') } style={ styles.animalIcon } />
          <Text style={styles.boxText}>Elefante</Text>
        </View>
        <View style={styles.box}>
          <Image source={ require('../../../assets/imgs/girafa.png') } style={ styles.animalIcon } />
          <Text style={styles.boxText}>Girafa</Text>
        </View>
        <View style={styles.box}>
          <Image source={ require('../../../assets/imgs/zebra.png') } style={ styles.animalIcon } />
          <Text style={styles.boxText}>Zebra</Text>
        </View>
        <View style={styles.box}>
          <Image source={ require('../../../assets/imgs/camelo.png') } style={ styles.animalIcon } />
          <Text style={styles.boxText}>Camelo</Text>
        </View>
        <View style={styles.box}>
          <Image source={ require('../../../assets/imgs/macaco.png') } style={ styles.animalIcon } />
          <Text style={styles.boxText}>Macaco</Text>
        </View>
        <View style={styles.box}>
          <Image source={ require('../../../assets/imgs/aguia.png') } style={ styles.animalIcon } />
          <Text style={styles.boxText}>Águia</Text>
        </View>
        <View style={styles.box}>
          <Image source={ require('../../../assets/imgs/tigre.png') } style={ styles.animalIcon } />
          <Text style={styles.boxText}>Tigre</Text>
        </View>
      </ScrollView>
      <Text style={styles.title}>Mapa do parque</Text>
      <TouchableOpacity style={ styles.exploreContainer } onPress={ () => navigation.navigate('Places') }>
        <Image source={ require('../../../assets/imgs/mapa-parque.png') } style={ styles.mapaImagem } />
        <View style={ styles.explore }>
          <Text style={ styles.exploreText }>Explorar parque</Text>
          <AntDesign name="right" size={14} color="#AAAAA9" />
        </View>
      </TouchableOpacity>
    </View>
  );
}