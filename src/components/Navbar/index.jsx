import React, { Fragment, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import colors from "../../style/colors";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faXmark, faBars, faEnvelope } from "@fortawesome/free-solid-svg-icons";
import { faSquareInstagram, faSquareFacebook } from "@fortawesome/free-brands-svg-icons";
import "./Navbar.css";
import { device } from "../../style/size";


const MenuHolder = styled.div`
width:fit-content;
position: fixed;
top: 5%;
right: 5%;
z-index: 1;
@media ${device.tabletL} {
        right:-300px;
    }     
`

const Nav = styled.nav`
display: flex;
align-items: center;
justify-content: center;
flex-direction: row;
`
const InfoContainer = styled.div`
display:flex;
flex-direction:column;
align-items: center;
justify-content:center;
padding-top:40%;
`
const IconContainer= styled.div`
width:100%;
display:flex;
flex-direction:row;
align-items:center;
justify-content: space-evenly;
`
const Cover = styled.div`
width:100%;
height:200vh;
position:fixed;
top:0;
left:0;
background:rgba(0,0,0,0.5);
`
export default function Navbar(){

    const [click, setClick] = useState(false);
    const handleClick = () => setClick(!click);
    useEffect(() => {
        click ? (document.body.style.overflow = 'hidden') : (document.body.style.overflow = 'unset')
        }, [click]);

    return(
        <Fragment>
            <MenuHolder onClick={handleClick} style={{cursor: "pointer"}}>
                < FontAwesomeIcon icon={click ? faXmark : faBars} style={{color: `${colors.plain}`}}/>
            </MenuHolder>
            <Nav>
                <Cover onClick={handleClick} style={click ? {display: "block"} : {display: "none"}}/>
                <ul  id="navbar" className={click ? ("#navbar active"):("#navbar")}>
                    <li><a href="#Home" onClick={handleClick}> Home </a></li>
                    <li><a href="#Menu" onClick={handleClick}> Menu </a></li>
                    <li><a href="#Location" onClick={handleClick}> Where to find us </a></li>
                    <li><Link to={"./BukiaMia.html"}>Connect</Link></li>
                    <InfoContainer>
                        <li>Lykourgou 2</li>
                        <li>Chalandri</li>
                        <li><a href="tel:+302110011979">+30 21 10011979</a></li>
                        <IconContainer>
                            <a href="https://www.instagram.com/bukia_mia/"><FontAwesomeIcon icon={faSquareInstagram} size="2x" style={{color:`${colors.primary}`}}/></a>
                            <a href="mailto:info@bukiamia.gr"><FontAwesomeIcon icon={faEnvelope} size="2x" style={{color:`${colors.primary}`}}/></a>
                            <a href="https://www.facebook.com/people/Bukia-Mia/61553911185837/"><FontAwesomeIcon icon={faSquareFacebook} size="2x" style={{color:`${colors.primary}`}}/></a> 
                        </IconContainer>
                    </InfoContainer>
                </ul>
            </Nav>


        </Fragment>
    );
}