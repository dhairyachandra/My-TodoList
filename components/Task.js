import React from 'react';
import { Feather } from '@expo/vector-icons';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';

const Task = (props) => {
    return (
 
        <View style={styles.item}>
            <View style={styles.itemLeft}>
                <View style={styles.square}></View>
                <Text style={styles.itemText}>{props.text}</Text>
            </View>
            <View style={styles.circular}>
            <Feather name="delete" size={20} color="red" />
            </View>
            
        </View>
    )
}
const styles = StyleSheet.create({
    item:{
        backgroundColor: '#fff',
        padding: 15,
        borderRadius: 10,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        marginBottom: 20,
    },
    itemLeft:{
        flexDirection: 'row',
        alignItems: 'center',
        flexWrap: 'wrap',
    },
    square:{
        width: 15,
        height: 15,
        backgroundColor: '#00BFFF',
        opacity: 0.4,
        borderRadius: 50,
        marginRight: 15,
    },
    itemText:{
        maxWidth: '80%',
    },
    circular:{
        opacity: 0.4,

    },

});



export default Task;

