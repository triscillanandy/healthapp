import React from 'react'
import { StyleSheet, View, Image } from 'react-native'



const SplashScreen= ({ navigation }) => {

    setTimeout(() => {
        navigation.replace('Login')
   }, 100)
    return (
        <View style = {{ flex: 1, flexDirection: 'column', justifyContent: 'center', alignItems: 'center', backgroundColor:"#00C2CB"}} >
           
            <Image source = { require('../../assets/assets/images/icon.png')} style = {{ width: 200, height: 200,marginLeft: 4} }/>
        
                
        </View>
    )
}

export default SplashScreen

const styles = StyleSheet.create({})