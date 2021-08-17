import {createContext, useReducer} from 'react'

export const Context = createContext({});

const initialState={
    user: null,
};

function reducer(state, action){
    switch(action.type){
        case "LOGIN":
            return {
                user: {
                    email: action.user.email,
                    username: action.user.username,
                }
            };
            case "LOG_OUT":
                return{
                    user: null,
                };
                default:
                    return state;
    }
}

function ContextWrapper({children}){
    const [state, dispatch] = useReducer(reducer, initialState);

    return (
        <Context.Provider value={{state, dispatch}}>
            {children}
        </Context.Provider>
    )
}

export default ContextWrapper;