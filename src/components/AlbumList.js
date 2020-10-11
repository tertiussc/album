import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import axios from 'axios'

class AlbumList extends Component {
    state = { albums: [] }

    componentDidMount() {
        axios.get('http://rallycoding.herokuapp.com/api/music_albums')
            .then(response => this.setState({ albums: response.data }))
    }

    render() {
        return (
            <Text>Album list</Text>
        );
    }
}

const styles = StyleSheet.create({

})

export default AlbumList;