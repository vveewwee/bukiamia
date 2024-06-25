import React, {Fragment} from "react";
import { Link } from "react-router-dom";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import Body from "../../components/Body";
import styled from "styled-components";
import colors from "../../style/colors";
import { device } from "../../style/size";

const MainContainer = styled.div`
width: 100%;
height: auto;
display:flex;
flex-direction: column;
justify-content: center;
align-items: center;
`
export default function Home(){
    return(
        <Fragment>
            <MainContainer>
                <Header/>
                <Body/>
                <Footer/>
            </MainContainer>
        </Fragment>
    )
}


//<Footer/>