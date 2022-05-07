import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Navigate, useLocation } from 'react-router-dom';
import auth from '../../firebase.init';

const Protected = ({ children }) => {
    const [user, loading] = useAuthState(auth);
    let location = useLocation();


    if (loading) {
        return <p>loading...</p>
    }

    if (!user) {

        return <Navigate to="/singIn" state={{ from: location }} replace />;
    }


    return children;
}
export default Protected;