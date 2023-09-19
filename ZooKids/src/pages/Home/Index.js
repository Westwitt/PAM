import { StatusBar } from 'expo-status-bar';
import { Text, View, Button } from 'react-native';
import { useNavigation } from '@react-navigation/native';

import styles from './styles';

export default function Home() {
  const navigation = useNavigation();

  return (
    <View style={styles.container}>
      <Text>Pagina de home</Text>
      <Button title="Sobre" onPress={ () => navigation.navigate('Sobre') } />
      <StatusBar style="auto" />
    </View>
  );
}