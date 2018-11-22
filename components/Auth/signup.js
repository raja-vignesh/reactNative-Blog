import React,{Component} from 'react';
import {StyleSheet} from 'react-native';
import {signupActions} from '../../actions/authActions';
import {Container,Content,Form,Label,Input,Header, Item, Body,Title,Button,Text} from 'native-base';
import {connect} from 'react-redux';


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
        console.log(this.props)
        console.log(this.state);
        this.props.navigation.navigate('BaseRecipe')
        this.props.signup(this.state)
    }

    signIn = () => {
        this.props.navigation.navigate('SignIn')
    }

    componentDidMount() {

    }

    componentDidUpdate() {
        console.log('componentDidUpdate')
        // const {auth,authErr} = this.props;
        // console.log(this.state)
        // console.log(this.props)
        // if (auth.uid) {
        //     console.log('navigate BaseRecipe')
        //     this.props.navigation.navigate('BaseRecipe')
        // }

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


const mapDispatchToProps = (dispatch) => {
    return ({
        signup : (user) => dispatch(signupActions(user))
    })
}

const mapStateToProps = (state) => {
    return {
        authErr:state.auth.authErr,
        auth:state.firebase.auth
    }
}

export default connect(mapStateToProps,mapDispatchToProps) (SignUp);



const styles = StyleSheet.create({
    buttonStyle: {
        marginTop:40
    }
})