import { View, Text, Image, StyleSheet } from 'react-native'
import React from 'react'

export default function Country({ country }) {
    return (
        <View style={styles.div}>
            <Text style={{fontSize: 20}}>{country.name.common}</Text>
            <Image 
            source={{
                uri: country.flags.png
            }}
            style={{width: '100%', height: 200, marginBottom: 10}}
            ></Image>
        </View>
    )
}

const styles = StyleSheet.create({
    div:{
        width: '100%',
        padding: 10,
        marnigBottom: 10,
    }
})