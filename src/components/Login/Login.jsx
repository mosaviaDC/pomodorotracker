import React, { useState, useRef } from "react";
import Form from "react-validation/build/form";
import Input from "react-validation/build/input";
import CheckButton from "react-validation/build/button";
import './Login.scss';
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

const Login = (props) => {
    document.title = "Войти"
    const form = useRef();
    const checkBtn = useRef();

    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [loading, setLoading] = useState(false);
    const [message, setMessage] = useState("");

    const onChangeUsername = (e) => {
        const username = e.target.value;
        setUsername(username);
    };

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
            AuthService.login(username, password).then(
                (r) => {
                    props.history.push("/tasks");
                    window.location.reload();
                },
                (error) => {
                    console.log(error);
                    let resMessage = ''
                    if (error.response.status === 404) {
                        resMessage = "Ошибка 404: e-mail не найден";
                    }
                    else if (error.response.status === 500) {
                        resMessage = "Ошибка 500: проверьте интернет";
                    }
                    else if (error.response.status === 400) {
                        resMessage = "Ошибка 400: неверный пароль";
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
                        <label htmlFor="password">Пароль</label>
                        <Input
                            type="password"
                            className="form-control"
                            name="password"
                            value={password}
                            onChange={onChangePassword}
                            validations={[required]}
                        />
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
                            <span>Полетели</span>
                        </button>
                    </div>

                    {message && (
                        <div className="form-group">
                            <div className="alert alert-danger" role="alert">
                                {message}
                                <p><a className="forgotlink" href='/forgot'>Сбросить пароль</a>
                                </p>
                            </div>
                        </div>
                    )}
                    <CheckButton style={{ display: "none" }} ref={checkBtn} />
                </Form>
            </div>
        </div>
    );
};

export default Login;
