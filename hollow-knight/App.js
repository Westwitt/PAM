import {
  StyleSheet,
  Text,
  View,
  Image,
  Modal,
  TouchableOpacity,
} from "react-native";
import { dados } from "./data";
import { FlatList } from "react-native-web";
import { useFonts } from "expo-font";
import { useState } from "react";

export default function App() {
  const [loaded] = useFonts({
    TrajanPro: require("./assets/fonts/TrajanPro-Regular.ttf"),
  });

  const [visible, setVisible] = useState(false);
  const [active, setActive] = useState(0);

  const renderModel = (index) => {
    setVisible(true);
    setActive(index);
  };

  const voltar = () => {
    setVisible(false);
  };

  const next = () => {
    if(active===9){
      setActive(0)
    } else{
      setActive(active+1)
    }
  };
  const back = () => {
    if(active===0){
      setActive(9)
    } else{
      setActive(active-1)
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.text}>Hollow Knight</Text>
      <Image source={require("./assets/Hr.png")} style={styles.hr} />
      <FlatList
        style={styles.flat}
        data={dados}
        keyExtractor={({ id }, index) => id}
        renderItem={({ item, index }) => (
          <View style={styles.item}>
            <TouchableOpacity onPress={() => renderModel(index)}>
              <Text style={styles.normalText}>{item.nome}</Text>
              <Image source={{ uri: item.imagem }} style={styles.imagem} />
            </TouchableOpacity>
          </View>
        )}
      ></FlatList>
      <Image source={require("./assets/Footer_King.webp")} style={[styles.hr, {marginBottom: 20}]} />
      <Modal
        visible={visible}
        animationType="slide"
        style={styles.modal}
        transparent
      >
        <View style={styles.backView}>
          <TouchableOpacity onPress={() => voltar()}>
            <Image source={require("./assets/back.png")} style={styles.icon} />
          </TouchableOpacity>
          
        </View>
        <View style={styles.modal}>
          <View>
            <Text style={styles.name}>{dados[active].nome}</Text>
            <Image source={dados[active].imagem} style={styles.imagem} />
            <Text style={styles.normalText}>HP: {dados[active].hp}</Text>
          </View>
          <Image source={require("./assets/Hr.png")} style={styles.hr} />
          <View style={styles.second}>
            <Text style={styles.normalText}>{dados[active].frase2}</Text>
          </View>
          <Image source={require("./assets/Hr.png")} style={styles.hr} />
          <View style={styles.second}>
            <Text style={styles.secondText}>{dados[active].descricao}</Text>
          </View>
          <View style={styles.galeriaContainer}>
            <Text style={styles.normalText}>{dados[active].galeria[0][0]}</Text>
            <Image
              source={dados[active].galeria[0][1]}
              style={styles.galeria}
            />
          </View>
          <Image source={require("./assets/Footer_King.webp")} style={styles.hr} />
          <View style={styles.next}>
            <View>
              <TouchableOpacity onPress={() => back()}>
               <Text style={styles.normalText}>&lt; Anterior</Text>
              </TouchableOpacity>
            </View>
            <View>
              <TouchableOpacity onPress={() => next()}>
                <Text style={styles.normalText}>Próximo &gt;</Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </Modal>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#1a1e23",
  },
  imagem: {
    width: 200,
    height: 200,
    resizeMode: "contain",
  },
  flat: {
    width: "100%",
    padding: 10,
  },
  item: {
    alignItems: "center",
    marginBottom: 30,
  },
  text: {
    color: "#e6e6e6",
    fontFamily: "TrajanPro",
    fontSize: "150%",
    marginTop: 30,
    marginBottom: 10,
  },
  normalText: {
    color: "#e6e6e6",
    fontFamily: "TrajanPro",
    fontSize: "1.01em",
    marginBottom: 5,
    textAlign: "center",
  },
  hr: {
    width: "90vw",
    height: 25,
    resizeMode: "contain"
  },
  modal: {
    backgroundColor: "#1a1e23",
    width: "100vw",
    height: "100vh",
    alignItems: "center",
  },
  icon: {
    width: 35,
    height: 35,
    resizeMode: "contain",
    textAlign: "left",
    margin: 15,
  },
  backView: {
    backgroundColor: "#1a1e23",
    textAlign: "left",
    alignItems: "flex-start",
  },
  second: {
    fontSize: "1em",
    marginHorizontal: 20,
    marginVertical: 10,
  },
  secondText: {
    color: "#e6e6e6",
    fontFamily: "Arial",
    fontSize: "1.01em",
    textAlign: "center",
  },
  galeria: {
    width: 230,
    height: 230,
    resizeMode: "contain",
    marginTop: -30,
    marginBottom: -30,
  },
  galeriaContainer: {
    fontSize: "1em",
    marginHorizontal: 20,
    marginVertical: 10,
    alignItems: "center",
    justifyContent: "center"
  },
  name: {
    color: "#e6e6e6",
    fontFamily: "TrajanPro",
    fontSize: "1.5em",
    marginBottom: 20,
    textAlign: "center",
    marginTop: -45,
  },
  next: {
    flexDirection: "row",
    justifyContent: "space-around",
    width: "100vw",
    marginTop: 20,
    position: 'absolute',
    bottom: 80
  }
});
