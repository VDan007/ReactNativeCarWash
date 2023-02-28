import { StyleSheet, Text, View, Pressable } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import { useRef } from 'react';


function FooterNav(props){

    
    function homePressed(){
        props.switchScreen("home");
    }
    function mapPressed(){
        props.switchScreen("map");
    }
    function userPressed(){
        props.switchScreen("user");
    }
    

    return(
        <View style={styles.footer}>

                <Pressable 
                style={(pressData)=>pressData.pressed && styles.pressed}
                onPress={homePressed}
                
                >
                    <View style={styles.footerBtn}>
                    
                            <Icon
                            name="home"
                            style={styles.icon}
                            ></Icon>
                            <Text>Home</Text>
                    </View>
                </Pressable>

                <Pressable 
                    style={(pressData)=>pressData.pressed && styles.pressed}
                    onPress={mapPressed}
                >
                    <View style={styles.footerBtn}>
                        
                            <Icon
                            name="map"
                            style={styles.icon}
                            ></Icon>
                            <Text>Map</Text>
                    </View>
                </Pressable>

                <Pressable 
                    style={(pressData)=>pressData.pressed && styles.pressed}
                    onPress={userPressed}
                >
                    <View style={styles.footerBtn}>
                    
                            <Icon
                            name="user"
                            style={styles.icon}
                            ></Icon>
                            <Text>Account</Text>
                    </View>
                </Pressable>
        </View>
    );
}

const styles = StyleSheet.create({
    footer:{
        position: "absolute",
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        paddingHorizontal: 25,
        bottom:0,
        height: 85,
        width: "100%",
        backgroundColor: "#B5EB4A",
    },
    icon:{
        fontSize: 35,
    },
    footerBtn:{
        justifyContent:"center",
        alignItems: 'center',
        gap: 3,
    },
    pressed:{
        opacity: 0.5,
    }
});

export default FooterNav;