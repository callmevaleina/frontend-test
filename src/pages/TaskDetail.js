import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import axios from "axios";
import NavBar from "../components/NavBar";
import "../styles/taskDetail.css"

const TaskDetail = () => {

    const navigate = useNavigate();
    const {id} = useParams();
    const [taskDetail, setTaskDetail] = useState([]);

    useEffect(()=>{
        axios.get(`https://jsonplaceholder.typicode.com/todos/${id}`)
        .then(res => setTaskDetail(res.data))
    }, [])

    const comeBack = () => {
        navigate("/tasks")
    }

    return (
        <div>
            <NavBar/>
            <i className="fa-solid fa-arrow-left" onClick={()=>comeBack()}></i><span className="back">Back to tasks</span>
            <h1 className="task-detail">Task Detail</h1>
            <ul className="task-detail-container">
                <li className="task-member"><u>Team Member Number:</u> <b> {taskDetail.userId}</b></li>
                <li className="task-title-detail"><u>Task Title:</u> <span> {taskDetail.title}</span></li>
                <li className="task-status">Is it completed? <span> {taskDetail.completed ? <i className="fa-solid fa-check" style={{color: "#54B435"}}></i> : <i className="fa-solid fa-xmark" style={{color: "#E14D2A"}}></i>}</span></li>
            </ul>
        
        </div>
    );
};

export default TaskDetail;