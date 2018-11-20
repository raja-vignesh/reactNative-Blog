/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View} from 'react-native';
import SignUp from './components/Auth/signup';
import SignIn from './components/Auth/signin';
import CreateRecipe from './components/recipe/createRecipe';
import RecipeList from './components/recipe/recipeList';
import BaseRecipe from './components/recipe/baseRecipe';
import AppNavigator from './components/navigation/AppNavigator';
import {createStore ,applyMiddleware,compose} from 'redux';
import {Provider} from 'react-redux';
import RootReducer from './reducers/rootReducer';
import thunk from 'redux-thunk';
import {getFirebase,reactReduxFirebase} from 'react-redux-firebase';
import {getFirestore,reduxFirestore} from 'redux-firestore';
import firebaseConfig from './config/firebaseConfig';

const instructions = Platform.select({
  ios: 'Press Cmd+R to reload,\n' + 'Cmd+D or shake for dev menu',
  android:
    'Double tap R on your keyboard to reload,\n' +
    'Shake or press menu button for dev menu',
});

type Props = {};
const initialSate = {}
const store = createStore(RootReducer,compose(applyMiddleware(thunk.withExtraArgument({getFirebase,getFirestore})),
reactReduxFirebase(firebaseConfig,{enableRedirectHandling: false }),reduxFirestore(firebaseConfig)))

export default class App extends Component<Props> {
  render() {
    console.log('AppNavigator')
    return (
      <Provider store={store}><AppNavigator/></Provider>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});
