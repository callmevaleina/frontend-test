import "./styles/App.css";
import {HashRouter, Routes, Route} from "react-router-dom";
import Login from "./pages/Login";
import ProtectedRoutes from "./components/ProtectedRoutes";
import Tasks from "./pages/Tasks";
import TaskDetail from "./pages/TaskDetail";


function App() {
  return (
    <HashRouter>
    <div className="App">
     <Routes>
      <Route path='/' element={<Login/>}/>
      <Route element={<ProtectedRoutes/>}>
        <Route path='/tasks' element={<Tasks/>}/>
        <Route path='/tasks/:id' element={<TaskDetail/>}/>
      </Route>
     </Routes>
    </div>
    </HashRouter>
  );
}

export default App;
