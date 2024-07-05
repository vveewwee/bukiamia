import React, { useState, useEffect, useRef } from "react";
import styled from "styled-components";
import data from "../../data/carousel.json"
import { device } from "../../style/size";

const TallOuterContainer = styled.div.attrs(({ dynamiqueheight }) => ({
  style: { height: `${dynamiqueheight}px` }
}))`
  position: relative;
  width: 100%;
`;

const StickyInnerContainer = styled.div`
  position: sticky;
  top: 0;
  height: 100vh;
  width: 100%;
  overflow-x: hidden;
`;

const HorizontalTranslateContainer = styled.div.attrs(({ translatex }) => ({
  style: { transform: `translateX(${translatex}px)` }
}))`
  position: absolute;
  height: 100%;
  will-change: transform;
`;

const calcdynamiqueheight = objectWidth => {
  const vw = window.innerWidth;
  const vh = window.innerHeight;
  return objectWidth - vw + vh + 150;
};

const handledynamiqueheight = (ref, setdynamiqueheight) => {
  const objectWidth = ref.current.scrollWidth;
  const dynamiqueheight = calcdynamiqueheight(objectWidth);
  setdynamiqueheight(dynamiqueheight);
};

const applyScrollListener = (ref, settranslatex) => {
  window.addEventListener("scroll", () => {
    const offsetTop = -ref.current.offsetTop;
    offsetTop ? settranslatex(offsetTop) : settranslatex(0);
  });
};

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
margin: 2%;
height: 70%;
@media ${device.tabletL} {
        margin:5%;
        width: 100%;
        height:auto;
    }  
`

export default function Car({ children }) {
  const [dynamiqueheight, setdynamiqueheight] = useState(null);
  const [translatex, settranslatex] = useState(0);

  const containerRef = useRef(null);
  const objectRef = useRef(null);

  const resizeHandler = () => {
    handledynamiqueheight(objectRef, setdynamiqueheight);
  };

  useEffect(() => {
    handledynamiqueheight(objectRef, setdynamiqueheight);
    window.addEventListener("resize", resizeHandler);
    applyScrollListener(containerRef, settranslatex);
  }, []);

  return (



    <HorizontalSection>
    <TallOuterContainer dynamiqueheight={dynamiqueheight}>
      <StickyInnerContainer ref={containerRef}>
        <HorizontalTranslateContainer translatex={translatex} ref={objectRef}>
        <CardsContainer>
          {data.map((item, index) => {
                    return <PhotoCard src={item.src} alt={item.alt} key={index}/>
                })}
          </CardsContainer>
        </HorizontalTranslateContainer>
      </StickyInnerContainer>
    </TallOuterContainer>
    </HorizontalSection>
  );
};
