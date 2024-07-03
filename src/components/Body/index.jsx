import React, {Fragment} from "react";
import Card from "../Card";
import colors from "../../style/colors";
import styled from "styled-components";
import photoA from "../../assets/photos/A.png";
import photoB from "../../assets/photos/car_5.png"
import data from "../../data/carousel.json";
import Carousel from "../Carousel";
import Car from "../Car";
import { device } from "../../style/size";


// Should hold the 4 squares and the carousel
// should the square be a component?

const Container = styled.div`
width:100%;
height:auto;
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
`

const ImgHolderContainer = styled.div`
width:100%;
height:100vh;
display: flex;
flex: 1;
flex-direction: row;
justify-content: space-evenly;
align-items: center;
@media ${device.tabletL} {
        flex-flow: column;
    }
`

const ImgHolder = styled.div`
width:50%;
overflow: hidden;
max-height:100vh;
@media ${device.tabletL} {
        width:100%;
    }
`
const HorizontalSection = styled.section`
  position: relative;
  width: 100%;
  min-height: 100vh;
  padding: 10% 0% 10% 0;
`;

const CardsContainer = styled.div`
  position: relative;
  height: 100%;
  padding: 0 0 0 150px;
  display: flex;
  flex-flow: row nowrap;
  justify-content: flex-start;
  align-items: center;
`;

const PhotoCard = styled.img`
width: 60%;
margin: 5%;
@media ${device.tabletL} {
        width: 100%;
    }  
`

export default function Body(){

    return(
        <Fragment>
            <Container id="Menu">
                <ImgHolderContainer style={{backgroundColor:`${colors.primary}`}}>
                    <ImgHolder>
                        <img src={photoA} style={{minWidth: "100%", height:"auto", objectFit:"cover"}}/>
                    </ImgHolder>
                    <Card theme={"menu"}/>
  
                </ImgHolderContainer>
                <ImgHolderContainer style={{backgroundColor: `${colors.secondary}`}}>
                    <Card theme={"wine"}/>
                    <ImgHolder>
                        <img src={photoB} style={{minWidth: "100%", height:"auto", objectFit:"cover"}}/>
                    </ImgHolder>
                </ImgHolderContainer>
            </Container>
            <HorizontalSection>
               <Car>
                <CardsContainer>
                {data.map((item, index) => {
                    return <PhotoCard src={item.src} alt={item.alt} key={index}/>
                })}
                </CardsContainer>
               </Car>
               </HorizontalSection>
        </Fragment>
    )
}