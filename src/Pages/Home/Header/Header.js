import React from 'react';
import { NavLink } from 'react-router-dom';


const Header = () => {

    return (
        <nav className="navbar navbar-expand-lg nav-header">
            <div className="container">
                <NavLink to='/home' className="navbar-brand " ><h2 className='nav-title'>Cash<span>&</span>Carry</h2></NavLink>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav ms-auto mb-2 mb-lg-0 nav-menu">
                        <NavLink to="/home" aria-current="page" >HOME</NavLink>
                        <NavLink to="/home" aria-current="page" >HOME</NavLink>
                        <NavLink to="/home" aria-current="page" >HOME</NavLink>
                    </ul>

                    <button className="btn btn-outline-success nav-button" type="submit">Search</button>

                </div>
            </div>
        </nav>
    );
};

export default Header;