import styled from "styled-components"

export const StyledButton = styled.button`
   padding: .7em;
   border-radius: 3px;
   border: none;
   background-color: #ae84d1;
   color: #fff;
   font-family: Arial, Helvetica, sans-serif;
   font-weight: 500;
   font-size: 1em;
   &:hover{
      background-color: #ae84d1bc;
      cursor: pointer;
    }
   &:active{
      background-color: #a673cf;
   }
`