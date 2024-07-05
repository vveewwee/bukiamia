import React from "react";
import colors from "../../style/colors";
import header_back from "../../assets/photos/header_back.png";
import logo from "../../assets/logo/logo_solid.png";
import styled from "styled-components";
import Navbar from "../Navbar";
import { device } from "../../style/size";

const InfoContainer = styled.div`
width:40%;
display:flex;
flex-flow: row wrap;
align-items: center;
justify-content: flex-start;
color: white;
position: absolute;
top: 5%;
left: 5%;
`

const ParHolder = styled.div`
margin: 5px;
font-size: 1rem;
`

const BackImg = styled.img`
width:100%;
height: 100vh;
object-fit: cover;
object-position: center;
`

const LogoHolder = styled.div`
position:absolute;
top:50vh;
left:50%;
transform:translate(-50%, -50%);
display:flex;
flex-direction:column;
color: ${colors.plain};
align-items:center;
justify-content:center;
@media ${device.tabletL} {
        font-size:1rem;
    }  
`
const Logo = styled.img`
width:50%;
&:hover {
    transform: scale(1.2);
  }
@media ${device.tabletL} {
       width:100%;
    }  
`
const DescriptionHolder = styled.div`
width:80%;
display:flex;
align-items: center;
justify-content: center;
text-align:center;
margin:10%;
@media ${device.tabletL} {
        height: 50vh;
    }  
&:hover {
  color:${colors.background};
  transform: skew(15deg);
      }
`
const DescriptionP = styled.p`
`

export default function Header(){

    return (
        <header id="Home" style={{width:"100%"}}>
            <BackImg src={header_back} alt="bukia mia" />
            <Navbar/>
            <InfoContainer>
                <ParHolder>
                    <p> Lykourgou 2 Chalandri <br/> Athens </p>
                 </ParHolder>
                <ParHolder>
                    <p>+30 211 00 11 979 </p>
                </ParHolder>
            </InfoContainer>
            <LogoHolder>
                <Logo src={logo} alt="bukia mia logo"/>
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