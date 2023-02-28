import { StyleSheet, Text, View, Button,Modal,TextInput} from 'react-native';

function Login(props){
    return(

        <Modal
            visible={props.screen == "login" ? true : false }
            animationType="none"
            
        >
            
             <View
                style={styles.container}
             >
                <Text
                    style={styles.text}
                >Wellcome!</Text>

                <TextInput
                    style={styles.input}
                    placeholder="username"
                />
                <TextInput
                    style={styles.input}
                    placeholder="password"
                />
                <Button
                    title='Login'
                    disabled={true}
                    color="#B5EB4A"
                />
                <Button
                    title='Login as Guest'
                    style={styles.btn}
                    color="#B5EB4A"
                    onPress={()=> props.switchScreen("home")}
                />
            </View>   

            
        </Modal>
    );
}

const styles = StyleSheet.create({
    container:{
        backgroundColor: "#010101",
        width: "100%",
        height:"100%",
        justifyContent: "center",
        alignItems: "center",
        gap: 10
    },
    input:{
        width: "70%",
        height: "6%",
        backgroundColor: "#B5EB4A",
        color: "black",
        textAlign: "center",
        borderRadius: 20,
    },
    text:{
        color: "#B5EB4A",
        fontSize: 40,
        marginBottom: 20
    }
   
});

export default Login;