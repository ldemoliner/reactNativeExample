import React, { Component } from 'react';
import { View, Text } from 'react-native';
import firebase from 'firebase';
import { Header } from './component/common';
import LoginForm from './component/LoginForm';

class App extends Component {

    componentWillMount() {
        firebase.initializeApp({
            apiKey: "AIzaSyB6Dywbk_fcdHy8oBd5iACnfxc3fMgR-qg",
            authDomain: "auth-88bf0.firebaseapp.com",
            databaseURL: "https://auth-88bf0.firebaseio.com",
            projectId: "auth-88bf0",
            storageBucket: "auth-88bf0.appspot.com",
            messagingSenderId: "387099215480"
        });
    }

    render() {
        return (
            <View>
                <Header headerText="Authentication"/>
                <LoginForm/>
            </View>
        );
    }
}

export default App;