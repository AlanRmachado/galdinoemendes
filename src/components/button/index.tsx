import React from 'react';

import {
  ButtonContainer
} from "./styles"


interface IButton extends React.HTMLAttributes<HTMLButtonElement> {
  color?: string;
  label?: string;
  labelColor?: string;
  onClick: () => void
}


const Button: React.FC<IButton> = (props) => {
  return (
    <ButtonContainer color={props.color} labelColor={props.labelColor} onClick={props.onClick}>
      <span>{props.label}</span>
    </ButtonContainer>
  );
}

export default Button;
