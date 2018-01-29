import {LOGIN_USER} from "../actions/_constants";

const initialState = {
    currentUser: undefined
}

export default function userReducer(state = initialState, action) {
    switch (action.type) {
        case LOGIN_USER:
            return Object.assign({}, state, {
                currentUser: action.payload
            })
        default:
            return state
    }
}