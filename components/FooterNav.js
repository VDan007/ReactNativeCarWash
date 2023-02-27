import { StyleSheet, Text, View, Button } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';


function FooterNav(){
    return(
        <View style={styles.footer}>
            <View style={styles.footerBtn}>
                <Icon
                name="home"
                style={styles.icon}
                ></Icon>
                <Text>Home</Text>
            </View>

            <View style={styles.footerBtn}>
                <Icon
                name="map"
                style={styles.icon}
                ></Icon>
                <Text>Map</Text>
            </View>

            <View style={styles.footerBtn}>
                <Icon
                name="user"
                style={styles.icon}
                ></Icon>
                <Text>Account</Text>
            </View>

        </View>
    );
}

const styles = StyleSheet.create({
    footer:{
        position: "absolute",
        flexDirection: "row",
        justifyContent: "space-between",
        paddingHorizontal: 25,
        bottom:0,
        height: 85,
        width: "100%",
        backgroundColor: "#B5EB4A"
    },
    icon:{
        fontSize: 35,
    },
    footerBtn:{
        justifyContent:"center",
        alignItems: 'center',
        gap: 3,
    },
});

export default FooterNav;