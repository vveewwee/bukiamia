import React, {Fragment} from "react";
import Card from "../Card";
import colors from "../../style/colors";
import styled from "styled-components";
import photoA from "../../assets/photos/A.png";
import photoB from "../../assets/photos/car_5.png"
import data from "../../data/carousel.json";
import Carousel from "../Carousel";
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

const ImgHolderContainerRever = styled.div`
width:100%;
height:100vh;
display: flex;
flex: 1;
flex-direction: row-reverse;
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




export default function Body(){

    return(
        <Fragment>
            <Container id="Menu">
                <ImgHolderContainer style={{backgroundColor:`${colors.primary}`}}>
                    <ImgHolder>
                        <img src={photoA} alt="decorative" style={{minWidth: "100%", height:"auto", objectFit:"cover"}}/>
                    </ImgHolder>
                    <Card theme={"menu"}/>
  
                </ImgHolderContainer>
                <ImgHolderContainerRever style={{backgroundColor: `${colors.secondary}`}}>
                    <ImgHolder>
                        <img src={photoB} alt="decorative" style={{minWidth: "100%", height:"auto", objectFit:"cover"}}/>
                    </ImgHolder>
                    <Card theme={"wine"}/>
                </ImgHolderContainerRever>
            </Container>
               <Carousel data={data}/>
                {/* <CardsContainer>
                {data.map((item, index) => {
                    return <PhotoCard src={item.src} alt={item.alt} key={index}/>
                })}
                </CardsContainer> */}
        </Fragment>
    )
}