import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { Image, StyleSheet, Text, View, TextInput, Button } from 'react-native';

export default function App() {
  const imgs = ['madoka.jpg', 'ow.jpg', 'tenshi.png', 'texa.jpg', 'tiredreisen.png', 'tonshi.jpg'];
  const [img, setImg] = useState(require('./assets/madoka.jpg'));
  const [text, setText] = useState('');
  const salvar = () => {
    console.log(Math.floor(Math.random() * imgs.length));
    setImg(require('./assets/'+imgs[Math.floor(Math.random() * imgs.length)]));
  }
  return (
    <View style={styles.container}>
      <Text style={styles.txt}>{text}</Text>
      <Image
        source={img}
        style={styles.img}
      />
      <TextInput 
        style={styles.input}
        value={text}
        onChange={(e) => setText(e.target.value)}
      />
      <Button title=">///<" color="#8d99f2" onPress={salvar}/>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    gap: 50
  },
  txt: {
    color: '#ca8df2',
    fontSize: '150%',
    fontFamily: 'Century Gothic'
  },
  img: {
    width: '100%',
    height: '50%',
  },
  input: {
    width: 150,
    height: 40,
    borderColor: 'black',
    borderWidth: 1,
    textAlign: 'center',
  },
});
