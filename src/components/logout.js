import React from 'react';
import Home from './homeComponent';
import firebase from './Firebase/firebase'
function Logout()
{
    firebase.auth().signOut();
        return(
            <div>
            <Home/>
    </div>
        );
    }


export default Logout;