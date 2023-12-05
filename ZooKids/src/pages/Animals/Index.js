import { StyleSheet, Text, View, Image, Modal, TouchableOpacity} from "react-native";
import { dados, territorios, animais } from "./data";
import { FlatList } from "react-native-web";
import { useState } from "react";
import { useFonts, Poppins_400Regular, Poppins_500Medium, Poppins_700Bold, Poppins_600SemiBold } from '@expo-google-fonts/poppins'


import styles from './styles';

export default function App() {
  
  const [visible, setVisible] = useState(false);
  const [terri, setTerri] =  useState(false);
  const [active, setActive] = useState(0);
  const [activeT, setActiveT] = useState(0)

  const renderModel = (index) => {
    setVisible(true);
    setActive(index);
  };

  const renderTerritorio = (index) => {
    setTerri(true);
    setActiveT(index);
  };

  const voltar = () => {
    setVisible(false);
  };

  const voltarT = () => {
    setTerri(false);
  };


  const next = () => {
    if(active===2){
      setActive(0)
    } else{
      setActive(active+1)
    }
  };
  const back = () => {
    if(active===0){
      setActive(2)
    } else{
      setActive(active-1)
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.text}>Territorios</Text>
      <FlatList
        style={styles.flat}
        data={territorios}
        keyExtractor={({ id }, index) => id}
        renderItem={({ item, index }) => (
          <View style={styles.item}>
            <TouchableOpacity onPress={() => renderTerritorio(index)}>
              <View style={styles.shadowView}>
                <Image source={{ uri: item.imagem }} style={styles.imagemModal} />
                </View>
            </TouchableOpacity>
          </View>
        )}
      ></FlatList>
      <Modal
        visible={terri}
        animationType="slide"
        style={styles.modal}
      >
        <View style={styles.backView}>
          <TouchableOpacity onPress={() => voltarT()}>
            <Image source={require("../../../assets/imgs/back.png")} style={styles.icon} />
          </TouchableOpacity>
        </View>
        <View style={styles.modal}>
          <View>
            <Text style={styles.name}>{territorios[activeT].nome}</Text>
            <FlatList
            style = {styles.flat}
            data = {animais}
            keyExtractor={({ id }, index) => id}
            renderItem={({ item, index }) => (
              <View style={styles.item}>
                <TouchableOpacity onPress={() => renderModel(index)}>
                  <Text style={styles.normalText}>{item.animal[territorios[activeT].id-1][0]}</Text>
                  <Image source={{ uri: item.animal[territorios[activeT].id-1][2] }} style={styles.imagemAnimal} />
                </TouchableOpacity>
              </View>
            )}
            ></FlatList>
          </View>
        </View>
        <Modal
        visible = {visible}
        animationType="slide"
        style={styles.modal}
        >
              
          <View style={styles.backView}>
            <TouchableOpacity onPress={() => voltar()}>
              <Image source={require("../../../assets/imgs/back.png")} style={styles.icon} />
            </TouchableOpacity>
            <Text style={styles.name}>{animais[active].animal[territorios[activeT].id-1][0]}</Text>
          </View>
          
          <View style={styles.modal}>
            <Image source = {animais[active].animal[territorios[activeT].id-1][2]} style={styles.imagem} />
            <Text style={styles.normalText}>Nome Cientifico: {animais[active].animal[territorios[activeT].id-1][3]}</Text>
            <Text style={styles.desc}>{animais[active].animal[territorios[activeT].id-1][1]}</Text>
          </View>
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
        </Modal>
      </Modal>
    </View>
  );
}