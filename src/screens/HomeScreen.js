import React from 'react';
import { StyleSheet } from 'react-native';
import { } from 'react-native-elements'

import Header from '../components/Header'
import AlbumList from '../components/AlbumList'

const HomeScreen = ({ navigation }) => {
    return (
        <>
            <Header headerText={'Albums'} />
            <AlbumList />
        </>
    );
}

// clear the title in header
HomeScreen.navigationOptions = () => {
    return {
        header: () => false
    }
}

const styles = StyleSheet.create({
})

export default HomeScreen;