import styled,{css} from "styled-components";

const buttonStyles = css `
    background-color: black;
	color: white;
    &:hover {
		background-color: white;
		color: black;
		border: 1px solid black;
	}
`;

const isGoogleSignInStyles = css `
    background-color: #4285f4;
	color: white;
    &:hover {
        background-color: #357ae8;
        border: none;
	}
`;

const invertedStyles = css `
    background-color: white;
    color: black;
    border: 1px solid black;
    &:hover {
        background-color: black;
        color: white;
        border: none;
	}
`;

const getButtonStyles = ({isGoogleSignIn, inverted}) => {
    if(isGoogleSignIn){
        return isGoogleSignInStyles;
    }

    return inverted ?  invertedStyles : buttonStyles;
}

export const CustomButtonContainer = styled.button `
    min-width: 165px;
	width: auto;
	height: 50px;
	letter-spacing: 0.5px;
	line-height: 50px;
	padding: 0 35px 0 35px;
	font-size: 15px;
    border: none;
	text-transform: uppercase;
	font-family: 'Open Sans Condensed', sans-serif;
	font-weight: bolder;
	
	cursor: pointer;
	display: flex;
	justify-content: center;
    
    ${getButtonStyles}
`;