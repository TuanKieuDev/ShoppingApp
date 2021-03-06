import React from 'react'
import { Platform, StyleSheet, Text, TextInput, View } from 'react-native'
import {MaterialCommunityIcons} from '@expo/vector-icons'
import colors from '../config/colors'
import defaultStyle from '../config/styles'
//...otherProps when you want to add other props into your element
const AppTextInput = ({icon,...otherProps}) => {
    return (
        <View style={styles.container}>
            {icon&&<MaterialCommunityIcons name={icon} size={20} color={colors.medium} style={styles.icon}/>}
            <TextInput style={defaultStyle.text} {...otherProps}/>
        </View>
    )
}

export default AppTextInput

const styles = StyleSheet.create({
    container: {
        backgroundColor: colors.light,
        borderRadius: 25,
        flexDirection: "row",
        width: '100%',
        padding: 15,
        marginVertical: 10,
    },
    icon:{
        marginRight: 10,
        
    }
})
