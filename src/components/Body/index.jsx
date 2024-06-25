import React, {Fragment} from "react";
import Card from "../Card";
import colors from "../../style/colors";
import styled from "styled-components";
import photoA from "../../assets/photos/A.png";
import photoB from "../../assets/photos/car_5.png"
import data from "../../data/carousel.json";
import Carousel from "../Carousel";


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
height:100%;
display: flex;
flex: 1;
flex-direction: row;
justify-content: space-evenly;
align-items: center;
`

const ImgHolder = styled.div`
width:50%;
overflow: hidden;
min-height:100%;
`

const CarouselHolder = styled.div`
padding:10%;
display: flex;
flex-direction:row;
align-items: center;
justify-content: space-between;
width:100%;
height: auto;
overflow-x: scroll;
overflow-y:hidden;
width: 300px;
white-space: nowrap;
`

export default function Body(){
    return(
        <Fragment>
            <Container>
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
            <CarouselHolder>
                <Carousel data={data}/>
            </CarouselHolder>
        </Fragment>
    )
}