import React from 'react'
import './yoga.css';
import Carousel from "react-elastic-carousel";
import Item from './Item'
const breakPoints=[
    {width:1,itemsToShow:1},
    {width:550,itemsToShow:2},
    {width:768,itemsToShow:3},
    {
        width:1200,itemsToShow:4
    },
];



const Yoga = () => {
    return (
        <>
        <div className="yoga__container">
             <h2>BROWSE ALL MY OFFERINGS</h2>
<div className="carousel">
    <h1 style={{textAlign:"center"}}>Carousel items</h1>
    <Carousel breakPoints={breakPoints}>
        <Item><img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQe1YrxR2md_UKYSfkPbpgxGg98NKUgr3NRZSFJ1RY6zJ-oeTo_oB9IjGoEjqbuIyT1p2U&usqp=CAU " alt="img1"/>
       
        </Item>
        
        <Item><img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQe1YrxR2md_UKYSfkPbpgxGg98NKUgr3NRZSFJ1RY6zJ-oeTo_oB9IjGoEjqbuIyT1p2U&usqp=CAU" alt="img2" /></Item>
        <Item><img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQe1YrxR2md_UKYSfkPbpgxGg98NKUgr3NRZSFJ1RY6zJ-oeTo_oB9IjGoEjqbuIyT1p2U&usqp=CAU" alt="img2" /></Item>
        <Item><img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQe1YrxR2md_UKYSfkPbpgxGg98NKUgr3NRZSFJ1RY6zJ-oeTo_oB9IjGoEjqbuIyT1p2U&usqp=CAU" alt="img2" /></Item>
        <Item><img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQe1YrxR2md_UKYSfkPbpgxGg98NKUgr3NRZSFJ1RY6zJ-oeTo_oB9IjGoEjqbuIyT1p2U&usqp=CAU" alt="img2" /></Item>
        <Item><img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQe1YrxR2md_UKYSfkPbpgxGg98NKUgr3NRZSFJ1RY6zJ-oeTo_oB9IjGoEjqbuIyT1p2U&usqp=CAU" alt="img2" /></Item>
        <Item><img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQe1YrxR2md_UKYSfkPbpgxGg98NKUgr3NRZSFJ1RY6zJ-oeTo_oB9IjGoEjqbuIyT1p2U&usqp=CAU" alt="img2" /></Item>
       
    </Carousel>
    
    </div> 

        </div>
        </>
    );
}


export default Yoga
