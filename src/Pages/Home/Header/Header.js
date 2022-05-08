import { signOut } from 'firebase/auth';
import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { NavLink, useNavigate } from 'react-router-dom';
import auth from '../../../firebase.init';


const Header = () => {
    const navigate = useNavigate()
    const handleSingIn = () => {
        navigate("/singIn")
    }
    const handleSingOut = () => {
        signOut(auth);
    };
    const [user] = useAuthState(auth)
    return (
        <nav className="navbar navbar-expand-lg nav-header">
            <div className="container">
                <NavLink to='/home' className="navbar-brand " ><h4 className='nav-title'>INVENTO</h4></NavLink>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav ms-auto mb-2 mb-lg-0 nav-menu">
                        <NavLink to="/home" aria-current="page" >HOME</NavLink>



                        {user && <NavLink to="/allItems" aria-current="page" >MANAGE ITEMS</NavLink>}

                        {user && <NavLink to="/addItems" aria-current="page" >ADD ITEMS</NavLink>}



                        <NavLink to="/blogs" aria-current="page" >BLOGS</NavLink>
                    </ul>

                    {user ?
                        <button className="btn btn-outline-success nav-button" type="submit" onClick={handleSingOut}>SING OUT</button>
                        :
                        <button className="btn btn-outline-success nav-button" type="submit" onClick={handleSingIn}>SING IN</button>
                    }

                </div>
            </div>
        </nav>
    );
};

export default Header;