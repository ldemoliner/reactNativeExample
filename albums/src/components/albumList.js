import React, { Component } from 'react';
import { View, Text } from 'react-native';
import axios from 'axios'

class AlbumList extends Component{

    componentWillMount(){
        axios.get('https://rallycoding.herokuapp.com/api/music_albums')
            .then(response => console.log(JSON.stringfy(response)));
    }

    render() {
        return (
            <View>
                <Text>Lista</Text>
            </View>
        );
    }
}

export default AlbumList;
