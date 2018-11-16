import React,{Component} from 'react';
import {Container,Header,Contentent,Tab,Tabs,Body,Title} from 'native-base';

import CreateRecipe from './createRecipe';
import RecipeList from './recipeList';

class BaseRecipe extends Component {
    render() {
        return (
            <Container>
                <Header hasTabs> 
                    <Body>
                        <Title>Recipes</Title>
                    </Body>
                </Header>
                <Tabs>
                    <Tab heading="Recipe List">
                        <RecipeList/>
                    </Tab>
                    <Tab heading="Create Recipe">
                        <CreateRecipe/>
                    </Tab>
                </Tabs>
            </Container>
        )
    }
}

export default BaseRecipe;