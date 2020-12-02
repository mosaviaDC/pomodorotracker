import React, { useState,useRef} from 'react';
import Form from "react-validation/build/form";
import Input from "react-validation/build/input";
import CheckButton from "react-validation/build/button";
import TaskService from "../../services/tasksservice"
import './AddTaskForm.scss';

const required = (value) => {
    if (!value) {
        return (
            <div className="alert alert-danger" role="alert">
                Это поле обязательно!
            </div>
        );
    }
};

const AddTaskForm = () => {

    const form = useRef();
    const checkBtn = useRef();
    const [taskName, setTaskName] = useState('');
    const [taskTime, setTaskTime] = useState(25);
    const [taskDescription, setTaskDescription] = useState('');
    const [loading, setLoading] = useState(false);
    const [message, setMessage] = useState("");

    const onChangeTaskName=((e) => {
        setTaskName(e.target.value);
    });

    const onChangeTaskTime =((e) => {
        setTaskTime(e.target.value);
    });

    const onChangeTaskDescription = ((e) => {
        setTaskDescription(e.target.value);
    });
       
    const handleLogin = (e) => {
        e.preventDefault();

      

        form.current.validateAll();

        if (checkBtn.current.context._errors.length === 0) {
            let testmessage = "";
            setLoading(true);
            TaskService.AddTask(taskName, taskTime, taskDescription).then(
                () => {
                    window.location.reload();
                    setLoading(false);
                },
                (error) => {
                    console.debug(error.response);
                    testmessage = error.toString();
                    setLoading(false);
                });

            setMessage(testmessage);
        }
        else {
            setLoading(false);
        }
    };



    const onCloseButtonClick = (e) => {
    document.getElementById('addForm').style.cssText = 'display:none';
    let addbtns = [null];
    addbtns = Array.from(document.getElementsByClassName('btn-lg'));
    addbtns.forEach(i => i.style.cssText = "display:inline-flex");

    document.getElementById('UserTasks').style.cssText = "display:block";     // Скрываем список задач

    }





    return <div id="addForm">
        <i className="fas fa-times fa-lg closeButton " onClick={onCloseButtonClick}></i>  

        <Form onSubmit={handleLogin} ref={form}>

            <div className="form-group">
                <label htmlFor="taskName">Название</label>
                <Input
                    type="text"
                    className="form-control"
                    name="taskName"
                    value={taskName}
                    placeholder="Улучшить этот мир"
                    onChange={onChangeTaskName}
                    validations={[required]}
                />
            </div>

            <div className="form-group">
                <label htmlFor="taskTime">Примерное количество минут на задачу</label>
                <Input
                    type="text"
                    className="form-control"
                    name="taskTime"
                    value={taskTime}
                    onChange={onChangeTaskTime}
                    validations={[required]}
                />
            </div>

            <div className="form-group">
                <label htmlFor="taskDescription">Описание</label>
                <Input
                    type="text"
                    className="form-control"
                    placeholder="необязательно"
                    name="taskDescription"
                    value={taskDescription}
                    onChange={onChangeTaskDescription}
                />
            </div>

            <div className="form-group">
                <button className="btn btn-primary" disabled={loading}>
                  
                    <span>Добавить задачу</span>
                </button>
                {loading && (
                    <div className="loading-container">
                        <div className="yellow"></div>
                        <div className="red"></div>
                        <div className="blue"></div>
                        <div className="violet"></div>
                    </div>
                )}
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


}

export default AddTaskForm;