import { useState } from 'react';
import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native';

const colors = {
  red: "#ff5f58",
  yellow: "#ffce20",
  green: "#48d656"
}
let currentColor = colors.red;

export default function App() {
    const [player, setPlayer] = useState(3);
    const [npc, setNpc] = useState(3);
    const [placar, setPlacar] = useState([0, 0]);
    const [imageSourcePlayer, setImageSourcePlayer] = useState(require('./assets/mysterybox-red.png'));
    const [imageSourcePC, setImageSourcePC] = useState(require('./assets/mysterybox-red.png'));

    function winner(winner){
      if(winner == 1){
          setPlacar([placar[0]+1, placar[1]]);
          currentColor = colors.green;
      }else if(winner == 2){
          setPlacar([placar[0], placar[1]+1]);
          currentColor = colors.red;
      }else{
          currentColor = colors.yellow;
      }
    }

    function play(play){
      setImage(play);
      setPlayer(play);
      let randNpc = Math.floor(Math.random()*3);
      setImage(randNpc, false);
      setNpc(randNpc);
      if (play == 0 && randNpc == 2 || play == 1 && randNpc == 0 || play == 2 && randNpc == 1){
          winner(1);
      } else if (play == 2 && randNpc == 0 || play == 0 && randNpc == 1 || play == 1 && randNpc == 2){
          winner(2);
      }else{
          winner(0);
      }
    }

    function setImage(play, playermode = true, color = 'red') {
      const possibles = [setImageSourcePlayer, setImageSourcePC];
      const possibleNumber = playermode ? 0 : 1;
      if (play === 0) {
        possibles[possibleNumber](require('./assets/stone.png'));
        return;
      } else if (play === 1) {
        possibles[possibleNumber](require('./assets/paper.png'));
        return;
      } else if (play === 2) {
        possibles[possibleNumber](require('./assets/scissors.png'));
        return;
      } else if (play === 3) {
        setImageSourcePC(require(`./assets/mysterybox-${color}.png`));
        setImageSourcePlayer(require(`./assets/mysterybox-${color}.png`));
      }
    }

    function newMatch(){
      currentColor = colors.red;
      setPlacar([0, 0]);
      setImage(3);
    }

    return(
      <View style={styles.container}>
        <View style={[styles.areas, { justifyContent: 'center' }]}>
          <Text style={styles.jokenpoText}><View style={[styles.circle, { backgroundColor: currentColor }]}></View>JO KEN PÔ<View style={[styles.circle, { backgroundColor: currentColor }]}></View></Text>
        </View>
        <View style={styles.areas}>
          <View style={styles.placarArea}>
            <Text style={{textAlign: 'center', fontSize: 20, marginBottom: 15}}>Placar</Text>
            <View style={styles.containerPlacar}>
              <Text style={styles.placarNumber}>{placar[0]}</Text>
              <Text style={styles.placarNumber}>{placar[1]}</Text>
            </View>
          </View>
        </View>
        <View style={[styles.containerJog, styles.areas]}>
          <Image source={imageSourcePlayer} style={styles.img}/>
          <Image source={require('./assets/vs.png')} style={[styles.img, {height: 100, width: 100}]}/>
          <Image source={imageSourcePC} style={styles.img}/>
        </View>
        <View style={[styles.areas, styles.new]}>
          <TouchableOpacity style={[styles.newMatch, { backgroundColor: currentColor }]} onPress={() => {
            newMatch();
          }}>
            <Text style={styles.newMatchText}>Nova partida</Text>
          </TouchableOpacity>
        </View>
        <View style={[styles.containerPlayer, styles.areas]}>
          <TouchableOpacity onPress={() => play(0)}>
            <Image source={require('./assets/stone.png')} style={styles.imgPlayer}/>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => play(1)}>
            <Image source={require('./assets/paper.png')} style={styles.imgPlayer}/>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => play(2)}>
            <Image source={require('./assets/scissors.png')} style={styles.imgPlayer}/>
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
    height: 100,
    flex: 1,
    resizeMode: 'contain'
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
    backgroundColor: currentColor,
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
    marginHorizontal: 20,
    borderRadius: '50%'
  }
});
