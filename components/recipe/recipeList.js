import React,{Component} from 'react';
import {StyleSheet} from 'react-native';
import RecipeItem from './recipeItem';
import {Container,Content,Card,Header,Body,Text} from 'native-base';
import {bindActionCreators} from 'redux';
import RecipeListAction from '../../actions/recipeActions';
import {connect} from 'react-redux';

class RecipeList extends Component {

    state = {

    }

    componentDidMount() {
        console.log('componentDidMount')
        this.props.fetchRecipe()
    }
    
    render() {
        return (
            <Container>
                <Content>
  {                      this.props.recipes.length > 0 ? this.props.recipes.map(x => {
                            return <RecipeItem key ={x.id} recipe = {x}/>
                        }) : <Text> Loading content... </Text>  }                 
                </Content>
            </Container>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        recipes:state.recipes
    }
}

const mapDispatchToProps = (dispatch) => {
    console.log('mapDispatchToProps');   
    // return bindActionCreators({
    //     RecipeListAction
    // }, dispatch)
    return {
        fetchRecipe:() => dispatch(RecipeListAction())
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(RecipeList);

