import { Outlet, useLocation } from "react-router-dom";
import Footer from "../Pages/CommonPages/Footer/Footer";
import Navbar from "../Pages/CommonPages/Navbar/Navbar";

const MainLayout = () => {
    const location = useLocation();
    const noHeaderFooter = location.pathname.includes('login') || location.pathname.includes('signup')
    return (
        <div className="">
            { noHeaderFooter || <Navbar></Navbar>}
            <Outlet></Outlet>
            { noHeaderFooter || <Footer></Footer>}
        </div>
    );
};

export default MainLayout;