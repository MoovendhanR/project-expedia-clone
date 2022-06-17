import React from "react";
import {Route,Routes} from "react-router-dom"
import FavouriteItems from "../Pages/FavouriteItems";
import HomePage from "../Pages/Home-MainPage";
import HotelsDetails from "../Pages/HotelsDetails";
import HotelsDetailsViews from "../Pages/HotelsDetailsViews";
import Maintainance from "../Pages/Maintainance";
import PastTrips from "../Pages/PastTrips";
import PaymentPage from "../Pages/PaymentPage";
import SignIn from "../Pages/SignIn";
import SignUp from "../Pages/SignUp";
import UserProfile from "../Pages/UserProfile";
import NotFound from "./NotFound";

const AllRoutes=()=>{
    return(
        <Routes>
            <Route path="/" element={<HomePage/>}/>
            <Route path="/signin" element={<SignIn/>}/>
            <Route path="/signup" element={<SignUp/>}/>
            <Route path="/stays" element={<HotelsDetails/>}/>
            <Route path="/stays/:cityName" element={<HotelsDetails/>}/>
            <Route path="/detailsview/:id" element={<HotelsDetailsViews/>}/>
            <Route path="/trips" element={<PastTrips/>}/>
            <Route path="/useraccount" element={<UserProfile/>}/>
            <Route path="/favourite" element={<FavouriteItems/>}/>
            <Route path="/payment/:id" element={<PaymentPage/>}/>
            <Route path="/support" element={<Maintainance/>}/>
            <Route path="/feedback" element={<Maintainance/>}/>
            <Route path="/english" element={<Maintainance/>}/>
            <Route path="/points" element={<Maintainance/>}/>
            <Route path="/*" element={<NotFound/>}/>


        </Routes>
    )

    
}
export default AllRoutes;