import { StyleSheet, Text, View, Button } from 'react-native';


function FooterNav(){
    return(
        <View style={styles.footer}>
            <View>
                <Text>Home</Text>
            </View>
            <View>
            <Text>Map</Text>
            </View>
            <View>
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
        paddingHorizontal: 15,
        bottom:0,
        height: 80,
        width: "100%",
        backgroundColor: "#B5EB4A"
    }
});

export default FooterNav;