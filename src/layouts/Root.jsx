import { Outlet } from "react-router-dom";
import Footer from "../pages/Footer/Footer";


const Root = () => {
    return (
        <div >
            <div className="max-w-screen-xl mx-auto font-popins mb-7">
            <Outlet></Outlet>
            </div>
           
           <Footer></Footer>
        </div>
    );
};

export default Root;