import React, { useEffect,useState } from 'react'
import { useParams } from 'react-router'
import axios from 'axios'
import { Link } from 'react-router-dom'



const ActivationPage = () => {
    const {activation_token} = useParams()
    const [error,setError] = useState(false)
    useEffect(() => {
        if(activation_token){
          
            axios
              .post(`/user/activation`, {
                activation_token,
              })
              .then((res) => {
                console.log(res);
                Link('/home')
              })
              .catch((err) => {
                console.log(err)
                setError(true);
              });
          
          
        }
        else{
          setError(false)
        }
    },[])
  return (
    <div style={{width:'100%',height: '100vh', display:'flex',justifyContent:'center',alignItems:'center'}}>
      {error? 
      <div className='text-blue-400 font-medium text-3xl '>
        Your token has expired
      </div> : <div className='text-blue-400 font-medium text-3xl' >
        your Account has been created successfully
      </div>}
    </div>
  )
}

export default ActivationPage

