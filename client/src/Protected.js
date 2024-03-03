import React, { useEffect } from 'react';
import { Navigate, Outlet } from 'react-router-dom'

function Protected() {
//    // let auth = {'token':false}
//     let auth =localStorage.getItem('login',true);
//     console.log(auth)
//     return (
//         auth.login ? <Outlet/> : <Navigate to='/login'/>
//       )
const loginStatus = JSON.parse(localStorage.getItem('login'));

    // If loginStatus is false or null, redirect to login page
    if (!loginStatus) {
        return <Navigate to='/login' />;
    }

    // If loginStatus is true, render the child routes
    return <Outlet />;
}

export default Protected;
