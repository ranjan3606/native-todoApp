import React, { Touchable, TouchableOpacity } from 'react-native'
import {View, Text, StyleSheet} from 'react-native'

const Task = (props) => {
    return(
        <View style={styles.item}>
            <Text style={styles.itemLeft}>
                <View style={styles.sqare}></View>
                <Text style={styles.itemText}>{props.text}</Text>
            </Text>
            <View style={styles.curclar}></View>
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
        marginBottom: 20
    },
    itemLeft:{
        flexDirection: 'row',
        alignItems: 'center',
        flexWrap: 'wrap'
    },
    sqare:{
        width: 24,
        height: 24,
        backgroundColor: '#9AE1E7',
        opacity: 0.4,
        borderRadius: 4,
        marginRight:15
    },
    itemText:{
        maxWidth: '80%',
    },
    curclar:{
        width:12,
        height:12,
        borderColor: 'red',
        borderWidth: 2,
        borderRadius: 5
    }
})

export default Task