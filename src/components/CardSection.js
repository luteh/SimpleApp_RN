/**
 * Created by Luteh on 06/06/2017.
 */
import React from 'react';
import {View} from 'react-native';

const CardSection = (props) => {
    return (
        <View style={styles.containerStyle}>
            {props.children}
        </View>
    );
};

const styles = {
    containerStyle: {
        borderColor: '#ddd',
        borderBottomWidth: 1,
        justifyContent: 'flex-start',
        flexDirection: 'row',
        backgroundColor: '#fff',
        padding: 5,
        position: 'relative'
    }
};

export default CardSection;