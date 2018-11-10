import React from 'react';
import { Grid, Icon, Form , Segment, Button, Header, Message } from 'semantic-ui-react';
import { Link } from 'react-router-dom';

import firebase from "../firebase";

class Register extends React.Component{

    constructor(props){
    
        super(props);
        this.state = {
            username: '',
            email: '',
            password: '',
            passwordConfirmation: '',
        };
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }
    // state = {
    //     username: "",
    //     email: "",
    //     password: "",
    //     passwordConfirmation: ""
    //   };
    handleChange(event){
        console.log('>>>>>>handleChangeEvent>>>>>>>>>>',event.target.name,event.target.value);
        this.setState({
            [event.target.name ]: event.target.value
        })
    }

    handleSubmit(event){
        event.preventDefault();
        console.log('>>>In handleSubmitHandler>>>>');
        firebase
        .auth()
        .createUserWithEmailAndPassword(this.state.email, this.state.password)
        .then( createdUser=>{
            console.log('>>>createdUser>>>>>',createdUser);
        }).catch(err=>{
            console.log('>>>Exception>>>Occur>>>',err);
        });
    }

    render(){
        const { username, email, password,passwordConfirmation  } = this.state;

        return(
            <Grid textAlign= "center" verticalAlign="middle">
                <Grid.Column style= {{ maxWidth:450 }} >
                    <Header as="h2" icon color="orange" textAlign="center">
                        Register
                    <Icon name="puzzle piece" color="orange"></Icon>
                    </Header>           
              
                <Form  onSubmit={ this.handleSubmit } size="large">
            
                <Segment stacked>

                <Form.Input fluid name="username" icon="user" iconPosition="left" 
                   placeholder="UserName" value= {username } onChange= { this.handleChange } type="text" >
                </Form.Input>

                <Form.Input fluid name="email" icon="mail" iconPosition="left" 
                   placeholder="Email Address" value= { email } onChange= { this.handleChange } type="email" >
                </Form.Input>

                <Form.Input fluid name="password" icon="lock" iconPosition="left" 
                   placeholder="Password" value={ password } onChange= { this.handleChange } type="password" >
                </Form.Input>


                <Form.Input fluid name="passwordConfirmation" icon="repeat" iconPosition="left" 
                   placeholder="Password Confirmation" value={ passwordConfirmation } onChange= { this.handleChange } type="password" >
                </Form.Input>

                <Button color="orange" fluid size="large"  > Submit </Button>
                </Segment>
                </Form>
                <Message>Already a User <Link to="/login">Login</Link></Message>
                </Grid.Column>
            </Grid>
        )    
    }

}

export default Register;