import React, { useCallback, useEffect, useRef, useState } from 'react';
import Content from './components/content';
import Header from './components/header';
import Services from "./components/services"
import FormContact from "./components/formcontact"
import Whatsbutton from './components/whatsbutton';
import ImgSobre from "./assets/sobre.jpg"
import ImgContato from "./assets/contact.svg"
import Title from "./components/title"
import Footer from "./components/footer"

import { IoArrowDownCircleOutline } from "react-icons/io5"

import {
  SectionHome,
  SectionServicos,
  SectionAbout,
  ResponsiveContainerImg,
  AboutContainer,
  TextAbout,
  SectionContact,
  ContainerSectionContact,
  ContainerArrow
} from "./appstyles"

type TActiveMenu = {
  activeMenu: "SERVICES" | "ABOUT" | "CONTACT" | "HOME";
}

interface ISectionsPosition {
  SERVICES: number,
  ABOUT: number,
  CONTACT: number
}

function App() {
  const homeRef = useRef<any>(null);
  const aboutRef = useRef<any>(null);
  const servicesRef = useRef<any>(null);
  const contactRef = useRef<any>(null);

  const [activeMenu, setActiveMenu] = useState<TActiveMenu>({ activeMenu: "HOME" } as TActiveMenu);
  const [sectionsPositions, setSectionPosition] = useState<ISectionsPosition>({} as ISectionsPosition)
  const [colorMenu, setColorMenu] = useState<string>("rgba()")

  useEffect(() => {
    sePositions();
    window.addEventListener('scroll', onScroll);
    window.addEventListener("resize", sePositions, false);
    return () => {
      window.removeEventListener('scroll', onScroll);
      window.removeEventListener('resize', sePositions);
    }
  }, []);


  function sePositions() {

    const aboutPosition = aboutRef.current.offsetTop - 90;
    const servicesPosition = servicesRef.current.offsetTop - 80;
    const contactPosition = contactRef.current.offsetTop - 80;

    setSectionPosition({
      ABOUT: aboutPosition,
      SERVICES: servicesPosition,
      CONTACT: contactPosition
    });
  }


  function goToNextPage() {
    window.scroll({
      top: servicesRef.current.offsetTop - 80,
      left: 0,
      behavior: "smooth"
    });
  }



  const onScroll = useCallback((scroll) => {
    const scrollTop = window.pageYOffset;
    const aboutPosition = aboutRef.current.offsetTop - 120;
    const servicesPosition = servicesRef.current.offsetTop - 120;
    const contactPosition = contactRef.current.offsetTop - 120;

    if ((scrollTop > 200) && colorMenu !== "dark") {
      setColorMenu("dark")
    }

    if ((scrollTop < 200) && colorMenu !== "light") {
      setColorMenu("light")
    }

    if (scrollTop < servicesPosition) {
      return setActiveMenu({ activeMenu: "HOME" })
    }



    if (scrollTop > servicesPosition) {
      const scrollPlusHeight = scrollTop + servicesRef.current.getBoundingClientRect().height

      if (scrollTop < scrollPlusHeight) {
        setActiveMenu({ activeMenu: "SERVICES" });
      }
    }

    if (scrollTop > aboutPosition) {
      const scrollPlusHeight = scrollTop + aboutRef.current.getBoundingClientRect().height
      if (scrollTop < scrollPlusHeight) {
        setActiveMenu({ activeMenu: "ABOUT" });
      }
    }


    if (scrollTop > contactPosition) {
      const scrollPlusHeight = scrollTop + contactRef.current.getBoundingClientRect().height
      if (scrollTop < scrollPlusHeight) {
        setActiveMenu({ activeMenu: "CONTACT" });
      }
    }

  }, [])


  return (
    <Content>
      <Whatsbutton />
      <Header activeMenu={activeMenu.activeMenu} sectionsPosition={sectionsPositions} colorMenu={colorMenu} />
      <SectionHome id="home" ref={homeRef}>
        <h2>Especializada em assessoria,</h2>
        <h2 className={"lastTitle"}>consultoria <span>trabalhista</span> e <span>previdenciária</span></h2>
        <ContainerArrow onClick={goToNextPage}>
          <IoArrowDownCircleOutline size={46} color="#fff" />
        </ContainerArrow>
      </SectionHome>


      <SectionServicos id="services" ref={servicesRef}>
        <h1>SERVIÇOS PRESTADOS</h1>
        <Services />
      </SectionServicos>



      <SectionAbout id="about" ref={aboutRef}>
        <ResponsiveContainerImg>
          <img src={ImgSobre} />
        </ResponsiveContainerImg>
        <AboutContainer>
          <Title afterWidth={100} style={{ marginBottom: 16, textAlign: 'left' }}>SOBRE NÓS</Title>
          <TextAbout>
            Explicamos e solucionamos questões em relação à previdência pública (INSS) e privada, em âmbito administrativo, Serviços: Aposentadoria por tempo e Contribuição, Aposentadoria por Idade, Aposentadoria Especial (Insalubridade), Aposentadoria por Invalidez, Pensão por Morte e Auxílio Doença, Amparo Assistencial ao Idoso.
          </TextAbout>
          <TextAbout>
            Na Galdino & Mendes o cliente recebe atendimento diferenciado, sendo assim, receber seus benefícios da forma mais eficaz.
            A Legislação Previdenciária é complexa e sofre constantes mudanças. Por isso, estudar cada caso é fundamental para que o cliente tenha certeza de que recebeu o melhor benefício. Diversas duvidas dos clientes e, por essa razão, a Galdino & Mendes analisa cada caso com responsabilidade e ética, analisando a possibilidade de revisão, qual modalidade, se ainda existe prazo para buscar a revisão, entre outros serviços.
          </TextAbout>
          <TextAbout >
            Também solucionamos questões em relação à ação trabalhista, seus principais direitos do trabalhador brasileiro: Carteira de Trabalho Assinada, Jornada de Trabalho e Hora Extra, 13° Salário, Férias, FGTS, Seguro-desemprego, Vale Transporte, Licença-Maternidade, Aviso Prévio, Adicional noturno.
          </TextAbout>
        </AboutContainer>
      </SectionAbout>



      <ContainerSectionContact id="contact" ref={contactRef}>
        <Title afterWidth={100} style={{ marginTop: 20 }}>FALE CONOSCO</Title>
        <SectionContact>
          <FormContact />
          <ResponsiveContainerImg>
            <img src={ImgContato} />
          </ResponsiveContainerImg>
        </SectionContact>
      </ContainerSectionContact>

      <Footer id="footer" />

    </Content>
  );
}

export default App;
