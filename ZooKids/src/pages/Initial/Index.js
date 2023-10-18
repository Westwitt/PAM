import { StatusBar } from 'expo-status-bar';
import { Text, View, TouchableOpacity, Image } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { useFonts, Poppins_400Regular, Poppins_500Medium, Poppins_700Bold, Poppins_600SemiBold } from '@expo-google-fonts/poppins';
import { AsyncStorage } from 'AsyncStorage';

import styles from './styles';

export default function Initial() {
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


  const verificarConta = () => {
    AsyncStorage.getItem('nome')
    .then(value => {
      if(value == null){
        navigation.navigate('Before');
      }else{
        navigation.navigate('Welcome');
      }
    })
    .catch(err => {
      navigation.navigate('Loading');
    })
  };


  return (
    <View style={styles.container}>
      <View>
        <Text style={styles.title}>Planeje sua visita</Text>
        <Text style={styles.subtitle}>Reserve seu dia para observar a vida selvagem</Text>
      </View>
      <View>
        <Image source={ require('../../../assets/imgs/initialcp.gif') } style={ styles.ilustration } />
      </View>

      <TouchableOpacity style={styles.buttonLetsgo} onPress={ () => { verificarConta() }}>
        <Text style={styles.buttonLetsgoText}>Vamos conhecer!</Text>
      </TouchableOpacity>
      <StatusBar style="auto" />
    </View>
  );
}
