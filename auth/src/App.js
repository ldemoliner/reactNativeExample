import React, { Component } from 'react';
import { View } from 'react-native';
import firebase from 'firebase';
import {Button, CardSection, Header, Spinner} from './component/common';
import LoginForm from './component/LoginForm';

class App extends Component {
    state = { loggedIn: null };

    componentWillMount() {

        firebase.initializeApp({
            apiKey: "AIzaSyB6Dywbk_fcdHy8oBd5iACnfxc3fMgR-qg",
            authDomain: "auth-88bf0.firebaseapp.com",
            databaseURL: "https://auth-88bf0.firebaseio.com",
            projectId: "auth-88bf0",
            storageBucket: "auth-88bf0.appspot.com",
            messagingSenderId: "387099215480"
        });

        firebase.auth().onAuthStateChanged((user) => {
            if (user){
                this.setState({ loggedIn: true });
            } else {
                this.setState({ loggedIn: false });
            }
        });
    }

    renderContent() {
        switch (this.state.loggedIn){
            case true:
                return (
                    <CardSection>
                        <Button onPress={() => firebase.auth().signOut()}>
                            Log out
                        </Button>
                    </CardSection>
                )
            case false:
                return<LoginForm/>
            default:
                <Spinner size="large"/>
        }
    }

    render() {
        return (
            <View>
                <Header headerText="Authentication"/>
                {this.renderContent()}
            </View>
        );
    }
}

export default App;