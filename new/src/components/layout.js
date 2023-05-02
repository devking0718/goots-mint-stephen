import { Outlet } from "react-router-dom";
import Footer from "./footer";
import Header from "./header";

export function Layout() {
    return(
        <div className="Layout">
            <Header/>
            <Outlet/>
            <Footer/>
        </div>
    )
}