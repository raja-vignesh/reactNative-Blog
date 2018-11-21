const initialState = {
    authError:'',
    response:''
}

const AuthReducer = (state = initialState,action) => {
    switch (action.type) {
        case 'USER_CREATION_SUCESS':
             return {
                 ...state,authError:null
             }
        case 'USER_CREATION_FAILED':
             return {
                 ...state,authError:action.err
        }
        case 'LOGIN_SUCCESS':
            return {
            ...state,authError:null
        }
        case 'LOGIN_FAILURE':
            return {
            ...state,authError:action.err
        }
        case  'LOGOUT_SUCCESS':
            return {
            ...state,authError:null
        }
        case  'LOGOUT_FAILURE':
            return {
                ...state,authError:action.err
            }
        default:
            return state
    }
}


export default AuthReducer;