/**
 *
 * Created by Luteh on 06/06/2017.
 */
import React from 'react';
import {Text, View, Image, Linking} from 'react-native';
import Card from './Card';
import CardSection from './CardSection';
import Button from './Button';

const AlbumDetail = ({album}) => {
    const {title, artist, thumbnail_image, image, url} = album;
    const {
        thumbnailStyle,
        headerContentStyle,
        thumbnailContainerStyle,
        headerTextStyle,
        imageStyle
    } = styles;
    return (
        <Card>
            <CardSection>
                <View style={thumbnailContainerStyle}>
                    <Image
                        style={thumbnailStyle}
                        source={{uri: thumbnail_image}}
                    />
                </View>
                <View style={headerContentStyle}>
                    <Text style={headerTextStyle}>{title}</Text>
                    <Text style={headerTextStyle}>{artist}</Text>
                </View>
            </CardSection>
            <CardSection>
                <Image
                    style={imageStyle}
                    source={{uri: image}}
                />
            </CardSection>
            <CardSection>
                <Button whenPressed={()=> Linking.openURL(url)}>
                    Buy Now
                </Button>
            </CardSection>
        </Card>
    );
};

const styles = {
    imageStyle: {
        height: 300,
        flex: 1,
        width: null
    },
    thumbnailStyle: {
        width: 50,
        height: 50
    },
    headerContentStyle: {
        flexDirection: 'column',
        justifyContent: 'space-between'
    },
    thumbnailContainerStyle: {
        justifyContent: 'center',
        alignItems: 'center',
        marginLeft: 10,
        marginRight: 10
    },
    headerTextStyle: {
        fontSize: 18
    }
};


export default AlbumDetail;
