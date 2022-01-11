import styled from "styled-components";


interface IButton {
  color?: string;
  labelColor?: string;
}

export const ButtonContainer = styled.div<IButton>`
  padding: 12px;
  border-radius: 20px;
  cursor: pointer;
  transition: all .7s;
  &:hover{
    background-color: ${props => props.theme.colors.primary};
  }

  ${({ color }) => {
    if (color)
      return ` background-color: #D4AA71;`;
  }}

${({ labelColor }) => {
    if (labelColor) {
      return `>span{color:${labelColor}}`;
    }
  }}

  >span{
    font-size: 1rem;
  }
`