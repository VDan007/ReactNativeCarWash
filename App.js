import { StatusBar } from 'expo-status-bar';
import { Video } from 'expo-av';
import {useState} from "react";
import { StyleSheet, Text, View, Button } from 'react-native';
import MapView, {Marker} from 'react-native-maps';



import FooterNav from "./components/FooterNav.js";
import Map from "./components/Map.js";
import User from "./components/User.js";
import Home from "./components/Home.js";
import CalendarComp from "./components/Calendar.js";
import Login from "./components/Login.js";

export default function App() {

  const [screen,setScreen] = useState("login");

  const video = require('./assets/heroMovie.mp4');
  
  function switchScreen(screen){
    setScreen(screen);
  }
  
  

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
       
        {screen == "home" && <Home
                                switchScreen={switchScreen}
                                screen ={screen}
                             />}
        {screen == "map" && <Map />}
        {screen == "user" && <User />}
        {screen == "calendar" && <CalendarComp/>}
        

        <FooterNav
          switchScreen={switchScreen}
          screen ={screen}
        />
        <Login
          switchScreen={switchScreen}
          screen ={screen}
        />

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
  },
  map:{
    width: 200,
    height: 200,
  }
});
