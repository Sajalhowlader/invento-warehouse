import React, { useState } from 'react';
import { useSignInWithGoogle } from 'react-firebase-hooks/auth';
import { useSignInWithEmailAndPassword } from 'react-firebase-hooks/auth';
import { useNavigate } from 'react-router-dom';
import bgImg from '../../../images/bg.svg'
import userImg from '../../../images/avatar.svg'
import googleImg from '../../../images/google3.png'
import { FaKey, FaMailBulk, } from 'react-icons/fa';
import auth from '../../../firebase.init';
const SingIn = () => {
    const navigate = useNavigate()
    const handleSingUp = () => {
        navigate("/singUp")
    }
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [
        signInWithEmailAndPassword,
        user,
        loading,
        error,
    ] = useSignInWithEmailAndPassword(auth);
    const [signInWithGoogle, googleUser, googleLoading, googleError] = useSignInWithGoogle(auth);
    const handleEmail = (e) => {
        setEmail(e.target.value)
    }
    const handlePassword = (e) => {
        setEmail(e.target.value)
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        signInWithEmailAndPassword(email, password)
    }

    const handleGoogle = () => {
        signInWithGoogle()
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
                    <form onSubmit={handleSubmit}>
                        <span className='d-flex align-items-center user-input'> <FaMailBulk className='me-2' />
                            <input onChange={handleEmail} className='' placeholder='User Email' type="email" name="" />
                        </span>

                        <span className='d-flex align-items-center user-input '>
                            <FaKey className='me-2' />
                            <input onChange={handlePassword} className='' type="password" name="" placeholder='User Password' />
                        </span>

                        <p>New to C&C Werehouse?<strong className='strong' onClick={handleSingUp}>Register Now</strong></p>
                        <input className='submit-type' type="submit" value="Sing In" />
                    </form>
                    <div className="or-container">
                        <div></div>
                        <strong>or</strong>
                        <div></div>
                    </div>
                    <button onClick={handleGoogle} className='google-btn'> <img src={googleImg} alt="" /> Continue With</button>
                </div>

            </div>
        </div>
    );
};

export default SingIn;