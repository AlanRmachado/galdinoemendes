import React, { useEffect } from "react"


import { IoLocationSharp, IoCall, IoTime, IoLogoWhatsapp, IoLogoInstagram, IoLogoFacebook } from "react-icons/io5"

import styled from "styled-components"

import {
  Container,
  TopFooter,
  ColumnContent
} from "./styles"

interface IProps {
  id?: any
}

const Footer: React.FC<IProps> = ({ id }) => {




  return (
    <Container id={id}>
      <TopFooter>
        <div>
          <IoLocationSharp color="#fff" size={26} />
          <ColumnContent>
            <h2>Nosso endereço</h2>
            <span>Rua Mário Lopes Leão, 660 - Sala 4 - St. Amaro - SP</span>
          </ColumnContent>
        </div>
        <div>
          <IoCall color="#fff" size={26} />
          <ColumnContent>
            <h2>Contatos</h2>
            <span><IoLogoWhatsapp /> 11 91189-1257</span>
            <span>&nbsp;</span>
            <span>(11) 5546-5582 - Ramal 227</span>
            <span>&nbsp;</span>
            <span>contato@galdinoemendes.com.br</span>
            <span>&nbsp;</span>
            <span id="container__socials">
              <a href="https://www.instagram.com/galdinoemendes" target={"_blank"}><IoLogoInstagram color="#fff" size={22} className="iconFooter" /></a>
              <a href="https://www.facebook.com/profile.php?id=100076718716682" target={"_blank"}><IoLogoFacebook color="#fff" size={22} className="iconFooter" /></a>
            </span>
          </ColumnContent>
        </div>
        <div>
          <IoTime color="#fff" size={26} />
          <ColumnContent>
            <h2>Horário de atendimento</h2>
            <span>9h às 17h</span>
          </ColumnContent>
        </div>
      </TopFooter>
      <div style={{ display: "flex", width: "100%", marginTop: 40 }}>
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3654.6840352252675!2d-46.7141968850478!3d-23.65148397081172!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94ce51aa792b1ab1%3A0x27964b300d1cf077!2sAv.%20M%C3%A1rio%20Lopes%20Le%C3%A3o%2C%20660%20-%20Santo%20Amaro%2C%20S%C3%A3o%20Paulo%20-%20SP%2C%2004754-010!5e0!3m2!1spt-BR!2sbr!4v1640963353565!5m2!1spt-BR!2sbr"
          style={{ display: "flex", flex: 1 }}
          loading="lazy">
        </iframe>
      </div>

    </Container>
  )
}

export default React.memo(Footer);