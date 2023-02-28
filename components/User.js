import { StyleSheet, Text, View, Button } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

function User(){
    return(
        <View style={styles.container}>
            <View>
                <Icon 
                    name="user"
                    style={styles.icon}
                />
                <Text
                    style={styles.userName}
                >Mr.Dummy User</Text>
            </View>

            <View 
                style={styles.loyaltyContainer}
            >
                <Text 
                    style={styles.userName}>Loyalty Level
                </Text>
                <View 
                    style={styles.loyaltyLevel}
                >
                    <Icon 
                            name="star"
                            style={styles.icon}
                    />
                    <Icon 
                            name="star"
                            style={styles.icon}
                    />
                    <Icon 
                            name="star"
                            style={styles.icon}
                    />
                </View>


            </View>
            <View
                style={styles.bonus}
            >
                    <Text
                        style={styles.userName}
                    >Your FREE BONUS today:</Text>
                    <Icon
                        name='coffee'
                        style={styles.icon}
                    />
                </View>

        </View>
    );
}

const styles = StyleSheet.create({
    container:{
        width:"100%",
        height:"100%",
        paddingHorizontal: 20,
        gap: 70,
    },
    icon:{
        fontSize: 55,
        color: "#B5EB4A",
        marginBottom: 7,
    },
    userName:{
        color:"#B5EB4A",
        fontSize: 20,
    },
    loyaltyLevel:{
        flexDirection: "row",
    },
    loyaltyContainer:{
        alignItems: "center"
    },
    bonus:{
        alignItems: "center",
        gap: 7
    }
});

export default User;