import React from 'react' ;
import styles from "../../../styles/styles";
import ProductBox from '../BestDeals/ProductBox';
import { productData } from '../../../static/data';

const FeaturedDeals = () => {
  return (
    <div>
      <div className={`${styles.section} py-4`}>
        <div className={`${styles.heading}`}>
          <h1>Featured Products</h1>
        </div>
        <div className="grid grid-cols-1 gap-[20px] md:grid-cols-2 md:gap-[25px] lg:grid-cols-4 lg:gap-[25px] xl:grid-cols-5 xl:gap-[30px] mb-12 border-0">
        {
            productData && productData.length !== 0 &&(
              <>
               {productData && productData.map((i, index) => <ProductBox data={i} key={index} />)}
              </>
            )
           }
        </div>
      </div>
    </div>
  )
}

export default FeaturedDeals
