import React,{Component} from 'react';
import {StyleSheet} from 'react-native';

import {Container,Content,Form,Label,Input,Header, Item, Body,Title,Button,Text} from 'native-base';

class SignUp extends React.Component {

    constructor(props) {
        super(props)
        this.state = {
            email:'',
            password:'',
            firstName:'',
            lastName:''
        }
    }

    handleChange = (key,val) => {
        console.log('handleChange')
        this.setState({[key]:val});
    }

    submitChange = () => {
        console.log('submitChange')
        console.log(this.state);
        this.props.navigation.navigate('BaseRecipe')
    }

    signIn = () => {
        this.props.navigation.navigate('SignIn')
    }

    render() {
        return (
            <Container>
                <Content>
                    <Form style={styles.buttonStyle}>
                        <Item floatingLabel>
                            <Label>Email</Label>
                            <Input id="email" onChangeText={val => this.handleChange('email',val)}/>
                        </Item>
                        <Item floatingLabel>
                            <Label>Password</Label>
                            <Input id="password" onChangeText={val => this.handleChange('password',val)}/>
                        </Item>
                        <Item floatingLabel>
                            <Label>First Name</Label>
                            <Input id="firstName" onChangeText={val => this.handleChange('firstName',val)}/>
                        </Item>
                        <Item floatingLabel>
                            <Label>Last Name</Label>
                            <Input id="lastName" onChangeText={val => this.handleChange('lastName',val)}/>
                        </Item>

                    </Form>
                    <Button block style={styles.buttonStyle} id="signup" onPress={this.submitChange}>
                            <Text>SignUp</Text>
                    </Button>
                    <Button block transparent style={styles.buttonStyle} id="signin" onPress={this.signIn}>
                        <Text>SignIn</Text>
                    </Button>
                </Content>
            </Container>
        )
    }

} 


export default SignUp;

const styles = StyleSheet.create({
    buttonStyle: {
        marginTop:40
    }
})