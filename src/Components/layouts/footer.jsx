import React from 'react'
import '../../Assests/css/style.css'

const Footer = (props) => {


    return (
        <div>
            <center>
          <div className='footer-tag'>
            {props.footer_name}
          </div>
          <div className='footer-info'>
          {props.footer_follow}
       <br/>
          {props.footer_all_rights}
          </div>
          </center>
            <br/>
        </div>
    )
}
export default Footer;