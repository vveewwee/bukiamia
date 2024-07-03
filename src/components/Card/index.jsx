import React, { useEffect, useState} from "react";
import styled from "styled-components";
import colors from "../../style/colors";
import imgMenu from "../../assets/photos/menu.png";
import imgWine from "../../assets/photos/wine.png";
import backgroundImg from "../../assets/photos/background.png"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faXmark, faBars } from "@fortawesome/free-solid-svg-icons";
import { device } from "../../style/size";


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
@media ${device.tabletL} {
        height:50vh;
        width:100%;
    }
`

const Button = styled.div`
border: 2px solid;
 padding:1%;
 cursonr:pointer;
`
//Modal with menu and wine menu

const Section = styled.section`
background-image: url(${backgroundImg});
z-index:1;
position:fixed;
width:100%;
height: 100vh;
top:0%;
object-fit: contain;
align-items: center;
justify-content:center;
margin-left: ${props => props.format === "wine" ? "50%" : "0%"};
margin-right: ${props => props.format === "menu" ? "50%" : "0%"};
`


export default function Card({theme}){
    //hook for changing hidden elements display
    const [show, setShow] = useState(false);
    const handleShow = () => setShow(!show);
    useEffect(()=> {
        show ? (document.body.style.overflow = 'hidden') : (document.body.style.overflow = 'unset')
    }, [show]);

    return (
                <StyledContainer style={theme === "menu" ? ({backgroundColor: `${colors.primary}` , color:`${colors.secondary}`}) : ({backgroundColor: `${colors.secondary}`})}>
                    {theme === "menu" ? (<p> Some stuff here </p>):
                                        ( <p>Wine and stuff here</p>)}
                    <Button onClick={handleShow} style={theme === "menu" ? ({borderColor: `${colors.secondary}`}):
                                        ({borderColor: `${colors.primary}`})}>{theme}</Button>
                    <Section format={theme} style={show ? ({display: "flex"}):({display: "none"})}>
                        {show ? (<FontAwesomeIcon onClick={()=> setShow(false)} icon={faXmark} size="2x" style={{zIndex:"4", color:`${colors.primary}`, display: "block", position: "fixed", top:"7%", marginLeft: "70%"}}/>):(<FontAwesomeIcon onClick={()=> setShow(false)} icon={faBars} style={{display:"none"}}/>)}
                        <img src={theme === "menu" ? (imgMenu):(imgWine)} style={{width:"80%", zIndex:"2"}} alt="menu"/>
                    </Section>
                </StyledContainer>
    )
}

/*{theme === 'prime' ? (
                <Container bodyAttributes={{style: `background-color=${colors.primary}`}}>
                    </Container>
            ) : (<Container bodyAttributes= {{style: `background-color=${colors.secondary}`}}>

            </Container>)}
            
            ()=> {show ? setShow(false): setShow(true)}
            */
