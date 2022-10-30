import React from "react";
import axios from "axios";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import ReactPaginate from "react-paginate";
import NavBar from "../components/NavBar";
import "../styles/tasks.css";

const Tasks = () => {
  const [tasks, setTasks] = useState([]);
  const [tasksFiltered, setTasksFiltered] = useState([]);
  const [taskSearch, setTaskSearch] = useState("");

  useEffect(() => {
    axios
      .get("https://jsonplaceholder.typicode.com/todos")
      .then((res) => {
        setTasks(res.data);
        setTasksFiltered(res.data);
      })
      .catch((error) => console.log(error.response));
  }, []);

  useEffect(() => {
    if (taskSearch) {
      setTasksFiltered(tasks.filter((task) => task.title.includes(taskSearch)));
    }
  }, [taskSearch]);

  const navigate = useNavigate();

  const [page, setPage] = useState(1);
  const tasksPerPage = 12;
  const lastTaskIndex = page * tasksPerPage;
  const firstTaskIndex = lastTaskIndex - tasksPerPage;
  const tasksPaginated = tasksFiltered.slice(firstTaskIndex, lastTaskIndex);
  const totalPages = Math.ceil(tasksFiltered.length / tasksPerPage);

  const changePage = ({ selected }) => {
    setPage(selected + 1);
  };

  return (
    <div className="tasks-container">
      <NavBar />
      <div className="hero-container">
        <div className="hero-content">
          <h1>Team Tasks</h1>
          <p>All completed and incomplete tasks</p>
          <form className="task-searcher">
            <input
              value={taskSearch}
              type="text"
              placeholder="Search by task title"
              onChange={(e) => setTaskSearch(e.target.value)}
            />
            <i className="fa-solid fa-magnifying-glass"></i>
          </form>
        </div>
      </div>

      <ul className="tasks-list">
        {tasksPaginated.map((task) => (
          <li className="tasks" key={task.id} onClick={() => navigate(`/tasks/${task.id}`)}>
            <p className="task-number">
              Task Number: <b>{task.id}</b> 
            </p>
            <p className="task-title"><b>{task.title}</b></p>
          </li>
        ))}
      </ul>
      <ReactPaginate
        previousLabel={"<"}
        nextLabel={">"}
        pageCount={totalPages}
        onPageChange={changePage}
        containerClassName={"paginationBttns"}
        previousLinkClassName={"previousBttn"}
        nextLinkClassName={"nextBttn"}
        disabledClassName={"paginationDisabled"}
        activeClassName={"paginationActive"}
      />
    </div>
  );
};

export default Tasks;
