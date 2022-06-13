import React from 'react';
import { Redirect, Route } from 'react-router-dom';
import { isLogin } from './Index';

function PubliceRote({component: Component, restricated=false , ...prashil}) {
    return (
        <Route {...prashil} render={props => (
            isLogin() && restricated ?
            <Redirect to ={"/"} />
            :
            <Component {...props} />
        )}
        
        />
    );
}

export default PubliceRote;