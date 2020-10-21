import React from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';
import Card from './Card'
import CardSection from './CardSection'

const AlbumDetail = ({ album }) => {

    const { title, artist, thumbnail_image, image } = album
    const { albumImg, textContainer, thumbnailContainer, headerText, albumArt, albumArtContainer } = styles

    return (
        <Card>
            <CardSection>
                <View style={thumbnailContainer}>
                    <Image style={albumImg} source={{ uri: thumbnail_image }} />
                </View>
                <View style={textContainer}>
                    <Text style={headerText}>{title}</Text>
                    <Text>{artist}</Text>
                </View>
            </CardSection>
            <CardSection style={albumArtContainer}>
                <Image style={albumArt} source={{ uri: image }} />
            </CardSection>
        </Card >
    );
}

const styles = StyleSheet.create({
    albumImg: {
        height: 50,
        width: 50,
    },
    textContainer: {
        flexDirection: 'column',
        justifyContent: 'space-around'
    },
    headerText: {
        fontSize: 18,
    },
    thumbnailContainer: {
        justifyContent: 'center',
        alignItems: 'center',
        marginHorizontal: 10
    },
    albumArt: {
        // adding flex and width of null the image will streth to fill the container
        height: 400,
        flex: 1,
        width: null
    },
    albumArtContainer: {
        justifyContent: 'center',
        alignItems: 'center'
    }
})

export default AlbumDetail;