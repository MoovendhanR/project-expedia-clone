import React from "react";
import {Route,Routes} from "react-router-dom"
import HomePage from "../Pages/Home-MainPage";
import HotelsDetails from "../Pages/HotelsDetails";
import HotelsDetailsViews from "../Pages/HotelsDetailsViews";
import Maintainance from "../Pages/Maintainance";
import PastTrips from "../Pages/PastTrips";
import SignIn from "../Pages/SignIn";
import SignUp from "../Pages/SignUp";
import UserProfile from "../Pages/UserProfile";

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
            <Route path="/support" element={<Maintainance/>}/>
            <Route path="/feedback" element={<Maintainance/>}/>
            <Route path="/english" element={<Maintainance/>}/>
            <Route path="/points" element={<Maintainance/>}/>



        </Routes>
    )

    
}
export default AllRoutes;