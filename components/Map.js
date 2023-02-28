import { StyleSheet, Text, View, Button, Modal,SafeAreaView } from 'react-native';
import MapView, {Marker} from 'react-native-maps';
import {useState} from "react";

import FooterNav from './FooterNav';

function Map(props){
    const [mapRegion,setMapRegion] = useState({
        latitude: 47.40974,
        longitude: 19.01846,
        latitudeDelta: 0.1,
        longitudeDelta: 0.1
      });

    return(
        
            <View style={styles.container}>
                <MapView 
                style={{width: "100%", height:"100%"}}
                initialRegion={mapRegion}
                >
                <Marker coordinate={mapRegion}/>
                </MapView>
                
            </View>
        
    );
    
}

const styles = StyleSheet.create({
        container:{
            width:"100%",
            height:"100%"
        }
});

export default Map;