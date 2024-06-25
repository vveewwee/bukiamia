import React, { Fragment } from "react";
import styled from "styled-components";
import background from "../../assets/photos/sqr_mosaic.png";
import location from "../../assets/photos/location.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
//import { faSquareInstagram, faSquareFacebook } from "@fortawesome/free-brands-svg-icons";

//main container
const Container = styled.div`
display:flex;
width:100%;
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
overflow: hidden;
`

const InfoContainer = styled.div`
display:flex;
align-items:center;
justify-content: center;
width:100%;
background-image: url(${background});
`

const Paragraph = styled.p`
color:white;
font-size:2vw;
font-weight: 900;

`

const IconContainer= styled.div`
display:flex;
flex-direction:column;
align-items:center;
justify-content:center;
color:white;
`

const InfoHold = styled.div`
display: flex;
flex-direction:column;
align-items: center;
justify-content: center;
`

export default function Footer(){
    return(
            <Container>
                <ImgContainer>
                <a style={{width:"100%"}} href="https://www.google.com/maps/place/Bukia+Mia/@38.0146806,23.7823015,17z/data=!3m1!4b1!4m15!1m8!3m7!1s0x14a199a6805e18d9:0xa0b4045c3f809ff1!2sBukia+Mia!8m2!3d38.0146806!4d23.7848764!10e1!16s%2Fg%2F11vj72f4bc!3m5!1s0x14a199a6805e18d9:0xa0b4045c3f809ff1!8m2!3d38.0146806!4d23.7848764!16s%2Fg%2F11vj72f4bc?entry=ttu">
                    <Img src={location} alt="Lykourgou 2, Chalandri"/>
                </a>
                <InfoContainer>
                    <InfoHold>
                        <Paragraph>Where to find us</Paragraph>
                        <Paragraph>Lykourgou 2, Chalandri</Paragraph>
                        <Paragraph>Athens</Paragraph>
                        <Paragraph>+30 211 001 19 79</Paragraph>
                    </InfoHold>
                    <IconContainer>
                        <FontAwesomeIcon icon="fa-brands fa-square-instagram"/>
                        <FontAwesomeIcon icon="fa-brands fa-square-facebook"/>
                    </IconContainer>
                </InfoContainer>
            
                </ImgContainer>
            </Container>
    )
}