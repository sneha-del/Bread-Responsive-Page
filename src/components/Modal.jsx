import React, { useRef } from 'react'
import {useSpring,animated} from 'react-spring';
import styled from 'styled-components'
import { MdClose } from 'react-icons/md';

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
  height: 600px;
  margin-top:28%;
  box-shadow: 0 5px 16px rgba(0, 0, 0, 0.2);
  background: #fff;
  color: #000;
  display: grid;
  grid-template-columns: 1fr 1fr;
  position: relative;
  z-index: 10;
  border-radius: 10px;
`;
const ModalContent = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  line-height: 1.8;
  color: #141414;
  p {
    margin-bottom: 1rem;
  }
  button {
    padding: 10px 24px;
    background: #141414;
    color: #fff;
    border: none;
  }
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
  <h1>hello</h1>
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
