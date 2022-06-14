import React from 'react';
import { Redirect, Route } from 'react-router-dom';
import { isLogin } from '../Utils/index';

function PrivateRote({component : Component , ...prashil}) {
    return (
        <Route {...prashil} render ={props =>(
            isLogin()?
            <Component {...props} />
            :
            <Redirect to = {"/Auth"} />
        )}
        
        />
    );
}

export default PrivateRote;