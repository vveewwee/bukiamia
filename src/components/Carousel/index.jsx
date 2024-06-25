import React, { Fragment, useState } from "react";
import styled from "styled-components";
import { faArrowLeft, faArrowRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import colors from "../../style/colors";


const IMG = styled.img`
border-radius: 0.5rem;
box-shadow: 0px 0px 7px #666;
width:100%;
`

const Span = styled.span`
`
export default function Carousel({data}){

    const [index, setIndex] = useState(0);
    let cur = index;

    function increaseIndex(cur){
        cur === data.length - 1 ? (cur = 0) : (cur = index + 1);
        setIndex(cur);
    }

    function decreaseIndex(cur){
        cur === 0 ? (cur = data.lenght - 1) : (cur = index - 1);
        setIndex(cur);
    }

    return (
        <Fragment>
            <FontAwesomeIcon onClick={()=>decreaseIndex(cur)}icon={faArrowLeft} style={{position:"absolute", width:"2rem", height:"2rem", color: `${colors.primary}`, left:"1rem"
            }}/>
             <IMG src={data[index].src} alt={data[index].alt} key={index}/>
            <FontAwesomeIcon onClick={()=>increaseIndex(cur)}icon={faArrowRight} style={{position:"absolute", width:"2rem", height:"2rem", color: `${colors.primary}`, right:"1rem"}}/>
            <Span>
                {data.map((__, idx) => {
                    return <button key={idx} onClick={null}/>
                })}
            </Span>
        </Fragment>
    );
}