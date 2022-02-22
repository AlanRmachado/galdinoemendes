import styled from "styled-components";

interface IBlocks {
  color?: string;
}

export const Container = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 21.25rem); 

  justify-content: center;
  gap: 20px;

  @media (max-width: 1000px){  
    grid-template-columns: 1fr; 
  }
`

export const BlockContent = styled.div`
  padding: 25px;
  
  >p{
    font-size: 0.875rem;
    font-weight: 300;
    line-height: 24px;
    color: rgba(0,0,0,.8);
    text-align: justify;
  }
`

export const Blocks = styled.div<IBlocks>` 
  background-color: #fff;
  box-shadow: rgba(0, 0, 0, 0.05) 0px 0px 0px 1px;
  width: 100%;  
  position: relative;
  .iconService{
   position: absolute; 
   bottom:8px;
   right: 8px;
     ${({ color }) => {
    if (color)
      return `color:${color}`
  }}
  }
  
 > h2{
    text-transform: uppercase;
    margin: 26px 25px 0;
    color: rgba(0,0,0,.7);
    font-size: 1rem;
    font-weight: 500;
    &:after{
      content: "";
      display: block;
      width: 40px;
      height: 1px;
      background: ${props => props.theme.colors.second};
      margin-top: 10px;

      ${({ color }) => {
    if (color)
      return `background:${color}`
  }}
    }
  }


  &:before{
    content: "";    
    display: block;
    border-radius: 2px 2px 0 0;
    width: 100%;
    height: 2px;
    ${({ color }) => {
    if (color)
      return `background:${color}`
  }}
  }  
`