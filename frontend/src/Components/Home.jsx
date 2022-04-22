import * as React from 'react';
import {BasicTable} from './Table';
import {useSelector} from 'react-redux';
import {Login} from './Login';


export const Home = () =>{
    const isLoggedIn = useSelector((store) => store.reducer.isLoggedIn)
    return (
        <>           
           {isLoggedIn ? <BasicTable /> : <Login />}
        </>
    )
}