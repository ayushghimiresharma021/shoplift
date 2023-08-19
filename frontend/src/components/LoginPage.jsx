import React, { useState } from 'react'
import {AiOutlineEye} from 'react-icons/ai' ;
import {AiOutlineEyeInvisible} from 'react-icons/ai' ;
import {Link, useNavigate} from  'react-router-dom'
import styles from '../styles/styles';
import axios from 'axios' ;
import {toast} from 'react-toastify' ;
import { useDispatch } from 'react-redux';
import { loadUser } from '../redux/actions/users';

const LoginPage = () => {
    const [email, setEmail] = useState('');
    const [password,setPassword] = useState('');
    const [visible,setvisible] = useState(true);
    const navigate = useNavigate()
    const dispatch = useDispatch()

    const handleSubmit = async(e) => {
        e.preventDefault();
        dispatch(loadUser(email,password))
        navigate('/')
    }
    
    return (
        <div className='min-h-screen bg-gray-50 flex flex-col justify-center py-12 sm:px-6 md:px-4'>
            <div className='sm:mx-auto sm-w-full sm:max-w-md'>
                <h2 className='mt-6 text-center  text-3xl font-extrabold text-gray-900'>
                    Login in to page
                </h2>
            </div>
            <div className='mt-8  sm:mx-auto sm:w-full sm:max-w-md'>
                <div className='bg-white py-8 px-4  shadow sm:rounded-lg sm:px-10'>
                    <form className='space-y-3' onSubmit={(e) =>  handleSubmit(e)}>
                        <div>
                            <label htmlfor='email' className='block text-sm font-medium text-gray-700'>Email Address</label>
                        </div>
                        <div className='mt-1'>
                            <input type='email' name='email' autoComplete='email' required value={email} onChange={(e) => setEmail(e.target.value)}
                            className='appearance-none block  w-full px-3 py-2 border border-gray-300  rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm ' />
                        </div>
                        <div>
                            <label htmlfor='email' className='block text-sm font-medium text-gray-700'>Password</label>
                        </div>
                        <div className='mt-1 relative'>
                            <input type={visible?'text':'password'} name='password' autoComplete='password' required value={password} onChange={(e) => setPassword(e.target.value)}
                            className='appearance-none block  w-full px-3 py-2 border border-gray-300  rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm ' />
                            {
                                visible?
                                <AiOutlineEye onClick={() => setvisible(false)} className='absolute right-2 top-2 cursor-pointer text-lg'/>:
                                <AiOutlineEyeInvisible onClick={() =>setvisible(true)} className='absolute right-2 top-2 cursor-pointer text-lg' />
                            }
                        </div>
                       <div className={`${styles.noramlFlex} justify-between py-1`}>
                            <div className={`${styles.noramlFlex} gap-2 `}>
                                <input type='checkbox' name='remember-me' id='remember-me' className='h-4 w-4 text-blue-600 focus:ring-blue-500  ' />
                                <label>Remember Me</label>
                            </div>
                            
                            <div>
                                <a href='a' className='font-small text-sm text-blue-600 hover:text-blue-500'>
                                    Forget your password
                                </a>
                            </div>
                       </div> 
                       <div>
                            <button type='submit' className='group relative w-full h-[40px] flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700'>Submit</button>
                       </div>
                    </form>
                    <div className={`${styles.noramlFlex} w-full py-2 px-1 text-sm gap-1`}>
                        <h4>Not have any Account? </h4>
                        <Link to={'/sign-up'}  className='text-blue-600 pl-2' > Create Account</Link>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default LoginPage
