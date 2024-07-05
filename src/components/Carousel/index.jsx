import React, { Fragment, useState } from "react";
import styled from "styled-components";
//import { faArrowLeft, faArrowRight } from "@fortawesome/free-solid-svg-icons";
//import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
//import colors from "../../style/colors";


const IMG = styled.img`
width:70%;
height: 80%;
padding:5%;
object-fit: contain;
&:hover {
    transform:scale(1.2);
  }
`

const CarouselHolder = styled.div`
padding:10%;
display: flex;
flex-direction:row;
align-items: center;
justify-content: center;
width:100%;
height: 90vh;
white-space: nowrap;
overflow: hidden;
`
const BackImageL = styled.img`
width:20%;
object-fit: contain;
&:hover {
    transform: skewX(10deg);
  }
`
const BackImageR = styled.img`
width:20%;
object-fit: contain;
&:hover {
    transform: skewX(-10deg);
  }
`
export default function Carousel({data}){

    let size = data.length;
    const [index, setIndex] = useState(0);
    let cur = index;

    function increaseIndex(cur){
        cur === data.length - 1 ? (cur = 0) : (cur = index + 1);
        setIndex(cur);
        console.log("increase" + index);
    }

    function decreaseIndex(cur){
        cur === 0 ? (cur = data.length - 1) : (cur = index - 1);
        setIndex(cur);
        console.log("decrease" + index);
    }


    return (
        <Fragment>
            <CarouselHolder>
                <BackImageL onClick={()=>decreaseIndex(cur)} src={index == "0" ? (data[size - 1].src) : (data[index - 1].src)} key={index - 1} style={{paddingLeft:"10%"}}/>
                <IMG onClick={()=>increaseIndex(cur)} src={data[index].src} alt={data[index].alt} key={index}/>
                <BackImageR onClick={()=>increaseIndex(cur)} src={index == size - 1? (data[0].src):(data[index + 1].src)} key={index+1} style={{paddingRight:"10%"}}/>
            </CarouselHolder>
        </Fragment>
    );
}

// {/* <Span>
//                 {data.map((__, idx) => {
//                     return <button key={idx} onClick={null}/>
//                 })}
//             </Span>
//             <FontAwesomeIcon onClick={()=>decreaseIndex(cur)} icon={faArrowLeft} style={{position:"absolute", width:"2rem", height:"2rem", color: `${colors.primary}`, left:"1rem"}}/>
//          <FontAwesomeIcon onClick={()=>increaseIndex(cur)} icon={faArrowRight} style={{position:"absolute", width:"2rem", height:"2rem", color: `${colors.primary}`, right:"1rem"}}/>
//         */}