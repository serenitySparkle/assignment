const API_BASE_ADDRESS = 'http://www.mocky.io/v2'

export default class Api {
    
    static checkAuth(token) {
        const params = {
            headers: {
                'Authorization' : 'Bearer' + token, 
                'Content-Type': 'application/json',
            }
        }
        return callFetch("/5e6b914e2d000063008e925b", 'POST', params)
    }
    static signupUser() {
        const params = {
            headers: {
                'Content-Type': 'application/json',
            }
        }
        return callFetch("/5e6b914e2d000063008e925b", 'POST', params)
    }
    static getUserToken() {
        const params = {
            headers: {
                'Content-Type': 'application/json',
            }
        }
        return callFetch("/5e6ba5822d00007c008e9462", 'POST', params)
    }
    
}

function callFetch(endpoint, method, params) {
    const uri = API_BASE_ADDRESS + endpoint;
    return fetch(uri, {
        method: method,
        params
    })
}

