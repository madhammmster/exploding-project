import React from 'react'
import {BrowserRouter as Router} from 'react-router-dom'
import {connect, Provider} from 'react-redux'

import App from './App';
import Login from "./Login";

//Styles
import 'semantic-ui-css/semantic.min.css';


function Root(props) {
    return (
        <Provider store={props.store}>
            <Router>
                {!props.user.currentUser ? (<Login/>) : (<App/>)}
            </Router>
        </Provider>
    )
}

function mapStateToProps(state) {
    return {
        user: state.user,
        app: state.app
    }
}

export default connect(mapStateToProps)(Root);