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

const Register = (props) => {
    document.title = "Регистрация"
    const form = useRef();
    const checkBtn = useRef();

    const [username, setUsername] = useState("");
    const [firstName, setFirstName] = useState("");
    const [password, setPassword] = useState("");
    const [loading, setLoading] = useState(false);
    const [message, setMessage] = useState("");

    const onChangeUsername = (e) => {
        const username = e.target.value;
        setUsername(username);
    };
    const onChangeFirstName = (e) => {
        const firstName = e.target.value;
        setFirstName(firstName);
    }

    const onChangePassword = (e) => {
        const password = e.target.value;
        setPassword(password);
    };

    const handleLogin = (e) => {
        e.preventDefault();

        setMessage("");
        setLoading(true);

        form.current.validateAll();

        if (checkBtn.current.context._errors.length === 0) {
            AuthService.register(username,firstName,password).then(
                () => {

                    props.history.push("/tasks");
                    window.location.reload();
        
                },
                (error) => {
                    let resMessage = ''
                    if (error.response.status === 409) {
                        resMessage = "Ошибка 409: такой e-mail уже найден";
                    }
                    else if (error.response.status === 500) {
                        resMessage = "Ошибка 500: проверьте интернет";
                    }
                    else if (error.response.status === 400) {
                        resMessage = "Ошибка 400: форма заполнена неверно";
                    }

                    else resMessage = error.toString();
                    setLoading(false);
                    setMessage(resMessage);
                }
            );
        } else {
            setLoading(false);
        }
    };
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

    return (
        <div className="col-md-12">
            <div className="card card-container">


                <Form onSubmit={handleLogin} ref={form}>
                    <div className="form-group">
                        <label htmlFor="username">Email</label>
                        <Input
                            type="text"
                            className="form-control"
                            name="username"
                            value={username}
                            onChange={onChangeUsername}
                            validations={[required]}
                        />
                    </div>
                    <div className="form-group">
                        <label htmlFor="username">Имя</label>
                        <Input
                            type="text"
                            className="form-control"
                            name="username"
                            value={firstName}
                            onChange={onChangeFirstName}
                            validations={[required]}
                        />
                    </div>

                    <div className="form-group">
                        <label htmlFor="password">Пароль</label>
                        <Input
                            type="password"
                            id="password"
                            className="form-control"
                            name="password"
                            value={password}
                            onChange={onChangePassword}
                            validations={[required]}
                        />
                         <label id ="showPass" onClick={showPass}>Показать пароль</label>
                        <label id="hidePass" onClick={hidePass}>Скрыть пароль</label>
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
                            <span>Регистрация</span>
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
};

export default Register;
