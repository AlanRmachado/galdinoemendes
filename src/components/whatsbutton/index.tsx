import React, { useEffect } from "react"


import { IoLogoWhatsapp } from "react-icons/io5"



import {
  Container,
} from "./styles"


const WhatsButtom: React.FC = () => {
  return (
    <Container href="https://wa.me/5511911891257" target={"_blank"}>
      <IoLogoWhatsapp size={30} color="#fff" />
    </Container>
  )
}

export default React.memo(WhatsButtom);