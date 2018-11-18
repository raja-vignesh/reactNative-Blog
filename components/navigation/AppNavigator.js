import {createStackNavigator} from 'react-navigation';

import SignUp from '../Auth/signup'
import SignIn from '../Auth/signin'
import BaseRecipe from '../recipe/baseRecipe'

const AppNavigator = createStackNavigator({
    SignUp: {screen: SignUp,navigationOptions: {title:'SignUp'}},
    SignIn : {screen:SignIn,navigationOptions: {title:'SignUp'}},
    BaseRecipe:{screen:BaseRecipe, navigationOptions: {title:'Recipes'}},
})


export default AppNavigator;