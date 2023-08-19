import React from 'react' ;
import styles from '../../styles/styles';
import { useNavigate } from 'react-router';


const Dropdown = ({categories,setDropDown}) => {
  const navigate = useNavigate()
  const submitHandle = (i) => {
    navigate(`/category?categories=${i.name}`)
    setDropDown(false)
    window.location.reload()
  }
  return (
    <div className='bg-[white] rounded-b-md absolute top-[42px]  w-[99.5%] right-[1px] p-2 z-30 shadow-md '>
      {categories && categories.map((category,index) => {
        return (
          <div key={index} className={`gap-2 p-1 ${styles.noramlFlex}`}>
          <img src={category.image_Url}  style={{height:'30px',width:'30px',objectFit:'contain',marginLeft:'10px'}}/>
          <h1 className='text-sm cursor-pointer'>{category.title}</h1>
        </div>
        )
      })}
    </div>
  )
}

export default Dropdown
