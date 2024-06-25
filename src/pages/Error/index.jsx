import React, { Fragment } from "react";
import styled from 'styled-components';
import error from "../../assets/photos/error1.png";
//import { device } from "../../style";

const MainContainer = styled.div`
display: flex;
flex-direction: column;
justify-content:center;
align-items: center;
margin:5%;
`

const ErrorImg = styled.img`
width:50%;
`

const ErrorMessage = styled.p`
text-align:center;
font-size: 1 vh;
`

export default function Error(){
    return(
        <Fragment>
            <MainContainer>
                <ErrorImg src={error} alt="404 error message"/>
                <ErrorMessage>
                    Oups! The page you are looking for doesn't exist.
                </ErrorMessage>
            </MainContainer>
        </Fragment>
    )
}