import { StatusBar } from 'expo-status-bar';
import React, { useState, createRef } from 'react';
import { Text, View, TouchableOpacity, TextInput, Image } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { useFonts, Poppins_400Regular, Poppins_500Medium, Poppins_700Bold, Poppins_600SemiBold } from '@expo-google-fonts/poppins'

import styles from './styles';

export default function Login() {
  const navigation = useNavigation();
  const inputRefOne = createRef();
  const inputRefTwo = createRef();

  const [isFocusedOne, setFocusOne] = useState(false);
  const [isFocusedTwo, setFocusTwo] = useState(false);

  const [textOne, setTextOne] = useState('');
  const [textTwo, setTextTwo] = useState('');

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
        <Image source={ require('../../../assets/imgs/frog.png') } style={styles.ilustration}/>
        <View style={styles.titleContainer}>
            <Text style={styles.title}>Entrar na conta</Text>
        </View>
        <View style={styles.formWrapper}>
            <View style={styles.form}>
                <Text style={isFocusedOne || textOne ? [styles.inputText, { bottom: 0 }] : styles.inputText} onPress={() => inputRefOne.current.focus()}><Image source={require("../../../assets/imgs/mail.png")} style={styles.icon} />Email</Text>
                <TextInput 
                    style={styles.input}
                    keyboardType='default'
                    onFocus={() => setFocusOne(true)}
                    onBlur={() => setFocusOne(false)}
                    onChangeText={newText => setTextOne(newText)}
                    ref={inputRefOne}
                />

                <Text style={isFocusedTwo || textTwo ? [styles.inputText, { bottom: 0 }] : styles.inputText} onPress={() => inputRefTwo.current.focus()}><Image source={require("../../../assets/imgs/lock.png")} style={styles.icon} />Senha</Text>
                <TextInput 
                    style={styles.input}
                    keyboardType='default'
                    onFocus={() => setFocusTwo(true)}
                    onBlur={() => setFocusTwo(false)}
                    onChangeText={newText => setTextTwo(newText)}
                    ref={inputRefTwo}
                    secureTextEntry={true}
                />

                <TouchableOpacity style={styles.buttonSignUp}>
                    <Text style={styles.buttonSignUpText}>Entrar</Text>
                </TouchableOpacity>

                <View style={styles.borderContainer}>
                    <View style={styles.border}></View>
                    <Text style={styles.borderText}>ou</Text>
                    <View style={styles.border}></View>
                </View>

                <TouchableOpacity style={styles.buttonSignIn} onPress={ () => { navigation.goBack() }}>
                    <Text style={styles.buttonSignInText}>Cadastrar</Text>
                </TouchableOpacity>
            </View>
        </View>
    </View>
  );
}