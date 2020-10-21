import React, { Component } from 'react';
import { StyleSheet, ScrollView } from 'react-native';
import axios from 'axios'

import AlbumDetail from './AlbumDetail'

class AlbumList extends Component {
    state = { albums: [] }

    componentDidMount() {
        axios.get('http://rallycoding.herokuapp.com/api/music_albums')
            .then(response => this.setState({ albums: response.data }))
    }

    renderAlbums() {
        return this.state.albums.map((album) =>
            <AlbumDetail key={album.title} album={album} />
        )
    }

    render() {
        return (
            <ScrollView>
                {this.renderAlbums()}
            </ScrollView>
        );
    }
}

const styles = StyleSheet.create({

})

export default AlbumList;