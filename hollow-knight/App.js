import { StyleSheet, Text, View, Image, Modal } from "react-native";
import { dados } from "./data";
import { FlatList } from "react-native-web";
import { useFonts } from "expo-font";
import { useState } from "react";

export default function App() {
  const [loaded] = useFonts({
    TrajanPro: require("./assets/fonts/TrajanPro-Regular.ttf")
  })

  const [visible, setVisible] = useState(false);

  return (
    <View style={styles.container}>
      <Text style={styles.text}>
        Hollow Knight
      </Text>
      <Image source={require("./assets/Hr.png")} style={styles.hr} />
      <FlatList style={styles.flat}
        data={dados}
        keyExtractor={({id}, index) => id}
        renderItem={({item, index}) => (
          <View style={styles.item} onPress={renderModel(index)}>
            <Text style={styles.normalText}>{item.nome}</Text>
            <Image source={{uri: item.imagem}} style={styles.imagem} />
          </View>
        )}
      
      >
      </FlatList>
      <Modal visible={visible} animationType="slide" style={styles.modal} transparent>
          <View style={styles.modal}>
            <Text style={styles.normalText}>{dados[0].nome}</Text>
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
    marginBottom: 30
  },
  text: {
    color: "#e6e6e6",
    fontFamily: "TrajanPro",
    fontSize: "150%",
    marginTop: 30,
    marginBottom: 10
  },
  normalText: {
    color: "#e6e6e6",
    fontFamily: "TrajanPro",
    fontSize: "1.01em",
    marginBottom: 5
  },
  hr: {
    width: "90vw",
    height: 25
  },
  modal: {
    backgroundColor: "#1a1e23",
    width: "100vw",
    height: "100vh"
  }
});
