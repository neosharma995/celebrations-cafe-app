import { Route, createBrowserRouter, createRoutesFromChildren } from "react-router-dom";
import NavbarLayout from "../layouts/header/NavbarLayout";
import Home from "../pages/home/Home";
import Notifications from "../pages/notification/Notifications";
import Profile from "../pages/profile/Profile";
import Menu from "../pages/menu/Menu";

export const router=createBrowserRouter(
    createRoutesFromChildren(
        <Route path='/' element={<NavbarLayout scroll={200}/>}>
            <Route index element={<Home/>}/>
            <Route path='notification' element={<Notifications/>}/>
            <Route path='menu' element={<Menu/>}/>
            <Route path='profile' element={<Profile/>}/>
        </Route>
    )
)