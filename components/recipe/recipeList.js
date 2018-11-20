import React,{Component} from 'react';
import {StyleSheet} from 'react-native';
import RecipeItem from './recipeItem';
import {Container,Content,Card,Header,Body,Text} from 'native-base';
import {bindActionCreators} from 'redux';
import RecipeListAction from '../../actions/recipeActions';
import {connect} from 'react-redux';
import {firestoreConnect} from 'react-redux-firebase';
import {compose} from 'redux';

class RecipeList extends Component {

    state = {

    }
     
    componentDidMount() {

    }
    
    render() {
        console.log('this.props')
        console.log(this.state)
        console.log(this.props)
        return (
            <Container>
                <Content>
          {        this.props.recipes && this.props.recipes.length > 0 ? this.props.recipes.map(x => {
                            return <RecipeItem key ={x.id} recipe = {x}/>
                        }) : <Text> Loading content... </Text>  }                 
                </Content>
            </Container>
        )
    }
}

const mapStateToProps = (state) => {

    return {
        recipes:state.firestore.ordered.recipes
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        fetchRecipe:() => dispatch(RecipeListAction())
    }
}

export default compose(connect(mapStateToProps,mapDispatchToProps),firestoreConnect([{
    collection:'recipes',

}]))(RecipeList);

