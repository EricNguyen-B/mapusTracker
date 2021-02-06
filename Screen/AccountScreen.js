import React from 'react'
import { Button, View, Text, StyleSheet } from 'react-native'

function AccountScreen(){
    return(
        <View style={styles.container}>
            <Text>BUILDING INFO</Text>
            {/* <Button title='Click me!'/> */}
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#fff'
    }
})

export default AccountScreen;