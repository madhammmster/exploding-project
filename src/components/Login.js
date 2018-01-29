import React from 'react'
import {connect} from 'react-redux'

import Styles from '../styles/AppStyles.scss';
import {Container, Divider, Grid, Segment} from "semantic-ui-react";
import LoginForm from "./Forms/LoginForm/LoginForm";
import {loginUser} from "../services/AuthService";
import RegisterForm from "./Forms/RegisterForm/RegisterForm";


class Login extends React.Component {

    onLoginFormSubmit = (values) => {
        console.log(values);

        var value = loginUser(values.username, values.password);

    }

    onRegisterFormSubmit = (values) => {
        console.log(values);

        var value = loginUser(values.username, values.password);

    }

    render() {
        return (

            <Segment vertical style={{height: '100vh'}}>

                <Grid centered columns={3} verticalAlign='middle' style={{height: '100%'}}>
                    <Grid.Column>
                        <LoginForm
                            handleSubmit={this.onLoginFormSubmit}
                        />
                        <Divider horizontal>Or</Divider>
                        <RegisterForm
                            handleSubmit={this.onRegisterFormSubmit}
                        />
                    </Grid.Column>
                </Grid>



            </Segment>
        )
    }
}

function mapStateToProps(state) {
    return state;
}

export default connect(mapStateToProps, null, null, {pure: false})(Login)