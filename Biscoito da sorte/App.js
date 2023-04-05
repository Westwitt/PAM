import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native';

export default function App() {
  const [img, setImg] = useState(0);
  const [impressao, setImpressao] = useState("");


  const frases = [
    "A vida trará coisas boas se tiver paciência.",
    "Demonstre amor e alegria em todas as oportunidades e verá que a paz nasce dentro de si.",
    "Não compense na ira o que lhe falta na razão.",
    "Defeitos e virtudes são apenas dois lados da mesma moeda.",
    "A maior de todas as torres começa no solo.",
    "Não há que ser forte. Há que ser flexível.",
    "O chão é feito de chão."
  ]

  const abrir = () => {
    if(img==0){
      setImg(1)
      setImpressao(frases[Math.floor(Math.random() * frases.length)])
    }

  }
  const novo = () => {
    setImg(0)
    setImpressao("")
  }

  return (
    <View style={styles.container}>
      <Image source={require(`./assets/${img}.png`)} style={styles.img}/>
      <Text style={styles.impressao}>{impressao}</Text>
      <TouchableOpacity onPress={() => abrir()} style={styles.botao}>
        <Text style={styles.texto}>Abrir biscoito</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => novo()} style={styles.botao}>
        <Text style={styles.texto}>Novo biscoito</Text>
      </TouchableOpacity>
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
  },
  img: {
    width: 200,
    height: 200,
  },
  texto: {
    color: '#dd7b22',
    fontWeight: 'bold',
    fontFamily: 'Arial',
    textAlign: 'center',
  },
  botao: {
    borderWidth: 2,
    borderColor: '#dd7b22',
    paddingVertical: 15,
    paddingHorizontal: 25,
    borderRadius: 25,
    marginBottom: 10,
  },
  impressao: {
    color: '#dd7b22',
    fontFamily: 'Arial',
    textAlign: 'center',
    height: 100,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    width: '80%'
  }
});
