import { StatusBar } from 'expo-status-bar';
import { View, Image } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { useFonts, Poppins_400Regular, Poppins_500Medium, Poppins_700Bold, Poppins_600SemiBold } from '@expo-google-fonts/poppins';


import styles from './styles';

export default function Loading() {
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
      navigation.navigate('Initial');      
    }, 2000)
  }
  loading();

  return (
    <View style={styles.container}>
      <View>
        <Image source={ require('../../../assets/imgs/focsis.gif') } style={ styles.ilustration } />
      </View>
        <Image source={ require('../../../assets/imgs/logo-white.png') } style={ styles.ilustrationLogo } />
    </View>
  );
}
