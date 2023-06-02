import { Link } from "react-router-dom"
import styled from "styled-components"

export const StyledButton = styled.button`
   padding: .7em;
   border-radius: 6px;
   border: none;
   min-width: 90px;
   background-color: #ae84d1;
   color: #fff;
   font-weight: 500;
   font-size: 1em;
   &:hover {
      background-color: #ae84d1bc;
      cursor: pointer;
    }
   &:active {
      background-color: #a673cf;
   }
`

export const CardButton = styled(StyledButton)`
   border-radius: 12px;
   padding: 8px;
   width: 150px;
   margin-block-start: 20px;
   background-color: #fff;
   color: #ae84d1;
   border: 1px solid #ae84d1;
   &:hover {
      background-color: #ae84d140;
      border: 1px solid #ae84d18c;
   }
   &:active{
      border: 1px solid #7e33bd;
      color: #7e33bd;
      background-color: #ae84d140;
   }
`
export const StyledResetButton = styled(StyledButton)`
   background-color: transparent;
   color: inherit;
   font-weight: 600;
   padding: .4em;
   border-radius: 6px;
   &:hover {
      background-color: #00000014;
   }
   &:active {
      background-color: #0000001e;
      color: #000000e5
   }
   @media (max-width: 500px) {
      font-size: .85em;
      padding: 4px 6px;
      height: 26px;
      min-width: 40px;
   }
`

export const StyledRemoveButton = styled(StyledButton)`
    border: 1px solid #ae84d1;
    color: #ae84d1;
    background-color: #fff;
        &:hover{
            color: #b592d1bb;
            border: 1px solid #b592d1bb;
            background-color: unset;
        }
        &:active{
            border: 1px solid #ae84d1;
            color: #ae84d1;
            background-color: unset;
        }
`

export const CallToActionButton = styled(StyledButton)`
    display: flex;
    align-items: center;
    justify-content: center;
    width: 150px;
    font-size: 1.1em;
    text-decoration: none;
`

export const StyledLink = styled(Link)`
    margin-block-start: .5em;   
    text-align: center;
`