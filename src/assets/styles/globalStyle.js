import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
a{
	text-decoration: none;
	cursor: pointer;
	color: black;
}
*{
	box-sizing: border-box;
}
*{
	font-family: monospace;
}
body{
        
        top:0;
        bottom:0;
        left: 0;
        right: 0;
    }
    .root{
        width: 100%;
        height: 100%;
		position:absolute;
    }
`

export default GlobalStyle;