import styled, { keyframes } from "styled-components";

interface IBlocks {
  color?: string;
}


const anima = keyframes`
  from{    
    right: -80px;
  }to{
    opacity: 1;
    right: 20px;
  }
`


export const Container = styled.a`
  opacity: 0;
  cursor: pointer;
  width: 50px;
  height: 50px;
  border-radius: 50%;
  background: ${props => props.theme.colors.lightGreen}; 
  display: flex;  
  align-items: center;
  justify-content: center;
  position: fixed;
  bottom: 22px;
  right: 20px;
  transition: all .7s;
  
  &:hover{
    background: ${props => props.theme.colors.darkGreen}; 
  };

  animation-name: ${anima};
  animation-duration: .4s;  
  animation-timing-function: ease-in;
  animation-fill-mode: forwards;
  z-index: 99999;
`

