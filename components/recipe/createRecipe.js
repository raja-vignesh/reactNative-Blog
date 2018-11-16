import React,{Component} from 'react';
import {Container,Header,Form,Content,Label,Text,Button,Item,Textarea,Input,Body} from 'native-base';
import {StyleSheet} from 'react-native';

class CreateRecipe extends Component {
    constructor(props) {
        super(props);

    }

    state = {
        title:'',
        content:'',
        info:''
    }

    handleCreate = () => {
        console.log('handleCreate')
        console.log(this.state)
    }

    handleChange = (key,val) => {
        this.setState({
            [key]:val
        })
        console.log(this.state);
    }

    render() {
        return (
            <Container>
                <Content>
                    <Form padder>
                        <Item floatingLabel style={styles.padding}>
                            <Label>Title</Label>
                            <Input onChangeText={(text) => this.handleChange('title',text) }/>
                        </Item>
                        <Textarea rowSpan={10} bordered placeholder="Content" style={styles.padding} 
                                onChangeText={(text) => this.handleChange('content',text) }/>
                    </Form>
                    <Body>
                        <Button block style={styles.padding} onPress= {this.handleCreate}>
                            <Text>Create</Text>
                        </Button>
                    </Body>
                </Content>
            </Container>
        )
    }
}

const styles = StyleSheet.create({
    padding: {
        marginTop:40
    }
});

export default CreateRecipe;