import React from "react";
import styled from "styled-components";
import background from "../../assets/photos/sqr_mosaic.png";
import colors from "../../style/colors"
import location from "../../assets/photos/location.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import { faSquareInstagram, faSquareFacebook } from "@fortawesome/free-brands-svg-icons";
import { device } from "../../style/size";

//main container
const Container = styled.div`
display:flex;
flex-direction: row;
width:100%;
height:100vh; 
@media ${device.tabletL} {
        flex-flow: column;
    }
`
//image holder container
const ImgContainer = styled.div`
display:flex;
flex-direction: row;
justify-content: center;
width:100%;
object-fit:cover;

`

const Img = styled.img`
width:100%;
height:100vh;
overflow: hidden;
object-fit:cover;
@media ${device.tabletL} {
        height:50vh;
    }
`

const InfoContainer = styled.div`
display:flex;
align-items:center;
justify-content: center;
width:100%;
background-image: url(${background});
background-size: cover;
@media ${device.tabletL} {
        height:80vh;
    }
`

const Paragraph = styled.p`
color:${colors.plain};
margin:0%;
margin-bottom:2%;
font-size:1.8rem;
font-weight: 900;
@media ${device.tabletL} {
        font-size:2rem;
    }
`
const ParagraphXS = styled.p`
color:${colors.plain};
margin:0%;
font-size:1.2rem;
font-weight: 700;
@media ${device.tabletL} {
        font-size:1.4rem;
        margin:2%;
    }

`
const IconContainer= styled.div`
width:100%;
display:flex;
flex-direction:row;
align-items:center;
justify-content: center;
color:white;
`

const InfoHold = styled.div`
display: flex;
flex-direction:column;
align-items: center;
justify-content: center;
`

const Ancor = styled.a`
text-decoration: none;
color: ${colors.plain};
padding:5%;
&:hover {
    transform: scale(1.2);
  }
`


export default function Footer(){
    return(
            <Container>
                <ImgContainer>
                <a style={{width:"100%"}} href="https://www.google.com/maps/place/Bukia+Mia/@38.0146806,23.7823015,17z/data=!3m1!4b1!4m15!1m8!3m7!1s0x14a199a6805e18d9:0xa0b4045c3f809ff1!2sBukia+Mia!8m2!3d38.0146806!4d23.7848764!10e1!16s%2Fg%2F11vj72f4bc!3m5!1s0x14a199a6805e18d9:0xa0b4045c3f809ff1!8m2!3d38.0146806!4d23.7848764!16s%2Fg%2F11vj72f4bc?entry=ttu">
                    <Img src={location} alt="Lykourgou 2, Chalandri"/>
                </a>
                </ImgContainer>
                <InfoContainer id="Location">
                    <InfoHold>
                        <Paragraph>Where to find us</Paragraph>
                        <ParagraphXS>Lykourgou 2, Chalandri</ParagraphXS>
                        <ParagraphXS>Athens</ParagraphXS>
                        <Ancor href="tel:+302110011979"><ParagraphXS>+302110011979</ParagraphXS></Ancor>
                        <IconContainer>
                            <Ancor href="https://www.instagram.com/bukia_mia/" >
                                <FontAwesomeIcon style={{color: `${colors.plain}`}} icon={faSquareInstagram} size="3x"/></Ancor>
                            <Ancor href="mailto:info@bukiamia.gr">
                                <FontAwesomeIcon icon={faEnvelope} size="2x" style={{color:`${colors.plain}`}}/></Ancor>
                            <Ancor href="https://www.facebook.com/people/Bukia-Mia/61553911185837/">
                                <FontAwesomeIcon style={{color: `${colors.plain}`, padding:"5%"}} icon={faSquareFacebook} size="3x"/></Ancor>
                        </IconContainer>
                    </InfoHold>
                </InfoContainer>
            </Container>
    )
}