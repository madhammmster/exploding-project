import React from 'react';

import {Field, reduxForm} from 'redux-form';

import {Form, Button} from 'semantic-ui-react';

import {InputField, CheckboxField} from 'react-semantic-redux-form';


const RegisterForm = props => {
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
                name='email'
                component={InputField}
                label='Email'
                placeholder='Email'
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
                Create account
            </Form.Field>

        </Form>
    )
}

export default reduxForm({
    form: 'registerForm'
})(RegisterForm)