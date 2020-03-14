import { all, put, takeLatest } from 'redux-saga/effects'
import {
  SEND_SINGUP_REQUEST, 
  SIGNUP_SUCCESS, 
  SIGNUP_FAILURE, 
  AUTH_SUCCESS, 
  AUTH_FAILURE, 
  SEND_AUTH_REQUEST, 
  LOGIN_TOKEN_SUCCESS, 
  LOGIN_TOKEN_FAILURE, 
  SEND_LOGIN_TOKEN_REQUEST
} from '../actions'

import Api from '../api/index'

async function fetchAsync(func, params) {
  const response = await func(params);
  if (response.ok) {
      return await response.json();
  }
  throw new Error("Unexpected error!!!");
}

function* signupRequest(action) {
  try {
       const data = yield fetchAsync(Api.signupUser, action.data);
       yield put({type: SIGNUP_SUCCESS, data: data});
    } catch (e) {
       yield put({type: SIGNUP_FAILURE, message: e.message});
    }
}

function* signupRequestWatcher() {
  yield takeLatest(SEND_SINGUP_REQUEST, signupRequest)
}

function* authRequest(action) {
    const {token} = action;
    try {
      const response = yield fetchAsync(Api.checkAuth, token); 

      //=======just to make check of tokens in order to show different possible token scenarios
      let tokenFound = false;
      let tokenExpired = false;
      response.data.map((item) => {
        if(item.token===token) {
          tokenFound = true;
          if(item.expiry === 1) 
          return tokenExpired = true;
        }
        return null;
      })

      if(tokenExpired)
        yield put({type: AUTH_FAILURE, message: 'Token has expired'});
      if(!tokenFound)
        yield put({type: AUTH_FAILURE, message: 'Wrong token'});
      if(tokenFound && !tokenExpired)
        yield put({type: AUTH_SUCCESS, data: response.data})

      //============  
    } catch (e) {
      yield put({type: AUTH_FAILURE, message: e.message});
    }
 }

function* authRequestWatcher() {
  yield takeLatest(SEND_AUTH_REQUEST, authRequest)
}

function* loginTokenRequest(action) {
  const {email, password} = action.data;
    if (email !== 'test@gmail.com' && password !== 'test') { // adding a little bit of drama without backend and DB
      return yield put({type: LOGIN_TOKEN_FAILURE, message: 'No such user in the database'});
    }
    try {
      const data = yield fetchAsync(Api.getUserToken, action);
      yield put({type: LOGIN_TOKEN_SUCCESS, data: data});
    } catch (e) {
      yield put({type: LOGIN_TOKEN_FAILURE, message: e.message});
    }
 }

function* loginTokenRequestWatcher() {
  yield takeLatest(SEND_LOGIN_TOKEN_REQUEST, loginTokenRequest)
}

export default function* appSaga() {
  yield all([
    loginTokenRequestWatcher(),
    authRequestWatcher(),
    signupRequestWatcher()
  ]);
}