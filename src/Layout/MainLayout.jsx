import { Outlet } from "react-router-dom";
import Footer from "../Pages/CommonPages/Footer/Footer";
import Navbar from "../Pages/CommonPages/Navbar/Navbar";

const MainLayout = () => {
    return (
        <div >
            <Navbar></Navbar>
            <Outlet></Outlet>
            <Footer></Footer>
        </div>
    );
};

export default MainLayout;