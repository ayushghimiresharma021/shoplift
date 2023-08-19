import React from 'react'
import { brandingData, categoriesData } from '../../../static/data'
import styles from '../../../styles/styles'
import { useNavigate } from 'react-router'
const Categories = () => {
    const navigate = useNavigate()
  return (
    <div className={`${styles.section} hidden sm:block`}>
        <div className={`branding my-12  flex justify-between w-full rounded-md  shadow-sm bg-[white] py-7 px-4`}>
         {brandingData.map((brand,index) => {
            return(
                <div className='   flex items-center justify-center gap-5 bg-white'>
                    {brand.icon}
                    <div className='grid justify-left bg-white' > 
                        <h1 className='font-poppins font-semibold'>{brand.title}</h1>
                        <p>{brand.Description}</p>
                    </div>

                </div>
            )
         })}
        </div>
        <div className={`${styles.section} py-7 px-4 rounded-lg mb-12  mx-[-12px] w-[full]`} id='categories'>
            <ul className='brandNew flex flex-row gap-4 overflow-y-auto mx-[-60px]'>
                {categoriesData && categoriesData.map((category,index) => {
                    const handleSubmit = (i) => {
                        navigate(`products?category?=${i.title}`)
                    }
                    return (
                        <li className=' grid bg-white rounded-md px-4 py-4  cursor-pointer w-[150px] justify-center ' key={category.id} onClick={() => handleSubmit(category)}>
                            <img src={category.image_Url} style={{height:'50px',width:'50px'}} />
                            <h5 style={{fontSize:'12px'}}>{category.title}</h5>
                        </li>
                    )
                })}
            </ul>
        </div>
    </div>
  )
}

export default Categories
