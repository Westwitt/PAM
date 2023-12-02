import { StyleSheet } from 'react-native';

export default StyleSheet.create({
    container: {
        width: '100%',
        position: 'relative',
        display: 'flex'
    },
    topImage: {
        height: 220,
        width: '100%',
    },
    title: {
        fontSize: 20,
        fontFamily: 'Poppins_600SemiBold',
        color: '#0f6c58',
        marginTop: 24,
        marginLeft: 32
    },
    options: {
        width: '90%',
        height: 90,
        marginVertical: 0,
        marginHorizontal: 'auto',
        backgroundColor: '#ffffff',
        borderRadius: 20,
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        paddingHorizontal: 24,
        shadowColor: '#171717',
        shadowOffset: {width: -2, height: 4},
        shadowOpacity: 0.1,
        shadowRadius: 3,
    },
    optionContainer: {
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-between',
        gap: 24,
        marginTop: 32
    },
    icon: {
        width: 50,
        height: 50
    },  
    textMain:{
        fontFamily: 'Poppins_600SemiBold',
        fontSize: 14,
        fontWeight: 600
    },
    textSecondary: {
        color: '#AAAAA9',
        fontFamily: 'Poppins_400Regular',
        fontSize: 12
    },
    textContainer: {
        width: 220
    }
});