import React from 'react'
import './footer.css'
import InstagramIcon from '@material-ui/icons/Instagram';
import FacebookIcon from '@material-ui/icons/Facebook';
import TwitterIcon from '@material-ui/icons/Twitter';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import Scrollbtn from './Scrollbtn';
const Footer = () => {
    return (
        <div className="footer__container">
     <h4 className="h4">Powered by Bread</h4>
     <div className="icon">
     <ul>
         <li><InstagramIcon/></li>
         <li><FacebookIcon/></li>
         <li><TwitterIcon/></li>
         <li><LinkedInIcon/></li>
     </ul>
     </div>
     <p>©Bread 2021 All rights reserved</p>
     <div >
       

     
<div className="right">
<ul>
    <li>Terms</li>
    <li>Privacy</li>
    <li>About</li>
</ul>
         </div>
     </div>
     <Scrollbtn/>
        </div>
    
    )
}

export default Footer
