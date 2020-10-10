import React from 'react';
import { View, StyleSheet } from 'react-native';
import { Text } from 'react-native-elements'
import Spacer from '../components/Spacer'

const HomeScreen = () => {
    return (
        <View>
            <Spacer>
                <Text h3 style={styles.homeText}>Home Screen Working</Text>
            </Spacer>
        </View>
    );
}
const styles = StyleSheet.create({
    homeText: {
        color: "dodgerblue",
    }
})

export default HomeScreen;