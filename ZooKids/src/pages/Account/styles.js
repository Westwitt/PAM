import { StyleSheet } from 'react-native';

export default StyleSheet.create({
    container: {
      flex: 1,
      alignItems: 'center',
      justifyContent: 'center',
    },
    title: {
      fontFamily: 'Poppins_700Bold',
      color: '#0f6c58',
      textAlign: 'center',
      fontSize: 35,
      color: '#fff'
    },
    ilustrationLogo: {
        width: 150,
        height: 50,
        marginHorizontal: 'auto',
        resizeMode: 'contain',
        position: 'absolute',
        top: 36
    },
    perfilImage: {
        width: 120,
        height: 120,
        borderRadius: '50%',
        position: 'absolute',
        top: -60,
        left: 24
    },
    infoContainer: {
        backgroundColor: '#FFF',
        width: "90%",
        borderRadius: 15,
        height: 310,
        position: 'relative',
        shadowColor: '#171717',
        shadowOffset: {width: -2, height: 4},
        shadowOpacity: 0.1,
        shadowRadius: 3,
    },
    name: {
      marginTop: 74,
      marginLeft: 24,
      fontFamily: 'Poppins_600SemiBold',
      fontSize: 18
    },
    email: {
      marginLeft: 24,
      fontFamily: 'Poppins_400Regular',
      fontSize: 16,
      color: '#AAAAA9',
    },
    textAnimals: {
      marginTop: 24,
      marginLeft: 24,
      fontFamily: 'Poppins_600SemiBold',
      fontSize: 18
    },
    prefferedAnimals: {
      display: 'flex',
      flexDirection: 'row',
      justifyContent: 'center'
    },
    animalIcon: {
      width: 50,
      height: 50,
      resizeMode: 'contain'
    },
    box: {
      width: 80,
      height: 80,
      justifyContent: 'center',
      alignItems: 'center',
      margin: 10,
      backgroundColor: '#EDEAE9',
      borderRadius: '50%',
      position: 'relative'
    },
    boxText: {
      position: 'absolute',
      bottom: -28,
      fontFamily: 'Poppins_400Regular',
      color: '#ABABAA'
    },
    signout: {
      paddingVertical: 5,
      paddingHorizontal: 10,
      borderWidth: 2,
      borderColor: '#f00',
      borderStyle: 'solid',
      position: 'absolute',
      top: 16,
      right: 16
    },
    signoutText: {
      fontFamily: 'Poppins_600SemiBold',
      color: '#f00',
      letterSpacing: 1
    }
  });
  