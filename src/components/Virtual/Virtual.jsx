import React from 'react'
import css from './Virtual.module.css'
import Shade from '../../assets/shade.png'
import ReactCompareImage from 'react-compare-image'
import Before from '../../assets/beforeimg.png'
import After from '../../assets/afterimg.png'

const Virtual = () => {
  return (
    <div className={css.Virtual}>
      <div className={css.left}>
        <span>
          About
        </span>
        <span>At Freshlo, we are passionate about delivering the freshest groceries to
your doorstep. Our mission is to provide a seamless online shopping
experience, making it easy for you to access high-quality products and
enjoy the convenience of home delivery. With our commitment to
freshness, quality, and customer satisfaction, Freshlo is your trusted
partner for all your grocery needs.</span>



      </div>
      <div className={css.right}>
        <div className={css.wrapper}>
        <ReactCompareImage leftImage={Before} rightImage={After} />
        </div>
      </div>
    </div>
  )
}

export default Virtual