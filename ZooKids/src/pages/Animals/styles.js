import { StyleSheet } from 'react-native';

export default StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    shadowColor: '#171717',
    shadowOffset: {width: -2, height: 4},
    shadowOpacity: 0.1,
    shadowRadius: 3,
  },
  imagem: {
    width: 300,
    height: 250,
    resizeMode: "fill",
    borderRadius: 5,
    borderWidth: 3,
    borderColor: "#f7826d",
    marginBottom: 10,
  },
  shadowView:{
    shadowColor: '#171717',
    shadowOffset: {width: 0, height: 6},
    shadowOpacity: 0.1,
    shadowRadius: 3,
    borderRadius: 10
  },
  imagemModal: {
    width: 300,
    height: 100,
    resizeMode: "fill",
    borderRadius: 10,
  },
  imagemAnimal: {
    width: 300,
    height: 150,
    resizeMode: "fill",
    borderRadius: 10,
    borderWidth: 3,
    borderColor: "#f7826d",
  },
  flat: {
    width: "100%",
    padding: 10,
    marginBottom: 70,
  },
  item: {
    alignItems: "center",
    marginBottom: 30,
  },
  text: {
    fontFamily: "Poppins_700Bold",
    fontSize: "150%",
    color: "#0f6c58",
    marginTop: 20,
    marginBottom: 20,
  },
  normalText: {
    fontFamily: "Poppins_400Regular",
    fontSize: "1.01em",
    marginBottom: 5,
    textAlign: "center",
    color: "#0f6c58",
  },
  desc:{
    fontFamily: "Poppins_400Regular",
    fontSize: "1.3em",
    marginTop: 20,
    textAlign: "center",
    color: "#0f6c58",
    marginHorizontal: 20,
  },
  hr: {
    width: "90vw",
    height: 25,
    resizeMode: "contain"
  },
  modal: {
    backgroundColor: "#fff",
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
    backgroundColor: "#fff",
    textAlign: "left",
    alignItems: "flex-start",
  },
  second: {
    fontSize: "1em",
    marginHorizontal: 20,
    marginVertical: 10,
  },
  secondText: {
    fontFamily: "Arial",
    fontSize: "1.01em",
    textAlign: "center",
  },
  name: {
    fontFamily: "Poppins_500Medium",
    fontSize: "1.5em",
    marginBottom: 20,
    textAlign: "center",
    marginTop: -45,
    width: 200,
    alignSelf: "center",
  },
  next: {
    flexDirection: "row",
    justifyContent: "space-around",
    width: "100vw",
    marginTop: 20,
    height: 60,
    position: 'absolute',
    bottom: 0,
    alignItems: "center",
    backgroundColor: "#fff"
  }
});