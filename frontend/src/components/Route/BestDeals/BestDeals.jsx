import React, { useEffect, useState } from 'react'
import { productData } from '../../../static/data'
import styles from '../../../styles/styles'
import { Link } from 'react-router-dom'
import ProductBox from './ProductBox'

const BestDeals = () => {
    const [data,setData] = useState([])
    useEffect(() =>{
        const d = productData && productData.sort((a,b) => a.price-b.price)
        const firstFive = d.slice(0,5)
        setData(firstFive)
        console.log(firstFive)
    },[])
  return (
    <div>
      <div className={`${styles.section}`}>
        <div className={`${styles.heading}`}>
            <h1>Best Deals</h1>
        </div>
        <div className="grid grid-cols-1 gap-[20px] md:grid-cols-2 md:gap-[25px] lg:grid-cols-4 lg:gap-[25px] xl:grid-cols-5 xl:gap-[30px] mb-12 border-0">
            {data && data.length!==0 && data.map((product,index) => {
                return (
                    <ProductBox key={product.id} data={product} />
                )
            })}
        </div>
      </div>
    </div>
  )
}

export default BestDeals
