import React, { useState } from 'react'
import styles from "../../styles/styles";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { toast } from "react-toastify";
import CountDown from './CountDown';


const EventCards = () => {
    const [active,setActive] = useState(false)
    return (
        <div
            className={`w-full block bg-white rounded-lg ${active ? "unset" : "mb-12"
                } lg:flex`}
        >
            <div className="w-full lg:-w[50%] m-auto">
                <img src='https://w7.pngwing.com/pngs/536/290/png-transparent-iphone-x-iphone-5s-mockup-others-miscellaneous-angle-rectangle-thumbnail.png' alt="" />
            </div>
            <div className="w-full lg:[w-50%] flex flex-col justify-center">
                <h2 className={`${styles.productTitle}`}>iphone 13 pro</h2>
                <p>Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source. Lorem Ipsum comes from sections 1.10.32 and 1.10.33 of "de Finibus Bonorum et Malorum" (The Extremes of Good and Evil) by Cicero, written in 45 BC. This book is a treatise on the theory of ethics, very popular during the Renaissance. The first line of Lorem Ipsum, "Lorem ipsum dolor sit amet..", comes from a line in section 1.10.32.</p>
                <div className="flex py-2 justify-between">
                    <div className="flex">
                        <h5 className="font-[500] text-[18px] text-[#d55b45] pr-3 line-through">
                            1200$
                        </h5>
                        <h5 className="font-bold text-[20px] text-[#333] font-Roboto">
                            1000$
                        </h5>
                    </div>
                    <span className="pr-3 font-[400] text-[17px] text-[#44a55e]">
                        70 sold
                    </span>
                </div>
                <CountDown />
                <br />
                <div className="flex items-center">
                    <Link to={`/product/11000?isEvent=true`}>
                        <div className={`${styles.button} text-[#fff]`}>See Details</div>
                    </Link>
                    <div className={`${styles.button} text-[#fff] ml-5`} >Add to cart</div>
                </div>
            </div>
        </div>
    )
}

export default EventCards
