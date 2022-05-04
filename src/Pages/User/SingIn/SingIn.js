import React from 'react';
import { useNavigate } from 'react-router-dom';
import bgImg from '../../../images/bg.svg'
import userImg from '../../../images/avatar.svg'
const SingIn = () => {
    const navigate = useNavigate()
    const handleSingUp = () => {
        navigate("/singUp")
    }
    return (
        <div>
            <div className="divider-container">
                <div className="divider-img">
                    <img src={bgImg} alt="" />
                </div>
                <div className="divider-info">
                    <img src={userImg} alt="" className="user-img" />
                    <h2>Welcome</h2>
                    <input type="email" name="" />
                    <input type="password" name="" />
                    <p>New to C&A Werehouse?<strong onClick={handleSingUp}>Register Now</strong></p>
                </div>
            </div>
        </div>
    );
};

export default SingIn;