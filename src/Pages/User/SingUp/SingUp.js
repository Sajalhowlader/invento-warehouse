import React from 'react';
import { useNavigate } from 'react-router-dom';
import bgImg from '../../../images/bg.svg'
import userImg from '../../../images/avatar.svg'
import { FaKey, FaMailBulk, FaUser } from 'react-icons/fa';
const SingUp = () => {
    const navigate = useNavigate()
    const handleSingIn = () => {
        navigate('/singIn')
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
                        <span className='d-flex align-items-center user-input'> <FaUser className='me-2' />
                            <input className='' placeholder='User Name' type="text" name="" />
                        </span>
                        <span className='d-flex align-items-center user-input'> <FaMailBulk className='me-2' />
                            <input className='' placeholder='User Email' type="text" name="" />
                        </span>
                        <span className='d-flex align-items-center user-input '>
                            <FaKey className='me-2' />
                            <input className='' type="password" name="" placeholder='User Password' />
                        </span>
                        <p>Already have an account?<strong className='strong' onClick={handleSingIn}>Log In</strong></p>
                        <input className='submit-type' type="submit" value="Sing Up" />
                    </form>

                </div>

            </div>
        </div>
    );
};

export default SingUp;