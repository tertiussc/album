import React from 'react';
import { View, StyleSheet } from 'react-native';
import { Text } from 'react-native-elements'

const Header = (props) => {
    return (
        <View style={styles.container}>
            <Text style={styles.header}>{props.headerText}</Text>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        // justifyContent is to position vertically and alignItem is for Horizontal
        backgroundColor: '#f2f2f2',
        justifyContent: 'center',
        alignItems: 'center',
        height: 60,
        paddingTop: 15,

        // Shaddow
        shadowColor: '#000',
        shadowOffset: { width: 2, height: 2 },
        shadowOpacity: 0.2,
        elevation: 2,
        position: 'relative'
    },
    header: {
        fontSize: 28,
    }
})

export default Header;