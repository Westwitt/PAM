import { StyleSheet } from 'react-native';

export default StyleSheet.create({
    container: {
      flex: 1,
      alignItems: 'center',
      justifyContent: 'space-around',
    },
    logo: {
        width: 200,
        height: 100,
        resizeMode: 'contain',
        position: 'relative',
      },
    title:{
        fontSize: 35,
        color: '#0f6c58',
        fontFamily: 'Poppins_600SemiBold',
        textAlign: 'center',
        marginTop: '-5%',
    },
    desc:{
        fontSize: 25,
        lineHeight: 30,
        fontFamily: 'Poppins_400Regular',
        textAlign: 'center',
        marginHorizontal: 25,
    },
    main:{
        fontSize: 35,
        lineHeight: 30,
        color: '#0f6c58',
        fontFamily: 'Poppins_600SemiBold',
        textAlign: 'center',
    },
    opacities: {
        width: '100%',
    },
    read: {
        width: '85%',
        backgroundColor: '#f7826d',
        borderRadius: 40,
        height: 70,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        marginBottom: '5%',
        marginHorizontal: 'auto',
    },
    textRead:{
        fontSize: 20,
        lineHeight: 15,
        color: '#FFFFFF',
        fontFamily: 'Poppins_600SemiBold',
        textAlign: 'center',
    },
    leave: {
        width: '85%',
        borderColor: '#f7826d',
        borderWidth: 2,
        borderRadius: 40,
        height: 70,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        marginHorizontal: 'auto',
    },
    textLeave:{
        fontSize: 20,
        lineHeight: 15,
        color: '#f7826d',
        fontFamily: 'Poppins_600SemiBold',
        textAlign: 'center',
    }
  });
  