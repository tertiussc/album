import React from 'react';
import { StyleSheet } from 'react-native';
import { } from 'react-native-elements'

import Header from '../components/Header'
import Spacer from '../components/Spacer'

const HomeScreen = ({ navigation }) => {
    return (
        <>
            <Header headerText={'Albums'} />
        </>
    );
}
const styles = StyleSheet.create({
    homeText: {
        color: "dodgerblue",
    }
})

export default HomeScreen;