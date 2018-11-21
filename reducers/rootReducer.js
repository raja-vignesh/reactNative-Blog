import RecipeReducer from './recipeReducer';
import {combineReducers} from 'redux';
import AuthReducer from './authReducer';
import {firestoreReducer} from 'redux-firestore';
import {firebaseReducer} from 'react-redux-firebase';

const RootReducer = combineReducers({
    recipes:RecipeReducer,
    firestore:firestoreReducer,
    firebase:firebaseReducer,
    auth:AuthReducer
})

export default RootReducer;