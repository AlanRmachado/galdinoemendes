import React, { useEffect, useState } from "react"
import Logo from "../../assets/logo.png"
import Button from "../button"

import {
  Container,
  LogoContainer,
  Nav,
  Link,
  ContainerMenu
} from "./styles"

import { IoMenuOutline } from "react-icons/io5"

interface IProps {
  activeMenu?: string;
  sectionsPosition: sectionsPosition
  colorMenu?: string
}

type sectionsPosition = {
  SERVICES: number,
  ABOUT: number,
  CONTACT: number
}

const Header: React.FC<IProps> = ({ activeMenu, sectionsPosition, colorMenu }) => {

  const [showMobileMenu, setShowMobileMenu] = useState<boolean>(true);
  const [isMenuOpen, setIsMenuOpen] = useState<boolean>(false);
  const [sections, setSections] = useState<sectionsPosition>({} as sectionsPosition);

  useEffect(() => {
    setSections(sectionsPosition);
  }, [sectionsPosition])

  useEffect(() => {
    setSize();
  }, [window.innerWidth])


  function toggleMenu() {
    setIsMenuOpen(old => !old);
  }

  function setSize() {
    if (window.innerWidth < 777) {
      setShowMobileMenu(true);
    } else {
      setShowMobileMenu(false);
    }
  }

  function scroll(section: string) {
    if (isMenuOpen) setIsMenuOpen(false);

    window.scroll({
      top: getTop(section),
      left: 0,
      behavior: "smooth"
    });
  }


  function getTop(section: string) {
    if (!section) return 0;
    if (section === "SERVICES") return sections.SERVICES;
    if (section === "ABOUT") return sections.ABOUT;
    if (section === "CONTACT") return sections.CONTACT;
  }



  if (!showMobileMenu) {
    return (
      <Container isMenuOpen={false} colorMenu={colorMenu}>
        <LogoContainer>
          <img src={Logo} />
        </LogoContainer>
        <Nav>
          <Link onClick={() => scroll("SERVICES")} activeMenu={activeMenu && (activeMenu === "SERVICES") ? true : false}>SERVIÇOS</Link>
          <Link onClick={() => scroll("ABOUT")} activeMenu={activeMenu && (activeMenu === "ABOUT") ? true : false}>QUEM SOMOS</Link>
          <Link onClick={() => scroll("CONTACT")} activeMenu={activeMenu && (activeMenu === "CONTACT") ? true : false}>FALE CONOSCO</Link>
          <Button onClick={() => scroll("CONTACT")} label={"AGENDE SUA VISITA"} labelColor={"#000"} color={"#D4AA71"} />
        </Nav>
      </Container>
    )
  } else {
    return (
      <Container isMenuOpen={isMenuOpen} colorMenu={colorMenu}>
        <LogoContainer>
          <img src={Logo} />
        </LogoContainer>
        <div className={`menu-btn  ${isMenuOpen ? "open" : ""}`} onClick={toggleMenu}>
          <div className={`menu-btn__hamburger`}></div>
        </div>
        <ContainerMenu heightMenu={isMenuOpen ? 300 : 0}>
          <Link onClick={() => scroll("SERVICES")} activeMenu={activeMenu && (activeMenu === "SERVICES") ? true : false}>SERVIÇOS</Link>
          <Link onClick={() => scroll("ABOUT")} activeMenu={activeMenu && (activeMenu === "ABOUT") ? true : false}>QUEM SOMOS</Link>
          <Link onClick={() => scroll("CONTACT")} activeMenu={activeMenu && (activeMenu === "CONTACT") ? true : false}>FALE CONOSCO</Link>
          <Button onClick={() => scroll("CONTACT")} label={"AGENDE SUA VISITA"} labelColor={"#000"} color={"#D4AA71"} />
        </ContainerMenu>
      </Container>
    )
  }




}

export default React.memo(Header);