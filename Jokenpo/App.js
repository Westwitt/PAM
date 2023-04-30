import { useState } from 'react';
import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native';

export default function App() {
    return(
      <View style={styles.container}>
        <View style={[styles.areas, { justifyContent: 'center' }]}>
          <Text style={styles.jokenpoText}><View style={styles.circle}></View>JO KEN PÔ<View style={styles.circle}></View></Text>
        </View>
        <View style={styles.areas}>
          <View style={styles.placarArea}>
            <Text style={{textAlign: 'center', fontSize: 20, marginBottom: 15}}>Placar</Text>
            <View style={styles.containerPlacar}>
              <Text style={styles.placarNumber}>0</Text>
              <Text style={styles.placarNumber}>0</Text>
            </View>
          </View>
        </View>
        <View style={[styles.containerJog, styles.areas]}>
          <Image source={require('./assets/mysterybox-red.png')} style={styles.img}/>
          <Image source={require('./assets/vs.png')} style={[styles.img, {height: 130, width: 130}]}/>
          <Image source={require('./assets/mysterybox-red.png')} style={styles.img}/>
        </View>
        <View style={[styles.areas, styles.new]}>
          <TouchableOpacity style={styles.newMatch}>
            <Text style={styles.newMatchText}>Nova partida</Text>
          </TouchableOpacity>
        </View>
        <View style={[styles.containerPlayer, styles.areas]}>
          <TouchableOpacity>
            <Image source={require('./assets/stone.png')} style={styles.imgPlayer} />
          </TouchableOpacity>
          <TouchableOpacity>
            <Image source={require('./assets/paper.png')} style={styles.imgPlayer} />
          </TouchableOpacity>
          <TouchableOpacity>
            <Image source={require('./assets/scissors.png')} style={styles.imgPlayer} />
          </TouchableOpacity>
        </View>
      </View>
    )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  containerJog: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-around',
    width: '100vw',
    alignItems: 'center'
  },
  img: {
    width: 100,
    height: 100
  },
  containerPlayer: {
    display: 'flex',
    flexDirection: 'row',
    width: '100vw',
    justifyContent: 'space-around'
  },
  imgPlayer: {
    width: 100,
    height: 80
  },
  areas: {
    flex: 1
  },
  new: {
    justifyContent: 'center'
  },
  newMatch: {
    backgroundColor: '#ff5f58',
    paddingVertical: 20,
    paddingHorizontal: 30,
    borderRadius: 10,
    borderWidth: 1,
    borderColor: '#000',
    shadowColor: '#171717',
    shadowOffset: {width: -2, height: 3},
    shadowOpacity: 0.1,
    shadowRadius: 3,
  },
  newMatchText: {
    color: '#fff',
    fontWeight: 700,
    fontSize: 18,
    letterSpacing: .7
  },
  placarArea: {
    backgroundColor: '#e6e6e6',
    paddingVertical: 10,
    borderRadius: 10,
    paddingHorizontal: 30,
    width: '90vw',
  },
  containerPlacar: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  placarNumber: {
    fontWeight: 600,
    fontSize: 50,
  },
  jokenpoText: {
    display: 'flex', 
    justifyContent: 'center', 
    alignItems: 'center',
    fontSize: 50,
    fontFamily: 'fantasy',
    backgroundColor: '#e6e6e6',
    paddingVertical: 10,
    borderRadius: 10
  },
  circle: {
    width: 30,
    height: 30,
    backgroundColor: '#ff5f58',
    marginHorizontal: 20,
    borderRadius: '50%'
  }
});
