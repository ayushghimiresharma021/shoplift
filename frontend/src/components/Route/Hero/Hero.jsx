import React from 'react' ;
import styles from '../../../styles/styles';
import { Link } from 'react-router-dom';

const Hero = () => {
  return (
    <div className={`relative min-h-[70vh] 800px:min-h-[80vh]  w-full  ${styles.noramlFlex}`} style={{backgroundImage: 'url(https://themes.rslahmed.dev/rafcart/assets/images/banner-2.jpg)'}} >
      <div className={`${styles.section} w-[90%] 800px:w-[60%]`}>
        <h1 className='text-[30px] leading-[1.2] 800px:text-[50px] text-[#3d3a3a] font-[600] capitalize' >Best collection for <br/>home collections 
        </h1>
        <p className='pt-5 text-[14px] font-[poppins] font-[400] text-[#000000] '>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Beatae,
          assumenda? Quisquam itaque <br /> exercitationem labore vel, dolore
          quidem asperiores, laudantium temporibus soluta optio consequatur{" "}
          <br /> aliquam deserunt officia. Dolorum saepe nulla provident.
        </p>
        <Link to='/product' className='inline-block'>
            <div className={`${styles.button} mt-5`}>
                <span className='text-[#fff] font-[poppins] text-[18px] '>
                    shop
                </span>
            </div>
        </Link>
      </div>
    </div>
  )
}

export default Hero
