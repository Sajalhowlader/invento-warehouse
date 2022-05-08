import React, { useState } from 'react';
import { useSendPasswordResetEmail, useSignInWithGoogle } from 'react-firebase-hooks/auth';
import { useSignInWithEmailAndPassword } from 'react-firebase-hooks/auth';
import { useLocation, useNavigate } from 'react-router-dom';
import bgImg from '../../../images/bg.svg'
import userImg from '../../../images/avatar.svg'
import googleImg from '../../../images/google3.png'
import { FaKey, FaMailBulk, } from 'react-icons/fa';
import auth from '../../../firebase.init';
import { toast } from 'react-toastify';
const SingIn = () => {
    const location = useLocation()
    const from = location.state?.from?.pathname || "/";
    const navigate = useNavigate()
    const handleSingUp = () => {
        navigate("/singUp")
    }
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [sendPasswordResetEmail] = useSendPasswordResetEmail(auth);
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
        setPassword(e.target.value)
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        signInWithEmailAndPassword(email, password)
    }

    const handleGoogle = () => {
        signInWithGoogle()
    }
    const resetPassword = async () => {
        if (email) {
            await sendPasswordResetEmail(email);
            toast('Sent email');
        } else {
            toast('enter your email address')
        }

    }
    if (user || googleUser) {
        navigate(from, { replace: true });
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

                        <p>New to Invento Werehouse?<strong className='strong' onClick={handleSingUp}>Register Now</strong></p>

                        <p>Forget Password?<strong className='strong' onClick={resetPassword}>Reset</strong></p>

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