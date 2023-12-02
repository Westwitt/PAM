import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { useFonts, Poppins_400Regular, Poppins_500Medium, Poppins_700Bold, Poppins_600SemiBold } from '@expo-google-fonts/poppins';
import { Text, View, Image } from 'react-native';
import { AntDesign } from '@expo/vector-icons'; 

import styles from './styles';

export default function Tickets() {

  const [fontLoaded] = useFonts({
    Poppins_400Regular,
    Poppins_500Medium,
    Poppins_700Bold,
    Poppins_600SemiBold
  });

  if(!fontLoaded){
    return null;
  }

  return (
    <View style={styles.container}>
        <Image source={ require('../../../assets/imgs/tickets-image.png') } style={ styles.topImage } />
        <Text style={styles.title}>Assinaturas e bilhetes</Text>

        <View style={styles.optionContainer}>
          <View style={styles.options}>
            <Image source={ require('../../../assets/imgs/tickets-icon.png') } style={ styles.icon } />
            <View style={styles.textContainer}>
              <Text style={styles.textMain}>Compre aqui o seu bilhete</Text>
              <Text style={styles.textSecondary}>Uma visita ao parque</Text>
            </View>
            <AntDesign name="right" size={14} color="#AAAAA9" />
          </View>
          <View style={styles.options}>
            <Image source={ require('../../../assets/imgs/cards-icon.png') } style={ styles.icon } />
            <View style={styles.textContainer}>
              <Text style={styles.textMain}>Faça uma assinatura anual</Text>
              <Text style={styles.textSecondary}>Tenha acesso ao parque sempre</Text>
            </View>
            <AntDesign name="right" size={14} color="#AAAAA9" />
          </View>
        </View>
    </View>
  );
}