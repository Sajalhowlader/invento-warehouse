import React from 'react';
import { useNavigate } from 'react-router-dom';
import bgImg from '../../../images/bg.svg'
import userImg from '../../../images/avatar.svg'
import googleImg from '../../../images/google3.png'
import { FaKey, FaMailBulk, } from 'react-icons/fa';
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
                    <form>
                        <span className='d-flex align-items-center user-input'> <FaMailBulk className='me-2' />
                            <input className='' placeholder='User Email' type="email" name="" />
                        </span>
                        <span className='d-flex align-items-center user-input '>
                            <FaKey className='me-2' />
                            <input className='' type="password" name="" placeholder='User Password' />
                        </span>
                        <p>New to C&A Werehouse?<strong className='strong' onClick={handleSingUp}>Register Now</strong></p>
                        <input className='submit-type' type="submit" value="Sing In" />
                    </form>
                    <div className="or-container">
                        <div></div>
                        <strong>or</strong>
                        <div></div>
                    </div>
                    <button className='google-btn'> <img src={googleImg} alt="" /> Continue With</button>
                </div>

            </div>
        </div>
    );
};

export default SingIn;