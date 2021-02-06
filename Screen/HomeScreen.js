import React from 'react'
import { Button, View, Text, StyleSheet } from 'react-native'

function HomeScreen({navigation}){
    return(
        <View style={styles.container}>
            <Text>GPS MAP</Text>
            <Button title='Click me!' onPress={() => navigation.navigate('List')}/>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#fff'
    }
})

export default HomeScreen;