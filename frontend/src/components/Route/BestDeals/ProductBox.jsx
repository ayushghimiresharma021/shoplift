import React from 'react'
import { Link, useParams } from 'react-router-dom'
import {AiFillStar, AiOutlineEye} from 'react-icons/ai' ;
import styles from '../../../styles/styles';
import {AiFillHeart,AiOutlineHeart,AiOutlineEyeInvisible,AiOutlineShoppingCart} from 'react-icons/ai'
import { useState } from 'react';
import {BsFillCartFill} from 'react-icons/bs' ;
import ProductBoxDetails from '../ProductBoxDetails/ProductBoxDetails';

const ProductBox = ({data}) => {
  const {name} = useParams() ;


  const [click,setClick] = useState(false) ;
  const [open,setOpen] = useState(false) ;
  return (
    <div className='w-full h-[370px] bg-white rounded-lg shadow-sm px-3 relative cursor-pointer py-5'>
      <div className="flex justify-end"></div>
      <Link to={`/product/${data.name}`}>
        <img src={data.image_Url[0].url} alt='' className='w-full h-[170px] object-contain pb-2'/>
      </Link>
      <Link to={'/'}>
        <h5 className={`${styles.shop_name}`}>{data.shop.name}</h5>
      </Link>
      <Link to={`/product/${data.name}`}>
        <h4 className='my-3 font-[500] text-[14px]'>
            {data.name.length> 40? data.name.slice(0,20)+'...' :data.name}
        </h4>
        <div className='flex py-2'>
          <AiFillStar className='mr-2 cursor-pointer' color='#f6ba00' />
          <AiFillStar className='mr-2 cursor-pointer' color='#f6ba00' />
          <AiFillStar className='mr-2 cursor-pointer' color='#f6ba00' />
          <AiFillStar className='mr-2 cursor-pointer' color='#f6ba00' />
          <AiFillStar className='mr-2 cursor-pointer' color='#f6ba00' />
        </div>
        <div className='flex items-center justify-between my-2'>
          <div className='flex items-center justify-center place-items-center'>
            <h5 className={`${styles.productDiscountPrice}`}>${data?.discount_price}</h5>
            <h4 className={`${styles.price}`}>${data?.price}</h4>
          </div>
          <p className='text-[#4a77bf]'>{data?.total_sell} sold</p>
        </div>
        {/* sideOptions */}
        
      </Link>
      <div>
      
          {
            click? 
            <AiOutlineHeart className='absolute top-2 right-2' size={18} onClick={() => setClick(!click)}/>:
            <AiFillHeart    className='absolute top-2 right-2' size={18} onClick={() => setClick(!click)} />
          }
          
            
            <AiOutlineEye           className='absolute top-8 right-2' size={18} onClick={() => setOpen(!click)} />
           
          
          {
            click?
            <AiOutlineShoppingCart size={18} className='absolute top-14 right-2' />:
            <BsFillCartFill        size={18} className='absolute top-14 right-2' />
          }
          {
            open?
            <ProductBoxDetails open={open} setOpen={setOpen} data={data} />:
            null
          }
        </div>
    </div>
  )
}

export default ProductBox
