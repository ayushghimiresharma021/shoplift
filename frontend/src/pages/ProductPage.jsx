import React, { useEffect, useState } from 'react'
import { useSearchParams } from 'react-router-dom'
import { productData } from '../static/data'
import Headers from '../components/Layout/Headers' ;
import Footer from '../components/Layout/Footer';
import ProductBox from '../components/Route/BestDeals/ProductBox';
import styles from "../styles/styles";

const ProductPage = () => {
    const [searchParams] = useSearchParams()
    const categoryData = searchParams.get('category')
    const [data,setData] = useState([])
    useEffect(() => {
        if (categoryData==null){
            const d = productData.sort((a,b) => a.total_sell - b.total_sell)
            setData(d)
        }
        else{
            const d = productData.map((i) => i.category - categoryData)
            setData(d)
        }
    },[])

  return (
    <div>
      <Headers activeHeading={3} />
      <br />
      <br />
      <div className={`${styles.section}`}>
        <div className="grid grid-cols-1 gap-[20px] md:grid-cols-2 md:gap-[25px] lg:grid-cols-4 lg:gap-[25px] xl:grid-cols-5 xl:gap-[30px] mb-12">
          {data && data.map((i, index) => <ProductBox data={i} key={index} />)}
        </div>
        {data && data.length === 0 ? (
          <h1 className="text-center w-full pb-[100px] text-[20px]">
            No products Found!
          </h1>
        ) : null}
      </div>
      <Footer />
    </div>
  )
}

export default ProductPage
