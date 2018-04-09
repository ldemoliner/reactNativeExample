import { EMAIL_CHANGED } from '../actions/types';

const INITIAL_STATE = { email: '' };

export default (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case EMAIL_CHANGED:
             return { ...state, email: action.payload }; // PEGA TUDO QUE NEM EM STATE E TOCA ESSE EMAIL POR CIMA 
        default:
            return state;
    }
}