import { StyleSheet, Text, View, Image } from 'react-native';
import { dados } from './data';

export default function App() {
  return (
    <View style={styles.container}>
      <Text>asasas</Text>
      <Image source={{uri: dados[5].imagem}}
       style={styles.imagem} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  imagem: {
    width: 200,
    height: 200,
    resizeMode: 'contain'
  }
});
