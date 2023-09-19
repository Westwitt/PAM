import { StyleSheet, Dimensions } from 'react-native';

export default StyleSheet.create({
    container: {
        display: 'flex',
        position: 'absolute',
        bottom: 50,
        width: '100%'
    },
    titleContainer: {
        width: 160,
        marginTop: '70%',
        marginBottom: 50,
        marginLeft: 40,
        marginRight: 30,
    },
    title: {
        fontSize: 30,
        lineHeight: 30,
        color: '#0f6c58',
        fontFamily: 'Poppins_600SemiBold'
    },
    input: {
        borderBottomColor: '#e1e1e1',
        borderBottomWidth: 1,
        fontSize: '1em',
        outlineStyle: 'none',
        paddingVertical: 3,
        paddingHorizontal: 30,
        marginBottom: 50
    },
    inputText: {
        transition: 1,
        color: '#a1a1a1',
        position: 'relative',
        bottom: -20,
        left: 30,
        fontSize: '1em',
        fontFamily: 'Poppins_400Regular'
    },
    formWrapper: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'center'
    },
    form: {
        width: '79%',
    },
    icon: {
        width: 20,
        height: 20,
        position: 'absolute',
        left: -28,
        top: 2
    },
    buttonSignUp: {
        width: '100%',
        backgroundColor: '#f7826d',
        borderRadius: 40,
        height: 60,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
    },
    buttonSignUpText: {
        color: '#fff',
        fontFamily: 'Poppins_600SemiBold'
    },
    border: {
        backgroundColor: '#e1e1e1',
        width: '42%',
        height: 1
    },
    borderContainer: {
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        marginVertical: 20
    },
    borderText: {
        color: '#a1a1a1',
        fontFamily: 'Poppins_400Regular'
    },
    buttonSignIn: {
        width: '100%',
        borderColor: '#f7826d',
        borderWidth: 2,
        borderRadius: 40,
        height: 60,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
    },
    buttonSignInText: {
        color: '#f7826d',
        fontFamily: 'Poppins_600SemiBold'
    },
    ilustration: {
        width: '100%',
        height: Dimensions.get('window').width / 1.29,
        position: 'fixed',
        top: 0,
        left: 0
    }
  });
  