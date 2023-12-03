import { StyleSheet } from 'react-native';

export default StyleSheet.create({
    container: {
        marginTop: 20,
    },
    box: {
        width: 100,
        height: 100,
        justifyContent: 'center',
        alignItems: 'center',
        margin: 10,
        backgroundColor: '#EDEAE9',
        borderRadius: '50%',
        position: 'relative'
    },
    title: {
        fontSize: 20,
        fontFamily: 'Poppins_600SemiBold',
        color: '#0f6c58',
        marginTop: 24,
        marginLeft: 32
    },
    animalIcon: {
        width: 70,
        height: 70,
        resizeMode: 'contain'
    },
    boxText: {
        position: 'absolute',
        bottom: -28,
        fontFamily: 'Poppins_400Regular',
        color: '#ABABAA'
    },
    scrollview: {
        height: 160,
        paddingLeft: 10
    },
    ilustrationLogo: {
        width: 150,
        height: 50,
        marginHorizontal: 'auto',
        marginVertical: 16,
        resizeMode: 'contain',
    },
    mapaImagem: {
        width: '100%',
        height: 260,
        borderTopLeftRadius: 20,
        borderTopRightRadius: 20,
        marginBottom: 24
    },
    exploreContainer: {
        marginTop: 16,
        width: '85%',
        marginHorizontal: 'auto',
        backgroundColor: '#ffffff',
        borderRadius: 20,
        shadowColor: '#171717',
        shadowOffset: {width: -2, height: 4},
        shadowOpacity: 0.1,
        shadowRadius: 3,
    },
    explore: {
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        flexDirection: 'row',
        marginBottom: 24,
        paddingHorizontal: 54
    },
    exploreText: {
        fontFamily: 'Poppins_400Regular',
        color: '#5e5e5e'
    }
});
