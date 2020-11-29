﻿import axios from "axios";

const url = "/account"


const register = (email, firstName, password) => {
    let lastName ='не используется'
    return axios.post(url + '/signup', {
        email,
        password,
        firstName,
        lastName
    }
    ).then((respone) => {
        if (respone.data.token) {
            localStorage.setItem('user', JSON.stringify(respone.data));
        }

        return respone.data;


       
    });
    
};

const login = (email, password) => {


    return axios.post(url + '/signin', {
        email,
        password
    }
    ).then((respone) => {
        if (respone.data.token) {
            localStorage.setItem('user', JSON.stringify(respone.data));
        }


        return respone.data;
    })
    

};

const logout = () => {
    localStorage.removeItem('user');
};

const getCurrentUser = () => {
    return JSON.parse(localStorage.getItem('user'));
};

const authToken = ()=>{
    const user = JSON.parse(localStorage.getItem('user'));

    if (user && user.accesToken) {
        return (`Authoriztion: 'Bearer ' + ${user.accesToken}`);
    }
    else return {};
}

export default {
    login,
    register,
    logout,
    getCurrentUser
}
