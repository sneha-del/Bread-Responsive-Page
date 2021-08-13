
import React,{useState} from 'react'
import styled from 'styled-components'
import './middle.css'
import Modal from './Modal';
const Container=styled.div`
display:flex;
justify-content:center;
align-items:center;

`;
const Button=styled.button`
min-width:100px;
padding:16px 32px;
border-radius:4px;
border:none;
cursor:pointer;
`;
const Middle = () => {
    const [modal, setModal] = useState(false);
const openModal=()=>{
    setModal(prev=>!prev)
}

    return (
        <div className="middle__container">
         <Container>
             <Button onClick={openModal}>Click</Button>
             <Modal modal={modal} setModal={setModal}/>
         </Container>
        </div>
    )
}

export default Middle
