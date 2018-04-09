import React, { Component } from 'react';
import { View, Text } from 'react-native';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import firebase from 'firebase';
import reducers from './reducers';
import LoginForm from './components/LoginForm'

class App extends Component{
    componentWillMount(){
        const config = {
            apiKey: 'AIzaSyCVn4I3YeLgN--aruyVrn3ORJ9A8W5Pkpc',
            authDomain: 'manager-a1d63.firebaseapp.com',
            databaseURL: 'https://manager-a1d63.firebaseio.com',
            projectId: 'manager-a1d63',
            storageBucket: 'manager-a1d63.appspot.com',
            messagingSenderId: '502322683296'
        };
        firebase.initializeApp(config);
    }

    render() {
        return (
            <Provider store={createStore(reducers)}>
                <LoginForm/>
            </Provider>
        )
    }
}

export default App;