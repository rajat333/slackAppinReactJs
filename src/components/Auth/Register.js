import React from 'react';
import { Grid, Icon, Form , Segment, Button, Header, Message } from 'semantic-ui-react';
import { Link } from 'react-router-dom';

class Register extends React.Component{

    handleChange(){
        console.log('>>>>>>handleChangeEvent>>>>>>>>>>');
    }

    render(){
        return(

            <Grid textAlign= "center" verticalAlign="middle">
                <Grid.Column style= {{ maxWidth:450 }} >
                    <Header as="h2" icon color="orange" textAlign="center">
                        Register
                    <Icon name="puzzle piece" color="orange"></Icon>
                    </Header>           
              
                <Form size="large">
            
                <Segment stacked>

                <Form.Input fluid name="username" icon="user" iconPosition="left" 
                   placeholder="UserName" onChange= { this.handleChange } type="text" >
                </Form.Input>

                <Form.Input fluid name="email" icon="mail" iconPosition="left" 
                   placeholder="Email Address" onChange= { this.handleChange } type="email" >
                </Form.Input>

                <Form.Input fluid name="password" icon="lock" iconPosition="left" 
                   placeholder="Password" onChange= { this.handleChange } type="password" >
                </Form.Input>


                <Form.Input fluid name="passwordConfirmation" icon="repeat" iconPosition="left" 
                   placeholder="Password Confirmation" onChange= { this.handleChange } type="password" >
                </Form.Input>

                <Button color="orange" fluid size="large" > Submit </Button>
                </Segment>
                </Form>
                <Message>Already a User <Link to="/login">Login</Link></Message>
                </Grid.Column>
            </Grid>
        )    
    }

}

export default Register;