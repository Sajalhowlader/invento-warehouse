import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useSendEmailVerification, useUpdateProfile } from 'react-firebase-hooks/auth';
import bgImg from '../../../images/bg.svg'
import userImg from '../../../images/avatar.svg'
import { FaKey, FaMailBulk, FaUser } from 'react-icons/fa';
import { useCreateUserWithEmailAndPassword } from 'react-firebase-hooks/auth';
import auth from '../../../firebase.init';
import { toast } from 'react-toastify';
import Loading from '../../Lodaing/Loading';
const SingUp = () => {
    const navigate = useNavigate()
    const handleSingIn = () => {
        navigate('/singIn')
    }

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [updateProfile, updating, usererror] = useUpdateProfile(auth);

    const [
        createUserWithEmailAndPassword,
        user,
        loading,
        error,
    ] = useCreateUserWithEmailAndPassword(auth);
    const [sendEmailVerification, sending, errorr] = useSendEmailVerification(auth);


    const handleEmail = (e) => {
        setEmail(e.target.value)
    }
    const handlePassword = (e) => {
        setPassword(e.target.value)
    }

    const handleSubmit = async (e) => {
        e.preventDefault()
        const displayName = e.target.user.value
        await createUserWithEmailAndPassword(email, password)
        await sendEmailVerification();
        toast('Sent email');
        await updateProfile({ displayName });
        toast('Updated profile');
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
                            <input className='' placeholder='User Name' type="text" name="user" required />
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