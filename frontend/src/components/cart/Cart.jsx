import React, { useEffect, useState } from 'react'
import { RxCross1 } from "react-icons/rx";
import { IoBagHandleOutline } from "react-icons/io5";
import { HiOutlineMinus, HiPlus } from "react-icons/hi";
import styles from "../../styles/styles";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { toast } from "react-toastify";
import { productData } from '../../static/data';

const dataCart = productData.slice(0,6)


const Cart = ({ setOpenCart }) => {
  
  return (
    <div className='fixed top-0 left-0 w-full bg-[#0000004b] z-10 h-screen'>
      <div className='fixed top-0 right-0 w-[25%] min-h-full flex flex-col overflow-y-scroll justify-between shadow-sm bg-white'>
        {
          dataCart && dataCart.length === 0 ? (
            <div className='w-full h-screen flex items-center justify-center'>
              <div className='flex w-full justify-end fixed top-2 right-2'>
                <RxCross1
                  size={25}
                  className="cursor-pointer"
                  onClick={() => setOpenCart(false)}
                />
              </div>
              <h5>Cart item is empty!</h5>
            </div>
          ) : 
          <div>
            <div className='flex w-full justify-end pt-5 pr-5'>
              <RxCross1
                size={25}
                className="cursor-pointer"
                onClick={() => setOpenCart(false)}
              />
            </div>
            {/* Item length */}
            <div className={`${styles.noramlFlex} p-4`}>
              <IoBagHandleOutline size={25} />
              <h5 className="pl-2 text-[20px] font-[500]">
                {dataCart && dataCart.length} items
              </h5>
            </div>
            {/* cart Single Items */}
            <br />
            <div className="w-full border-t">
              {dataCart &&
                dataCart.map((i,index) =>{
                  return (
                    <CartSingle dataforcart={i} key={index} />
                  )
                })}
            </div>
            <div className="px-5 mb-3">
              {/* checkout buttons */}
              <Link to="/checkout">
                <div
                  className={`h-[45px] flex items-center justify-center w-[100%] bg-[#e44343] rounded-[5px]`}
                >
                  <h1 className="text-[#fff] text-[18px] font-[600]">
                    Checkout Now 
                  </h1>
                </div>
              </Link>
            </div>
          </div>
          
        }
      </div>
    </div>
  )
}

const CartSingle = ({ dataforcart }) => {
  const [value,setValue] = useState(1)
  const totalPrice = dataforcart?.price* value
  return (
    <div className="border-b p-4">
      <div className="w-full flex items-center">
        <div>
          <div
            className={`bg-[#e44343] border border-[#e4434373] rounded-full w-[25px] h-[25px] ${styles.noramlFlex} justify-center cursor-pointer`}
              onClick={() => setValue(value+1)}
          >
            <HiPlus size={18} color="#fff" />
          </div>
          <span className='pl-[10px]'>{value}</span>
          <div
            className="bg-[#a7abb14f] rounded-full w-[25px] h-[25px] flex items-center justify-center cursor-pointer"
              onClick={() => {if (value>0){setValue(value-1)}}}
          >
            <HiOutlineMinus size={16} color="#7d879c" />
          </div>
        </div>
        <img
          src={dataforcart?.image_Url[0]?.url }
          alt=""
          className="w-[130px] h-min ml-2 mr-2 rounded-[5px]"
        />
        <div className="pl-[5px]">
          <h1>{dataforcart?.name.slice(0,10)}</h1>
          <h4 className="font-[400] text-[15px] text-[#00000082]">
            ${dataforcart?.price}
          </h4>
          <h4 className="font-[600] text-[17px] pt-[3px] text-[#d02222] font-Roboto">
            {dataforcart?.discount_price }
          </h4>
        </div>
        <RxCross1
          className="cursor-pointer ml-4"

        />
      </div>
    </div>
  );
};

export default Cart
