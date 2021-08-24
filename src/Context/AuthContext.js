import {createContext, useReducer} from 'react'

export const AuthContext = createContext({});

const initialState={
    user: null,
    card: {},
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
            
            case "CARD":
                return {
                    card: {
                        name: action.card.name,
                        picture: action.card.picture, 
                        description: action.card.description,
                        
                    }
                }
                default:
                    return state;
    }
}

function AuthContextWrapper({children}){
    const [state, dispatch] = useReducer(reducer, initialState);

    return (
        <AuthContext.Provider value={{state, dispatch}}>
            {children}
        </AuthContext.Provider>
    )
}

export default AuthContextWrapper;