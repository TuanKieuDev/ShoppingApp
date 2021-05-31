import React, { useState } from 'react'
import { Image, StyleSheet, Text, View } from 'react-native'
import AppButton from '../components/AppButton'
import AppTextInput from '../components/AppTextInput'
import Screen from '../components/Screen'

export default function LoginScreen() {
    const [email, setEmail] = useState()
    const [password, setPassword] = useState()
    return (
        <Screen>
            <Image style={styles.logo} source={require('../assets/logo-red.png')}/>
            <AppTextInput
                autoCapitalize="none"
                autoCorrect={false}
                icon="email"
                keyboardType="email-address"
                onChangeText={text=>setEmail(text)}
                placeholder="Email"
                textContentType="emailAddress"
            />
            <AppTextInput
                autoCapitalize="none"
                autoCorrect={false}
                icon="lock"
                onChangeText={text=>setPassword(text)}
                placeholder="Password"
                //auto convert to bullet
                secureTextEntry={true}
                textContentType="password"
            />
            <AppButton title="Login" onPress={()=>console.log(email, password)}/>
        </Screen>
    )
}

const styles = StyleSheet.create({
    logo: {
        width:80,
        height: 80,
        //because screen item is vertical axis
        alignSelf: "center",
        marginTop:50,
        marginBottom:20,
    }
})
