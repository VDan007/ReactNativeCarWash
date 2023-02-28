import { StyleSheet, Text, View, Pressable,Button } from 'react-native';
import {Calendar, CalendarList, Agenda} from 'react-native-calendars';

function CalendarComp(){
    return(
        <View 
            style={styles.calendarContainer}
        >
            <Calendar 
                style={{
                    width: "100%",
                    height: "80%",
                }}
                theme={{
                    calendarBackground: "#010101",
                    textSectionTitleColor: '#B5EB4A',
                    textSectionTitleDisabledColor: '#B5EB4A',
                    monthTextColor: '#B5EB4A',
                    arrowColor: "#B5EB4A",

                }}
            />
            <Button title="Close"/>
        </View>
    );
}

const styles = StyleSheet.create({
    calendarContainer:{
        width: "100%",
        height: "100%",
        
    }
});

export default CalendarComp;