import React from 'react'
import { RxCross1 } from 'react-icons/rx';
import styles from '../../../styles/styles';
import { useState } from 'react';
import { AiOutlineMessage,AiFillHeart,AiOutlineHeart } from 'react-icons/ai' ;



const ProductBoxDetails = ({ setOpen, open, data }) => {
  const [click,setClick] = useState(false) ;
  const [selected,setSelected] = useState(false) ;
  
  const AddToCart = () => {
    if (count > 0) {
      setCount(count - 1)
    }

  }
  const [count, setCount] = useState(0)
  return (
    <div className='fixed w-full h-screen top-0 left-0 bg-[#00000030] z-40 flex items-center justify-center scroll'>
      <div className='relative w-[90%] h-[90vh] flex justify-between  800px:w-[60%] 800px:h-[90vh] bg-white rounded-sm shadow-sm p-4 overflow-y-scroll'>
        <RxCross1 className='absolute top-4 right-4' size={25} onClick={() => setOpen(!open)} />
        <div className='flex-[50%] py-3 px-3'>
          <img src={`${data.image_Url[0].url}`} />
          <div className='flex items-center gap-3'>
            <img className='w-[40px] h-[41px] rounded-full ' src={data.shop.shop_avatar.url} ></img>
            <div>
              <a className='m-0 text-xs' style={{ color: 'blue' }} href={data.shop.shop_avatar.url}>{data.shop.name}</a>
              <p className='text-[10px]'>({data.shop.ratings}) Rating</p>
            </div>
          </div>
          <button className={`shadow-sm rounded-md bg-black p-2 my-5 mb-3 text-white flex items-center gap-1`}>Send Message <AiOutlineMessage /></button>
        </div>
        <div className=' flex-[50%] py-3'>
          <h1 className='font-bold py-4 text-xl'>{data.name}</h1>
          <p className='text-sm'>{data.description}</p>
          <p className='font-bold py-1'>$ {data.price}</p>
          <div className='flex items-center justify-between'>
            <div className='flex items-center'>
              <button className='bg-gradient-to-r from-teal-400 to-teal-500 text-white font-bold rounded-l px-4 py-[7px] shadow-lg hover:opacity-75 transition duration-300 ease-in-out' onClick={AddToCart}>-</button>
              <span className="bg-gray-200 text-gray-800 font-medium px-4 py-[7px]">
                {count}
              </span>
              <button className='bg-gradient-to-r from-teal-400 to-teal-500 text-white font-bold px-4 py-[7px] shadow-lg hover:opacity-75 transition duration-300 ease-in-out rounded-r-md' onClick={() => setCount(count + 1)}>+</button>
            </div>
            <div>
              {selected ? (
                <AiFillHeart
                  size={30}
                  className="cursor-pointer"
                  onClick={() => setClick(false)}
                  color={click ? "red" : "#333"}
                  title="Remove from wishlist"
                />
              ) : (
                <AiOutlineHeart
                  size={30}
                  className="cursor-pointer"
                  onClick={() => setSelected(true)}
                  title="Add to wishlist"
                />
              )}
            </div>

          </div>
        </div>
      </div>

    </div>
  )
}

export default ProductBoxDetails
