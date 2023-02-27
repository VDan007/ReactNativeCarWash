import { StatusBar } from 'expo-status-bar';
import { Video } from 'expo-av';
import {useState} from "react";
import { StyleSheet, Text, View, Button } from 'react-native';
import MapView, {Marker} from 'react-native-maps';

import FooterNav from "./components/FooterNav.js";

export default function App() {

  const video = require('./assets/heroMovie.mp4');
  const [mapRegion,setMapRegion] = useState({
    latitude: 47.40974,
    longitude: 19.01846,
    latitudeDelta: 0.01,
    longitudeDelta: 0.01
  });
  

  return (
    
      
      <View style={styles.container}>
        <StatusBar style='light'/>
        <View style={styles.videocontainer}>
          <Video
            style={styles.video}
            source={video}
            resizeMode="contain"
            isLooping
            isMuted
            shouldPlay
            usePoster={true}
          />
        </View>
       
        <View style={styles.heroText}>
          <Text style={styles.textTitle}>Tétény Carwash</Text>
          <Text style={styles.text}>Your car's favorite place to get clean</Text>
        </View>
        <Button title="Book an Apointment" color="#B5EB4A"/>
        <MapView 
          style={{width: 150, height:150}}
          initialRegion={mapRegion}
        >
          <Marker coordinate={mapRegion}/>
        </MapView>

        <FooterNav/>

      </View>
    
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#010101',
    alignItems: 'center',
    justifyContent: 'flex-start',
    paddingTop: 5,
    
  },
  video:{
    width: "100%",
    height: 300,
    

  },
  videocontainer:{
    width: "100%",
    height: 300,
    
    
  },
  text:{
    color:"#B5EB4A",
    fontSize: 25,
    textAlign: "center",
    
  },
  textTitle:{
    color:"#B5EB4A",
    fontSize: 25,
    textAlign: "center",
    textDecorationLine:'underline',
  },
  heroText:{
    
    width: "100%",
    height:  300,
    position: "absolute",
    top: 5,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "rgba(0,0,0,0.5)",
    gap: 20,
  }
});
