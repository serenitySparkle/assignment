import {
    SIGNUP_SUCCESS, 
    SIGNUP_FAILURE, 
    SEND_SINGUP_REQUEST, 
    SEND_AUTH_REQUEST, 
    AUTH_FAILURE, 
    AUTH_SUCCESS, 
    SEND_LOGIN_TOKEN_REQUEST, 
    LOGIN_TOKEN_FAILURE, 
    LOGIN_TOKEN_SUCCESS
} from '../actions'

function appReducer(state = [], action) {
    switch (action.type) {
        case SEND_SINGUP_REQUEST:
            return {...state,
                loading: true,
                message: ''
              }
      case SIGNUP_SUCCESS:
        return {state,
            loading: false,
            data: action.data,
            status: 'success',
            message: 'User has been successfully created'
        }
      case SIGNUP_FAILURE:
        return {state,
            loading: false,
            data: action.data,
            status: 'failure',
            message: 'Oops.. something went wrong'
        }
        case SEND_AUTH_REQUEST:
            return {...state,
                loading: true,
                message: ''
              }
      case AUTH_SUCCESS:
        return {state,
            loading: false,
            user: {
                lname: 'Jones',
                fname: 'Julia',
                email: 'julia@jones.com',
                gender: 'Female'
            },
            status: 'success',
            message: 'Authorization was successful'
        }
      case AUTH_FAILURE:
        return {state,
            loading: false,
            data: action.data,
            status: 'failure',
            message: action.message
        }
        case SEND_LOGIN_TOKEN_REQUEST:
            return {...state,
                loading: true,
                message: ''
              }
      case LOGIN_TOKEN_SUCCESS:
        return {state,
            loading: false,
            data: {token: '4fh9jef223ho382je82'}, //JWT could be here
            status: 'success',
            message: 'Now you can successfully login by using the link below'
        }
      case LOGIN_TOKEN_FAILURE:
        return {state,
            loading: false,
            data: action.data,
            status: 'failure',
            message: action.message
        }
      default:
        return state
    }
  }

  export default appReducer