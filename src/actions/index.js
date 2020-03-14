export const SEND_SINGUP_REQUEST = 'SEND_SINGUP_REQUEST'
export const SIGNUP_SUCCESS = 'SINGUP_SUCCESS'
export const SIGNUP_FAILURE = 'SIGNUP_FAILURE'

export const SEND_AUTH_REQUEST = 'SEND_AUTH_REQUEST'
export const AUTH_SUCCESS = 'AUTH_SUCCESS'
export const AUTH_FAILURE = 'AUTH_FAILURE'

export const SEND_LOGIN_TOKEN_REQUEST = 'SEND_LOGIN_TOKEN_REQUEST'
export const LOGIN_TOKEN_SUCCESS = 'LOGIN_TOKEN_SUCCESS'
export const LOGIN_TOKEN_FAILURE = 'LOGIN__TOKEN_FAILURE'

export const sendAuthRequest = data => ({
    type: SEND_AUTH_REQUEST,
    token: data
})

export const sendLoginTokenRequest = data => ({
    type: SEND_LOGIN_TOKEN_REQUEST,
    data
})

export const sendSignUpRequest = data => ({
    type: SEND_SINGUP_REQUEST,
    data
})

