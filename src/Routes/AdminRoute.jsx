import { Navigate, useLocation } from "react-router-dom";
import useAdmin from "../Hooks/useAdmin";
import useAuth from "../Hooks/useAuth";


const AdminRoute = ({children}) => {
    const [isAdmin, isAdminLoading] = useAdmin();
    const {user, loading} = useAuth();
    const location = useLocation();

    if(loading || isAdminLoading) {
        return <span className="loading loading-ring loading-lg"></span>
    }
    if(user && isAdmin) {
        return children;
    }
    return <Navigate to='/' state={{from: location}} replace></Navigate>
};

export default AdminRoute;

