import { StatusBar } from 'expo-status-bar';
import { Text, View, Button } from 'react-native';
import { useNavigation } from '@react-navigation/native';

import styles from './styles';

export default function Sobre() {
  const navigation = useNavigation();
  
  return (
    <View style={styles.container}>
      <Text>Pagina de sobre</Text>
      <Button title="Home" onPress={ () => navigation.navigate('Home') } />
      <StatusBar style="auto" />
    </View>
  );
}