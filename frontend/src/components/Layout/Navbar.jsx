import React from 'react' ;
import styles from '../../styles/styles';
import { navItems } from '../../static/data';
import { Link } from 'react-router-dom';

const Navbar = ({active}) => {
  return (
    <div className={`block 800px:${styles.noramlFlex} gap-9 pr-10`}>
      {navItems && navItems.map((navbar,index) => {
        return (
            <div className={`flex`}>
                <Link to={`${navbar.url}`} className={`${active == index+1? 'text-[#000]':'text-[#fff] font-[500] pb'}`}>
                    {navbar.title}
                </Link>
            </div>
        )
      })}
    </div>
  )
}

export default Navbar
