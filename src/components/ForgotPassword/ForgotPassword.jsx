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



const ForgotPassword =(props)=>{
    document.title="Сбросить пароль";
    const form = useRef();
    const checkBtn = useRef();
    const [Email, setEmail] = useState("");
    const [loading, setLoading] = useState(false);
    const [message, setMessage] = useState("");

    const onChangeEmail= (e) => {
        const email = e.target.value;
        setEmail(email);
    };

    const handleLogin = (e) => {
        e.preventDefault();

        setMessage("");
        setLoading(true);

        form.current.validateAll();

        if (checkBtn.current.context._errors.length === 0) {
            AuthService.sendEmail(Email).then(
            (r)=> {
                props.history.push("/succesEmailSend");
                window.location.reload();
            },
            (error)=>{
                setLoading(false);
                setMessage(error + "\nПроверьте данные и попробуйте позже");

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
                            value={Email}
                            onChange={onChangeEmail}
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
                            <span>Сбросить пароль</span>
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
export default ForgotPassword;