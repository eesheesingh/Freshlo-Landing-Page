import React from 'react'
import css from './Footer.module.css'
import Logo from '../../assets/logo.png'
import { InboxIcon, PhoneIcon, LocationMarkerIcon,
    LoginIcon, UsersIcon, LinkIcon,  } from '@heroicons/react/outline'
import {BsInstagram} from 'react-icons/bs'
import {FaTwitter} from 'react-icons/fa'
import {FaFacebookF} from 'react-icons/fa'


const Footer = () => {
  return (
    <div className={css.cFooterWrapper}>
        

        <div className={css.cFooter}>
            <div className={css.logo}>
                <img src={Logo} alt="" />
                <span>Freshlo</span>
            </div>
            <div className={css.bloack}>
                <div className={css.detail}>
                    <span>Contact Us</span>
                    <span className={css.pngLine}>
                        <LocationMarkerIcon className={css.icon} />
                        <span>786 Plane Street, Eastern Cape,<br/> Engcobo 5054</span>
                    </span>
                    <span className={css.pngLine}>
                        <LocationMarkerIcon className={css.icon} />
                        <span>9436 Feather Street, Santa Fr <br/> New Mexico 87501</span>
                    </span>
                    <span className={css.pngLine}>
                        <LocationMarkerIcon className={css.icon} />
                        <span>2179 Clover Avenue, Coquitlam, <br/> British Columbia V3J 5S9</span>
                    </span>
                </div>
            </div>

            
            <div className={css.bloack}>
                <div className={css.detail}>
                    <span>Conmpany</span>
                    <span className={css.pngLine}>
                        <UsersIcon className={css.icon} />
                        <span>About us</span>
                    </span>
                </div>
            </div>

            <div className={css.bloack}>
                <div className={css.detail}>
                    <span>Account</span>
                    <span className={css.pngLine}>
                        <LoginIcon className={css.icon} />
                        <span>Sign In/ Log in </span>
                    </span>
                </div>
            </div>

            <div className={css.bloack}>
                <div className={css.detail}>
                    <span>Socials</span>
                    <span className={css.pngLines}>
                        <BsInstagram className={css.icons} />
                        <span>Instagram</span>
                    </span>

                    <span className={css.pngLines}>
                        <FaFacebookF className={css.icons} />
                        <span>Facebook</span>
                    </span>

                    <span className={css.pngLines}>
                        <FaTwitter className={css.icons} />
                        <span>Twitter</span>
                    </span>
                </div>
            </div>

            
    </div>
    <div className={css.copyRight}>
                <span>Copyright @2023 by Freshlo</span>
                <span>All rights reserved.</span>
            </div>
        </div>
  )
}

export default Footer