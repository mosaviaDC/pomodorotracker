import React, { useState, useRef } from "react";
import Form from "react-validation/build/form";
import Input from "react-validation/build/input";
import CheckButton from "react-validation/build/button";
import AuthService from "../../services/authservice";
import queryString from 'query-string';

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
    document.title="Установить новый пароль";
    const form = useRef();
    const checkBtn = useRef();
    const [password, setPassword] = useState("");
    const [code, setCode] = useState("");
    const [confirmPassword,setConfirmPassword] = useState("");
    const [loading, setLoading] = useState(false);
    const [message, setMessage] = useState("");

   
  




    const onPasswordChange=(e)=>{
   
        setPassword(e.target.value);
    }

    const onConfirmPasswordChange=(e)=>{
        setConfirmPassword(e.target.value);
    }


    const showPass = (e)=>{
        let show = e.target;
        show.style.cssText="display:none";
        let hide = document.getElementById('hidePass');
        hide.style.cssText="display:inline";
        let t = document.getElementById("password");
        t.classList.add("view");
        t.setAttribute('type','text');
    }
    const hidePass =(e)=>{
        let hide = e.target;
        hide.style.cssText="display:none";
        let show = document.getElementById('showPass');
        show.style.cssText="display:inline";
        let t = document.getElementById("password");
        t.classList.add("view");
        t.setAttribute('type','password');

    }

    const showPassCon = (e)=>{
        let show = e.target;
        show.style.cssText="display:none";
        let hide = document.getElementById('hidePassCon');
        hide.style.cssText="display:inline";
        let t = document.getElementById("passwordCon");
        t.classList.add("view");
        t.setAttribute('type','text');

    }

    const onCode =(e)=>{
        setCode(e.target.value);
    }


    const hidePassCon =(e)=>{
        let hide = e.target;
        hide.style.cssText="display:none";
        let show = document.getElementById('showPassCon');
        show.style.cssText="display:inline";
        let t = document.getElementById("passwordCon");
        t.classList.add("view");
        t.setAttribute('type','password');

    }







    const handleLogin = (e) => {
        e.preventDefault();

        setMessage("");
        setLoading(true);


         if (queryString.parse(props.location.search).code !== code) {
            setMessage("Коды не совпадают");
            setLoading(false);
        }

        if (password !== confirmPassword){
        setMessage("Пароли должны совпадать");
        setLoading(false);
        }
        else {




        form.current.validateAll();

        if (checkBtn.current.context._errors.length === 0) {
            let params = queryString.parse(props.location.search);

            

            

          
            AuthService.resetPassword(params.email,password,code).then(()=>{
                props.history.push("/login");
                window.location.reload();
            },
            (error)=>{
                    setLoading(false);
                    console.log(error);
                    setMessage(error + "\nПроверьте данные и попробуйте позже");
            });
        }
        else {
            setLoading(false);
        }
    }

    }













    return (
        <div className="col-md-12">

            <div className="card card-container">
                <h4>{queryString.parse(props.location.search).email}</h4>
                <h4>{queryString.parse(props.location.search).code}</h4>
                <Form onSubmit={handleLogin} ref={form}>
                
                <div className="form-group">
                        <label htmlFor="password">Пароль</label>
                        
                        <Input
                            type="password"
                            className="form-control"
                            id="password"
                            name="password"
                            value={password}
                            onChange={onPasswordChange}
                            validations={[required]}
                          
                        /> 
                        
                        <label id ="showPass" onClick={showPass}>Показать пароль</label>
                        <label id="hidePass" onClick={hidePass}>Скрыть пароль</label>
                        
            
                    </div>
                    <div className="form-group">
                        <label htmlFor="code">code</label>
                        
                        <Input
                            type="text"
                            className="form-control"
                            
                            name="code"
                            value={code}
                            onChange={onCode}
                            validations={[required]}
                          
                        /> 
                        
                        <label id ="showPass" onClick={showPass}>Показать пароль</label>
                        <label id="hidePass" onClick={hidePass}>Скрыть пароль</label>
                        
            
                    </div>






                    <div className="form-group">
                        <label htmlFor="passwordConfirm">Пароль еще раз</label>
                        <Input
                            type="password"
                            id="passwordCon"
                            className="form-control"
                            name="passwordConfirm"
                            value={confirmPassword}
                            onChange={onConfirmPasswordChange}
                            validations={[required]}
                        />

                        <label id ="showPassCon" onClick={showPassCon}>Показать пароль</label>
                        <label id="hidePassCon" onClick={hidePassCon}>Скрыть пароль</label>


                    </div>











                    <div className="form-group">
                        <button className="btn btn-primary" disabled={loading}>
                            {loading && (
                                <div className="loading-container">
                                    <div className="yellow"></div>
                                    <div className="red"></div>
                                    <div className="blue"></div>
                                    <div className="violet"></div>
                                </div>   
                            )}
                            <span>Установить новый пароль</span>
                        </button>
                    </div>

                    {message && (
                        <div className="form-group">
                            <div className="alert alert-danger" role="alert">
                                {message}
                            </div>
                        </div>
                    )}
                    <CheckButton style={{ display: "none" }} ref={checkBtn} />
                </Form>
            </div>
        </div>
    );



}
export default ResetPassword;