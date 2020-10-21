import React from 'react';
import { View, StyleSheet } from 'react-native';
import { } from 'react-native-elements'

import Header from '../components/Header'
import AlbumList from '../components/AlbumList'

const HomeScreen = ({ navigation }) => {
    return (
        <View style={{ flex: 1 }}>
            <Header headerText={'Albums'} />
            <AlbumList />
        </View>
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