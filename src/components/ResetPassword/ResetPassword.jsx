import React, { useState, useRef } from "react";
import Form from "react-validation/build/form";
import Input from "react-validation/build/input";
import CheckButton from "react-validation/build/button";
import AuthService from "../../services/authservice";

const required = (value) => {
    if (!value) {
        return (
            <div className="alert alert-danger" role="alert">
                Это поле обязательно!
            </div>
        );
    }
};




const ResetPassword = (props)=>{
    let url = document.location.href;
    let code = url.substring(28,url.length);


 
    return <h1>
     <h2> EMAIL {props.match.params.email} </h2>
    </h1>

}
export default ResetPassword;