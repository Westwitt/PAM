import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image, TextInput, Picker, CheckBox } from 'react-native';

export default function App() {
  return (
    <View>
      <View style={styles.container}>
        <Image source={require("./assets/nagatoro.jpg")} style={styles.img} />
      </View>
      <View>
        <View style={styles.formulario}> 
          <Text style={styles.header}>
            Dados Pessoais
          </Text>
          <TextInput 
            style={styles.input}
            placeholder=" Digite seu nome"
            keyboardType="default"
          />
          <TextInput 
            style={styles.input}
            placeholder=" Digite seu Telefone"
            keyboardType="default"
          />
          <TextInput 
            style={styles.input}
            placeholder=" Digite seu Endereço"
            keyboardType="default"
          />
          <TextInput 
            style={styles.input}
            placeholder=" Digite seu Email"
            keyboardType="default"
          />
        </View>
        <View style={styles.formulario}> 
          <Text style={styles.header}>
            Outras Informações
          </Text>
        <View style={styles.pia}>
          <Picker style={styles.picker}>
            <Picker.Item label="Programar" value="programar"/>
            <Picker.Item label="Ciclismo" value="ciclismo"/>
            <Picker.Item label="Desenhar" value="desenhar"/>
          </Picker>
        </View>        
          <View style={styles.termos}>
            <CheckBox style={styles.checkbox} />
            <Text style={{marginLeft: 8, marginTop: 3}}>Aceito os termos de serviço</Text>
          </View>
        </View>
          <View style={styles.statusContainer}>
            <Text style={styles.status}>Nome: </Text>
            <Text style={styles.status}>Telefone: </Text>
            <Text style={styles.status}>Endereço: </Text>
            <Text style={styles.status}>Email: </Text>
            <Text style={styles.status}>Hobby: </Text>
            <Text style={styles.status}>Aceito: 👎</Text>
          </View>
        </View>
      </View>
  );
}


const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    paddingTop: 30,
    paddingBottom: 10
  },
  status: {
    fontSize: 20,
    marginVertical: 5,
    marginHorizontal: 10
  },
  img: {
    width: 150,
    height: 150,
    borderRadius: 150
  },
  formulario: {
    backgroundColor: '#fff',
    alignItems: 'center',
    borderWidth: 2,
    marginLeft: 40,
    marginRight: 40,
    marginBottom: 15,
    marginTop: 15,
    borderRadius: 10,
    paddingBottom: 10,
    justifyContent: 'center',
    paddingRight: 10,
    paddingLeft: 10,
    paddingTop: 7
  },
  header:{
    fontWeight: 'bold',
  },
  input: {
    width: 280,
    height: 35,
    borderRadius: 2,
    outlineStyle: 'none',
    borderWidth: 1,
    marginTop: 6,
    paddingVertical: 5,
    paddingHorizontal: 5
  },
  pia:{
    marginTop: 5,
    width: 250,
    height: 40,
    outlineStyle: 'none',
    justifyContent: 'center',
  },
  statusContainer: {
    backgroundColor: '#fff',
    borderWidth: 2,
    marginLeft: 40,
    marginRight: 40,
    marginBottom: 15,
    marginTop: 15,
    borderRadius: 10,
    paddingBottom: 10,
    justifyContent: 'center',
    paddingTop: 10
  },
  picker: {
    width: '100%',
    height: '100%'
  },
  termos: { 
    display: 'flex',
    flexDirection: 'row',
    marginTop: 10,
    alignItems: 'center',
    justifyContent: 'center'
  }
});