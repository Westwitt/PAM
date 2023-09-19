import { StyleSheet } from 'react-native';

export default StyleSheet.create({
    container: {
      flex: 1,
      alignItems: 'center',
      justifyContent: 'center',
      width: '77%',
      marginHorizontal: 'auto'
    },
    ilustration: {
      width: 330,
      height: 360,
      marginVertical: 80
    },
    buttonLetsgo: {
      width: '100%',
      backgroundColor: '#f7826d',
      borderRadius: 40,
      height: 60,
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
    },
    buttonLetsgoText: {
      color: '#fff',
      fontFamily: 'Poppins_600SemiBold'
    },
    title: {
      fontFamily: 'Poppins_700Bold',
      color: '#0f6c58',
      textAlign: 'center',
      fontSize: 35
    },
    subtitle: {
      textAlign: 'center',
      fontFamily: 'Poppins_400Regular',
      color: '#5e5e5e',
      fontSize: 15
    }
  });
  