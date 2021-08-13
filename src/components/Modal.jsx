import React, { useRef } from 'react'
import {useSpring,animated} from 'react-spring';
import styled from 'styled-components'
import { MdClose } from 'react-icons/md';
import FacebookIcon from '@material-ui/icons/Facebook';
import InstagramIcon from '@material-ui/icons/Instagram';
import YouTubeIcon from '@material-ui/icons/YouTube';
import TwitterIcon from '@material-ui/icons/Twitter';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import GitHubIcon from '@material-ui/icons/GitHub';
import LocationOnIcon from '@material-ui/icons/LocationOn';
import LanguageIcon from '@material-ui/icons/Language';
import './Modal.css';
const Background = styled.div`
  width: 100%;
  height: 100%;

  background: transparent;
  position: absolute;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const ModalWrapper = styled.div`
  width: 800px;
  height: 700px;
  margin-top:28%;
  box-shadow: 0 5px 16px rgba(0, 0, 0, 0.2);
  background: #fff;
  color: #000;
  display: grid;
  grid-template-columns: 1fr 1fr;
  position: relative;
  z-index: 10;
  border-radius: 10px;
  border-color:blue;
  border:10px solid blue;
`;
const ModalContent = styled.div`
  display: flex;
  flex-direction: column;
  //  justify-content: center;
   align-items: center;
  line-height: 1.8;
  color: #141414;

`;
const CloseModalButton = styled(MdClose)`
  cursor: pointer;
  position: absolute;
  top: 20px;
  right: 20px;
  width: 32px;
  height: 32px;
  padding: 0;
  z-index: 10;
`;

const Modal = ({modal,setModal}) => {
  const modalRef = useRef();

  const animation = useSpring({
    config: {
      duration: 250
    },
  
    transform: modal ? `translateY(12%)` : `translateY(-70%)`
  });
  const closeModal=e=>{
    if(modalRef.current===e.target){
      setModal(false);
    }
  };
    return (
        <>
           {
               modal?
               <Background ref={modalRef} onClick={closeModal}>
                 <animated.div style={animation}>
                 <ModalWrapper modal={modal}>
<ModalContent>
  <div className="first">
  <img src="https://freepngimg.com/thumb/doraemon/35004-7-doraemon-transparent-image-thumb.png" alt="img"/>
 <div className="btn2">
 <button>Yoga</button>
  <button>Fitness</button>
 </div>
 <div className="btn3">
 <button>
Book Trial
</button>
<button>Contact Me</button>
 </div>
  </div>
 {/* first ends */}
 <div className="texts">
   <h1>Jane Doe</h1>
   <p>"Lorem ipsum dolor sit amet, consectetur Lorem ipsum dolor sit amet, consectetur "</p>
   <ul>
     <li><FacebookIcon/></li>
     <li><InstagramIcon/></li>
     <li><YouTubeIcon/></li>
     <li><TwitterIcon/></li>
     <li><LinkedInIcon/></li>
     <li><GitHubIcon/></li>
   </ul>
 </div>
 {/* scond ends */}
 <hr />
 <div className="section">
<div className="location">
<LocationOnIcon/>
<h4>Lives in</h4>
<button className="btn5">New Delhi</button>
</div>
<div className="languages">
<LanguageIcon/>
<h4>Speaks</h4>
<div className="btn4">
  <button>English</button>
  <button>Hindi</button>
  <button>Punjabi</button>
</div>
</div>
 </div>
 {/* ends */}
<div className="youtube__sec">
<div className="flex">
<h3>Check out my video for 30 minutes Yoga</h3>
{/* <a href="">Contact Me-</a> */}
{/* assign a youtube video of yogas */}

<div className="iframe"></div>
<iframe width="350" height="200" src="https://www.youtube.com/embed/DQlu3Dcih84"
 title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
 allowfullscreen></iframe>
</div>

</div>
{/* ends */}
<div className="last">
  <div className="input__box">
  <h4>subscribe tomy channel and never miss an update..</h4>
  <input  type="text " placeholder="Enter your Email"/>
  <button>Subscribe</button>
  </div>

</div>
</ModalContent>
<CloseModalButton aria-label='close modal' onClick={()=>setModal
(prev=>!prev)}/>

                 </ModalWrapper>
                 </animated.div>
               </Background>:
               null
           } 
        </>
    )
}

export default Modal
