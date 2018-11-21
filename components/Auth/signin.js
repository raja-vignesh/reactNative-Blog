import React,{Component} from 'react';
import {StyleSheet} from 'react-native';
import {connect} from 'react-redux';
import {Container,Content,Form,Label,Input,Header, Item, Body,Title,Button,Text} from 'native-base';
import {AuthActions} from '../../actions/authActions';

class SignIn extends React.Component {

    constructor(props) {
        super(props)
        this.state = {
            email:'',
            password:''
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
        this.props.sigin(this.state)
    }

    signUp = () => {
        this.props.navigation.navigate('SignUp')
    }

    render() {
        return (
            <Container>
                <Content>
                    <Form>
                        <Item floatingLabel>
                            <Label>Email</Label>
                            <Input id="email" onChangeText={val => this.handleChange('email',val)}/>
                        </Item>
                        <Item floatingLabel>
                            <Label>Password</Label>
                            <Input id="password" onChangeText={val => this.handleChange('password',val)}/>
                        </Item>
                        
                    </Form>
                    <Button block style={styles.buttonStyle} id="signin" onPress={this.submitChange}>
                            <Text>SignIn</Text>
                    </Button>
                    <Button block transparent style={styles.buttonStyle} onPress={this.signUp}>
                        <Text>SignUp</Text>
                    </Button>
                </Content>
            </Container>
        )
    }

} 


const mapDispatchToProps = (dispatch) => {
    return {
        sigin : (creds) => dispatch(AuthActions(creds))
    }
}

export default connect(null,mapDispatchToProps)(SignIn);


const styles = StyleSheet.create({
    buttonStyle: {
        marginTop:40
    }
})