import React from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';
import Card from './Card'
import CardSection from './CardSection'

const AlbumDetail = ({ album }) => {

    const { title, artist, thumbnail_image } = album
    const { albumImg, textContainer } = styles

    return (
        <Card>
            <CardSection>
                <View>
                    <Image style={albumImg} source={{ uri: thumbnail_image }} />
                </View>
                <View style={textContainer}>
                    <Text>{title}</Text>
                    <Text>{artist}</Text>
                </View>
            </CardSection>
        </Card>
    );
}

const styles = StyleSheet.create({
    albumImg: {
        height: 50,
        width: 50,
        marginRight: 10
    },
    textContainer: {
        flexDirection: 'column',
        justifyContent: 'space-around'

    }
})

export default AlbumDetail;