import React,{Component} from 'react';
import {StyleSheet} from 'react-native';
import RecipeItem from './recipeItem';
import {Container,Content,Card,Header,Body} from 'native-base';

class RecipeList extends Component {

    state = {
        recipes: [
            {id:1,title:'This is title 1',content:'This is the first content',author:'xx yy'},
            {id:2,title:'This is title 2',content:'This is the second content',author:'aa bb'},
            {id:3,title:'This is title 3',content:'This is the thord content',author:'cc dd'}
        ]
    }
    render() {
        return (
            <Container>
                <Header/>
                <Content>
                    {
                        this.state.recipes.length > 0 ? this.state.recipes.map(x => {
                            return <RecipeItem key ={x.id} recipe = {x}/>
                        }) : <Text> Loading content... </Text>
                    }
                </Content>
            </Container>
        )
    }
}


export default RecipeList;
