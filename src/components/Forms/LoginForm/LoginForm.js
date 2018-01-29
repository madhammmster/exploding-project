import React from 'react';

import {Field, reduxForm} from 'redux-form';

import {Form, Button} from 'semantic-ui-react';

import {InputField, CheckboxField} from 'react-semantic-redux-form';


const LoginForm = props => {
    const { handleSubmit } = props;
    return (
        <Form
            size='mini'
            onSubmit={handleSubmit}
        >

            <Field
                name='username'
                component={InputField}
                label='Username'
                placeholder='Username'
            />

            <Field
                name='password'
                component={InputField}
                type='password'
                label='Password'
                placeholder='Password'
            />

            <Form.Field
                control={Button}
                primary
                size='mini'
                type='submit'
            >
                Login
            </Form.Field>

        </Form>
    )
}

export default reduxForm({
    form: 'loginForm'
})(LoginForm)