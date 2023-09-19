import { StyleSheet } from 'react-native';

export default StyleSheet.create({
    container: {
      flex: 1,
      alignItems: 'center',
      justifyContent: 'center',
      backgroundColor: '#0f6c58'
    },
    ilustration: {
      width: 330,
      height: 360,
      marginVertical: 80
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
      color: '#FFFFFF',
      fontSize: 15
    },
    ilustrationLogo: {
        width: 150,
        height: 50,
        marginHorizontal: 'auto',
        resizeMode: 'contain',
        position: 'absolute',
        bottom: 50
      },
  });
  