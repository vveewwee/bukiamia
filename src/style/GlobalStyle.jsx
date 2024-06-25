import React from "react";
import { createGlobalStyle } from "styled-components";
import colors from "./colors";

const StyleGlobalStyle = createGlobalStyle`
* {
    font-family: Archivo, Helvetica, sans-serif;
}

body{
    color: ${colors.primary};
    margin: 0;
}
`

export default function GlobalStyle(){
    return <StyleGlobalStyle/>
}