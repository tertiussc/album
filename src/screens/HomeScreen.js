import React from 'react';
import { StyleSheet } from 'react-native';
import { Text } from 'react-native-elements'

import Header from '../components/Header'
import Spacer from '../components/Spacer'

const HomeScreen = ({ navigation }) => {
    return (
        <>
            <Spacer>
                <Header />
                <Text h3 style={styles.homeText}>Home Screen Working</Text>
            </Spacer>
        </>
    );
}
const styles = StyleSheet.create({
    homeText: {
        color: "dodgerblue",
    }
})

export default HomeScreen;