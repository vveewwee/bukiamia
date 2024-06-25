import React, { useState} from "react";
import { GlobalStyle } from "../../style/GlobalStyle";
import header_back from "../../assets/photos/header_back.png";
import logo from "../../assets/logo/logo_white.png";
import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faXmark, faBars } from "@fortawesome/free-solid-svg-icons";
import { device } from "../../style/size";


const MenuHolder = styled.div`
width:fit-content;
position: fixed;
top: 5%;
right: 5%;
`

const InfoContainer = styled.div`
display:flex;
flex-direction: row;
align-items: center;
justify-content: center;
color: white;
position: absolute;
top: 5%;
left: 5%;
`

const ParHolder = styled.div`
margin: 5px;
font-size: 1wh;
`

const LogoHolder = styled.div`
position:absolute;
margin-top:5%;
top:50%;
left:50%;
transform:translate(-50%, -50%);
display:flex;
flex-direction:column;
color: white;
align-items:center;
justify-content:center;
`
const DescriptionHolder = styled.div`
width:80%;
display:flex;
align-items: center;
justify-content: center;
text-align:center;
margin:10%;
`
const DescriptionP = styled.p`
`

export default function Header(){

    const [click, setClick] = useState(false);
    const handleClick = () => setClick(!click);

    return (
        <header>
            <img src={header_back} style={{width: "100%"}} alt="bukia mia" />
            <MenuHolder onClick={handleClick}>
                < FontAwesomeIcon icon={click ? faXmark : faBars} style={{color: "white"}}/>
            </MenuHolder>
            <InfoContainer>
                <ParHolder>
                    <p> Lykourgou 2 Chalandri <br/> Athens </p>
                 </ParHolder>
                <ParHolder>
                    <p> 210 12345678 </p>
                </ParHolder>
            </InfoContainer>
            <LogoHolder>
                <img src={logo} style={{width: "20vw"}} alt="bukia mia logo"/>
                <p> D E L I  &  W I N E</p>
            </LogoHolder>
            <DescriptionHolder>
                <DescriptionP>
                BukiaMia prepares for you top-quality dishes and fine wines in a cozy ambiance
                </DescriptionP>
            </DescriptionHolder>
        </header>
    )
}