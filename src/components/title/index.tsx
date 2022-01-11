import React, { HtmlHTMLAttributes } from "react"

import {
  Title
} from "./styles"

interface IProps extends HtmlHTMLAttributes<HTMLElement> {
  afterWidth?: number;
}


const TitleComponent: React.FC<IProps> = (props) => {
  return <Title {...props}>{props.children}</Title>
}

export default TitleComponent;