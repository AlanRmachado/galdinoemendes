import styled from "styled-components";

interface IProps {
  afterWidth?: number
}

export const Title = styled.h1<IProps>`
  font-size: 1.75rem;
  align-items: center;
  text-align: center;
  margin-bottom: 60px;
  
  &:after{
    content: "";
    width: 200px;
    height: 1px;
    display: block;
    background-color: ${props => props.theme.colors.primary};
    margin: 16px auto;

    ${({ afterWidth }) => {
    if (afterWidth) return `width:${afterWidth}px`
  }}

  }
`