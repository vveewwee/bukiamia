import React, { useEffect, useState} from "react";
import Media from "react-media";
import styled from "styled-components";
import colors from "../../style/colors";
import imgMenu from "../../assets/photos/menu.png";
import imgMenuH from "../../assets/photos/menuH.png";
import imgWine from "../../assets/photos/wine.png";
import imgWineH from "../../assets/photos/wineH.png";
import backgroundImg from "../../assets/photos/background.png"
import { device } from "../../style/size";
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import { faXmark, faBars } from "@fortawesome/free-solid-svg-icons";
//import './card.css';

//square holder of info and button with menu
//depending on the theme, the menu, text, and button 
//should be different pass through PROPS from BODY component


//Container holding the menu and wine card
const StyledContainer = styled.div`
width:50%;
height:100%;
display: flex;
flex-direction: column;
align-items:center;
justify-content: center;
text-align: center;
@media ${device.tabletL} {
        height:50vh;
        width:100%;
    }
`

const Button = styled.div`
border: 2px solid;
padding:1%;
&:hover {
    filter: opacity(0.5);
    drop-shadow:
    cursor: pointer;
  }
`
//Modal with menu and wine menu

const Section = styled.section`
background-image: url(${backgroundImg});
z-index:2;
position:fixed;
width:100%;
height: 100vh;
top:0%;
object-fit: contain;
align-items: center;
justify-content:center;
margin-left: ${props => props.format === "wine" ? "50%" : "0%"};
margin-right: ${props => props.format === "menu" ? "50%" : "0%"};
@media ${device.tabletL} {
        margin-left:0%;
        margin-right:0%;
    }
`

const MenuImg = styled.img`
width:80%;
z-index: 2;
@media ${device.tabletL} {
        height:100vh;
    }
`

const Paragraph = styled.p`
font-size: 1.2rem;
font-width: 300;
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
                    {theme === "menu" ? (<Paragraph> Open Monday - Saturday <br/> 16h00 - 00h00 </Paragraph>):
                                        ( <Paragraph>Wine carefully selected and imported by us</Paragraph>)}
                    <Button className="buttonMenu" onClick={handleShow} style={theme === "menu" ? ({borderColor: `${colors.secondary}`}):
                                        ({borderColor: `${colors.primary}`})}>{theme}</Button>
                    <Section format={theme} style={show ? ({display: "flex"}):({display: "none"})} onClick={handleShow}>
                    
                        <Media queries={device}>
                            {matches => (
                                matches.tabletL ? ( <MenuImg src={theme === "menu" ? (imgMenuH):(imgWineH)} alt="menu"/>) :
                                ( <MenuImg src={theme === "menu" ? (imgMenu):(imgWine)} alt="menu"/>)
                            )}
                        </Media>
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
           {show ? (<FontAwesomeIcon onClick={()=> setShow(false)} icon={faXmark} size="2x" style={{zIndex:"4", color:`${colors.background}`, display: "block", position: "absolute", top:"10%", marginLeft: "70%"}}/>):(<FontAwesomeIcon onClick={()=> setShow(false)} icon={faBars} style={{display:"none"}}/>)}
            className={theme === "menu" ? ("menuContainer") : ("wineContainer")}
            */
