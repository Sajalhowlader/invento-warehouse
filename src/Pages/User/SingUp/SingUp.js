import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useUpdateProfile } from 'react-firebase-hooks/auth';
import bgImg from '../../../images/bg.svg'
import userImg from '../../../images/avatar.svg'
import { FaKey, FaMailBulk, FaUser } from 'react-icons/fa';
import { useCreateUserWithEmailAndPassword } from 'react-firebase-hooks/auth';
import auth from '../../../firebase.init';
import { sendEmailVerification } from 'firebase/auth';
import { toast } from 'react-toastify';
import Loading from '../../Lodaing/Loading';
const SingUp = () => {
    const navigate = useNavigate()
    const handleSingIn = () => {
        navigate('/singIn')
    }
    const [displayName, setDisplayName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [updateProfile] = useUpdateProfile(auth);
    const [
        createUserWithEmailAndPassword,
        user,
        loading,
        error,
    ] = useCreateUserWithEmailAndPassword(auth);

    // Update user name

    const userUpdate = async () => {
        await updateProfile({ displayName })
        toast('Updated profile');
    }

    const handleUserName = (e) => {
        setDisplayName(e.target.value)
    }
    const handleEmail = (e) => {
        setEmail(e.target.value)
    }
    const handlePassword = (e) => {
        setPassword(e.target.value)
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        createUserWithEmailAndPassword(email, password)

        sendEmailVerification(auth.currentUser)
            .then(() => {
                toast('Email verification send')
            })

        userUpdate()
    }

    if (user) {
        navigate('/singIn')
    }
    if (error) {
        toast(error)
    }
    if (loading) {
        return <Loading />
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

                        <span className='d-flex align-items-center user-input'> <FaUser className='me-2' />
                            <input onChange={handleUserName} className='' placeholder='User Name' type="text" name="user" required />
                        </span>

                        <span className='d-flex align-items-center user-input'> <FaMailBulk className='me-2' />
                            <input onChange={handleEmail} className='' placeholder='User Email' type="email" name="email" required />

                        </span>

                        <span className='d-flex align-items-center user-input '>
                            <FaKey className='me-2' />
                            <input onChange={handlePassword} className='' type="password" name="pass" placeholder='User Password' required />
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