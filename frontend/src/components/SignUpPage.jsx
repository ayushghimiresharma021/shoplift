import React, { useState } from 'react' ;
import { AiOutlineEye } from 'react-icons/ai';
import { AiOutlineEyeInvisible } from 'react-icons/ai';
import { Link } from 'react-router-dom' ;
import styles from '../styles/styles';
import { RxAvatar } from 'react-icons/rx' ;
import axios from 'axios' ;
import { toast } from 'react-toastify';


const SignUpPage = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [visible, setvisible] = useState(true);
    const [name, setName] = useState('');
    const [avatar, setAvatar] = useState(null);
    const ChangeOnCLick = (e) => {
        const file = e.target.files[0]
        setAvatar(file)
        console.log(file)
        
    }
    const handleSubmit = async(e) => {
        e.preventDefault() ;
        const formData = new FormData() ;

        formData.append('file',avatar)
        formData.append('name',name) ;
        formData.append('email',email) ;
        formData.append('password',password) ;
        
        
       await axios.post(`/user/create-user`,formData,{headers: {'Content-Type' : 'multipart/form-data'}}).
       then((response) => {
            console.log(response.data.message)
            toast.success(response.data.message) ;
            setName('')
            setAvatar('')
            setEmail('')
            setPassword('')
    }).catch((error) => {
        toast.error(error.response.data.message) ;
    })
    
    
    }
    return (
        <div className='min-h-screen bg-gray-50 flex flex-col justify-center py-12 sm:px-6 md:px-4'>
            <div className='sm:mx-auto sm-w-full sm:max-w-md'>
                <h2 className='mt-6 text-center  text-3xl font-extrabold text-gray-900'>
                    Register in to page
                </h2>
            </div>
            <div className='mt-8  sm:mx-auto sm:w-full sm:max-w-md'>
                <div className='bg-white py-8 px-4  shadow sm:rounded-lg sm:px-10'>
                    <form className='space-y-3' onSubmit={(e) => handleSubmit(e)} >
                        <div>
                            <label htmlfor='email' className='block text-sm font-medium text-gray-700'>Full Name</label>
                        </div>
                        <div className='mt-1'>
                            <input type='text' name='name' autoComplete='name' required value={name} onChange={(e) => setName(e.target.value)}
                                className='appearance-none block  w-full px-3 py-2 border border-gray-300  rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm ' />
                        </div>
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
                            <input type={visible?'text':'password'} name='email' autoComplete='password' required value={password} onChange={(e) => setPassword(e.target.value)}
                                className='appearance-none block  w-full px-3 py-2 border border-gray-300  rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm ' />
                            {
                                visible ?
                                    <AiOutlineEye onClick={() => setvisible(false)} className='absolute right-2 top-2 cursor-pointer text-lg' /> :
                                    <AiOutlineEyeInvisible onClick={() => setvisible(true)} className='absolute right-2 top-2 cursor-pointer text-lg' />
                            }
                        </div>
                        <div>
                            <label
                                htmlFor="avatar"
                                className="block text-sm font-medium text-gray-700" >
                            </label>
                            <div className='flex mt-2 items-center'>
                                <span className='h-8 w-8 flex items-center rounded-full overflow-hidden'>
                                    {avatar ? <img src={URL.createObjectURL(avatar)} className='h-full w-full  object-cover rounded-full ' alt='avatar' />
                                        : <RxAvatar className='h-6 w-6 object-cover rounded-full ' />}
                                </span>
                                <label htmlFor='file-input' className='mx-2 text-sm flex items-center justify-center py-2 px-3 border border-gray-300 rounded-md font-medium text-gray-600' >
                                    <span>Upload a file</span>
                                    <input
                                        type="file"
                                        name="avatar"
                                        id="file-input"
                                        onChange={ChangeOnCLick}
                                        accept=".jpg,.jpeg,.png"
                                        className="sr-only"
                                    />
                                </label>
                            </div>
                        </div>
                        <div>
                            <button type='submit' className='group relative w-full h-[40px] flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700'>Submit</button>
                        </div>
                    </form>
                    <div className={`${styles.noramlFlex} w-full py-2 px-1 text-sm gap-1`}>
                        <h4>Already have any Account? </h4>
                        <Link to={'/login'} className='text-blue-600 pl-2' > Login</Link>
                    </div>
                </div>
            </div>
        </div>)

}

export default SignUpPage
