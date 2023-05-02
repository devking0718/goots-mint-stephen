import { Outlet } from "react-router-dom";
import Footer from "./footer";
import Header from "./header";

export function Layout() {
    return (
        <>
            <Header/>
            <Outlet/>
            <Footer/>
        </>
    )
}