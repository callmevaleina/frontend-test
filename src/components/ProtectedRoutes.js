import { Navigate, Outlet } from 'react-router-dom';

const ProtectedRoutes = () => {
	
    if(sessionStorage.getItem("username")){
        return <Outlet />
    } else { 
        return <Navigate to='/' />
    }                     
}
export default ProtectedRoutes;