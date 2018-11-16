import React, { Component } from 'react';
import { StyleSheet } from 'react-native';

import { Container, Card, CardItem, Content, Text, Body } from 'native-base';

const RecipeItem = (props) => {
    const { recipe } = props
    return (

        <Card>
            <CardItem header>
                <Text>{recipe.title}</Text>
            </CardItem>
            <CardItem>
                <Body>
                    <Text>{recipe.content}</Text>
                </Body>
            </CardItem>
            <CardItem footer>
                <Text> {recipe.author}</Text>
            </CardItem>
        </Card>

    )
}

export default RecipeItem;