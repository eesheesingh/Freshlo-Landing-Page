import React from 'react'
import css from './Steps.module.css'
import {CgWebsite} from "react-icons/cg"
import {FaShoppingBasket} from "react-icons/fa"
import {TbTruckDelivery} from "react-icons/tb"

const Steps = () => {
  return (
    <div className={css.testimonials}>
         <h1>How It Works?</h1>
         <div className={css.wrapper}>
            
            <div className={css.container}>
            <span><CgWebsite/></span>
            <span>
            Visit freshlo.ca to browse our available Fresh Groceries
            </span>
            
        </div>
        <div className={css.container}>
            <span><FaShoppingBasket/></span>
            <span>
            Select your chosen Groceries, input your
delivery address, and pay securely online.
            </span>
            
        </div>

        <div className={css.container}>
            <span><TbTruckDelivery/></span>
            <span>The Fresh Groceries will be at your doorstep at
your chosen time the following day.</span>
        </div>
    </div>
    </div>
  )
}

export default Steps