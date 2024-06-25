import React, {Fragment, useState} from "react";
import styled from "styled-components";
import colors from "../../style/colors";
import imgMenu from "../../assets/photos/menu.png";
import imgWine from "../../assets/photos/wine.png";
import backgroundImg from "../../assets/photos/background.png"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faXmark, faBars } from "@fortawesome/free-solid-svg-icons";


//square holder of info and button with menu
//depending on the theme, the menu, text, and button 
//should be different pass through PROPS from BODY component


//Container holding the menu and wine card
const StyledContainer = styled.div`
width:50%;
display: flex;
flex-direction: column;
align-items:center;
justify-content: center;
`

const Button = styled.div`
border: 2px solid;
 padding:1%;
`
//Modal with menu and wine menu
//background-image: url(${backgroundImg});
const Section = styled.section`
position:fixed;
width:100%;
top:5%;
object-fit:cover;
align-items: center;
justify-content:center;
margin-left: ${props => props.format === "wine" ? "50%" : "0%"};
margin-right: ${props => props.format === "menu" ? "50%" : "0%"};
`


export default function Card({theme}){
    //hook for changing hidden elements display
    const [show, setShow] = useState(false);

    return (
        <Fragment>
                <StyledContainer style={theme === "menu" ? ({backgroundColor: `${colors.primary}` , color:`${colors.secondary}`}) : ({backgroundColor: `${colors.secondary}`})}>
                    {theme === "menu" ? (<p> Some stuff here </p>):
                                        ( <p>Wine and stuff here</p>)}
                    <Button onClick={()=> {show ? setShow(false): setShow(true)}} style={theme === "menu" ? ({borderColor: `${colors.secondary}`}):
                                        ({borderColor: `${colors.primary}`})}>{theme}</Button>
                    <Section format={theme} style={show ? ({display: "flex"}):({display: "none"})}>
                        {show ? (<FontAwesomeIcon onClick={()=> setShow(false)} icon={faXmark} size="2x" style={{color:`${colors.primary}`, display: "block", position: "fixed", top:"5%", marginLeft: "70%"}}/>):(<FontAwesomeIcon onClick={()=> setShow(false)} icon={faBars} style={{display:"none"}}/>)}
                        <img src={theme === "menu" ? (imgMenu):(imgWine)} style={{width:"80%"}}/>
                    </Section>
                </StyledContainer>
        </Fragment>
    )
}

/*{theme === 'prime' ? (
                <Container bodyAttributes={{style: `background-color=${colors.primary}`}}>
                    </Container>
            ) : (<Container bodyAttributes= {{style: `background-color=${colors.secondary}`}}>

            </Container>)}*/