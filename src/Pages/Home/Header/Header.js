import React from 'react';
import { NavLink, useNavigate } from 'react-router-dom';


const Header = () => {
    const navigate = useNavigate()
    const handleSingIn = () => {
        navigate("/singIn")
    }
    return (
        <nav className="navbar navbar-expand-lg nav-header">
            <div className="container">
                <NavLink to='/home' className="navbar-brand " ><h4 className='nav-title'>C<span>&</span>C WAREHOUSE</h4></NavLink>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav ms-auto mb-2 mb-lg-0 nav-menu">
                        <NavLink to="/home" aria-current="page" >HOME</NavLink>
                        <NavLink to="/allItems" aria-current="page" >ALL ITEM</NavLink>
                        <NavLink to="/home" aria-current="page" >HOME</NavLink>
                    </ul>

                    <button className="btn btn-outline-success nav-button" type="submit" onClick={handleSingIn}>SING IN</button>

                </div>
            </div>
        </nav>
    );
};

export default Header;