import React from 'react'
import styles from '../../styles/styles'
import { Link } from 'react-router-dom'
import { BiSearch } from 'react-icons/bi'
import { categoriesData, productData } from '../../static/data'
import { useState } from 'react';
import { IoIosArrowDown, IoIosArrowForward } from "react-icons/io";
import { BiMenuAltLeft } from 'react-icons/bi';
import { FaArrowDown } from 'react-icons/fa';
import { FaArrowUp } from 'react-icons/fa';
import Dropdown from './Dropdown'
import Navbar from './Navbar';
import { AiOutlineHeart } from 'react-icons/ai';
import { AiOutlineShoppingCart } from 'react-icons/ai';
import { CgProfile } from 'react-icons/cg';
import { useSelector } from 'react-redux' ;
import Cart from '../cart/Cart'
import WishList from '../Wishlist/WishList'

const Headers = ({ activeHeading }) => {
  const [searchTerm, setSearchTerm] = useState('')
  const user =useSelector(state => state.user)
  const isAuthenticated = useSelector((state) => state.isAuthenticated)
  const [searchData, setSearchData] = useState(null)
  const [active, setActive] = useState(false)
  const [dropdown, setDropdown] = useState(false)
  const [openCart,setOpenCart] = useState(false)
  const [openWishlist, setOpenWishlist] = useState(false)

 
  const handleChange = (e) => {
    e.preventDefault()
    const term = e.target.value
    if (term === '') {
      setSearchData(null)
      setSearchTerm('')
    }
    else {
      setSearchTerm(term)
      const filteredProduct = productData && productData.filter((product) => product.name.toLowerCase().includes(term.toLowerCase()))
      setSearchData(filteredProduct)
    }

  }
  window.addEventListener('scroll', () => {
    if (window.scrollY > 10) {
      console.log(window.scrollY)
      setActive(true)
    }
    else {
      setActive(false)
    }
  })
  return (

    <div >
      <div className='my-[5px] h-50 flex items-center justify-between px-2'>
        <div>
          <Link to={'/'}>
            <img src='https://shopo.quomodothemes.website/assets/images/logo.svg' alt='my ' />
          </Link>
        </div>
        <div className='w-[50%] relative'>
          <input value={searchTerm} onChange={handleChange} type='text' placeholder='Search...' className='h-[40px] w-[95%] px-2 border-[2px] border-[#c2836c] rounded' />
          <div className='top-3 right-10 text-xl absolute cursor-pointer'>
            <BiSearch />
          </div>
          {searchData && searchData.length !== 0 ? (
            <div className='absolute w-[95%] min-h-[30vh] bg-slate-50 shadow-sm-2 p-4 z-[9]'>
              {searchData && searchData.map((product, index) => {
                return (
                  <Link>
                    <div className='w-full flex p-2 justify-center items-center'>
                      <img src={`${product.image_Url[0]?.url}`} alt='' className={`w-[40px] h-[40px] mr-[10px]`} />
                      <h1>{product.name}</h1>
                    </div>
                  </Link>
                )
              })}

            </div>
          ) : null}
        </div>
        <div className={`${styles.button}`}>
          <Link to='/seller' >
            <h1 className='text-[#fff] flex items-center'>Become Seller <IoIosArrowForward className='text-[#fff] ml-1' /></h1>
          </Link>
        </div>
      </div>
      <div className={`${active === true ? 'shadow-md fixed z-10 w-full top-0' : null} transition hidden 800px:flex  items-center  bg-[#a39c4a] h-[60px]`}>
        <div className={`${styles.section} relative  ${styles.noramlFlex} justify-between`}>
          <div onSubmit={() => setDropdown(!dropdown)}>
            <div className='bg-[white] top-[1px] relative h-[50px] p-1 rounded-t-md  mt-[10px] w-[270px] 1000px:block flex items-center'>
              <BiMenuAltLeft size={30} className='abulute' />
              <button onClick={() => setDropdown(!dropdown)} className='w-[100%] h-[20px]  absolute top-[10px] flex items-center justify-center font-semibold'>All Categories</button>
              {dropdown ? <FaArrowDown className='absolute right-2 top-3 font-semibold' /> : <FaArrowUp className='absolute right-2 top-3 font-semibold' />}
              {dropdown && <Dropdown categories={categoriesData} setDropDown={setDropdown} />}
            </div>
          </div>
          <div className={`${styles.noramlFlex} flex items-center`}>
            <Navbar active={activeHeading} />
            <div className={styles.noramlFlex}>
              <div className='relative cursor-pointer mr-[15px]'>
                <AiOutlineHeart size={30} className='text-white' onClick={() => setOpenWishlist(true)} />
                <span className='absolute right-0 top-0 rounded-full bg-[#000] w-4 h-4 top right p-0 text-white font-monto m-0 text-[12px] text-center leading-tight'>0</span>
              </div>
            </div>
            <div className={styles.noramlFlex}>
              <div className='relative cursor-pointer mr-[15px]'>
                <AiOutlineShoppingCart size={30} className='text-white' onClick={() => setOpenCart(true)} />
                <span className='absolute right-0 top-0 rounded-full bg-[#000] w-4 h-4 top right p-0 text-white font-monto m-0 text-[12px] text-center leading-tight'>0</span>
                
              </div>
            </div>
            <div className={styles.noramlFlex}>
              <div className='relative cursor-pointer mr-[15px]'>
              {isAuthenticated ?(
                <Link to='/profile'>
                <img
                        src={`http://localhost:3001/uploads/${user.avatar?.url}`}
                        alt=""
                        className="w-[40px] h-[40px] rounded-full border-[3px] border-[#0eae88]"
                      />
                </Link>
              ):
              <Link to={'/login'}>
                <CgProfile size={30} className='text-white' />
              </Link>
              }
              </div>
            </div>
            {openCart && <Cart setOpenCart={setOpenCart} />}
            {openWishlist ? (
              <WishList setOpenWishlist={setOpenWishlist} />
            ) : null}
          </div>
          
        </div>
      </div>
    </div>
  )
}

export default Headers
