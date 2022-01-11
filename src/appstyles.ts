import styled, { keyframes } from "styled-components"
import SecBG from "./assets/home1.png"




export const SectionHome = styled.section`
  width: 100%;
  max-width: 100%;
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;  
  background: url(${SecBG}) no-repeat center center fixed; 
  -webkit-background-size: cover;
  -moz-background-size: cover;
  -o-background-size: cover;
  background-size: cover;
  >h2{
    text-align: center;
    color : #fff;
    font-weight: 400;
    line-height: 50px;
    font-size: 2.265rem;
    >span{
      color: ${props => props.theme.colors.primary}
    }   
  }


  .lastTitle:after{
    content: "";
    width: 200px;
    height: 1px;
    display: block;
    background-color: ${props => props.theme.colors.primary};
    margin: 16px auto;
  }
 
`

export const ResponsiveContainerImg = styled.div`
  >img{
    max-width: 100%;
  }
  @media (max-width: 777px){  
   display:none
  }
`

export const AboutContainer = styled.div`
  padding: 0 20px;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
`

export const TextAbout = styled.p`
color: rgba(0,0,0,.8);
  font-size: 1rem;
  line-height: 28px;
  margin-bottom: 10px;
  font-weight: 300;
`

export const SectionAbout = styled.div`
  width: 100%;
  max-width: 100%;
  display: grid;
  grid-template-columns: 1fr 1fr;  
  margin-top: 60px;
  align-items: center;
  @media (max-width: 777px){  
    grid-template-columns: 1fr; 
  }
`







export const SectionServicos = styled.section`
  width: 100%;
  max-width: 100%;
  display: flex;
  flex-direction: column;
 
  padding: 60px 0;
  background-color: ${props => props.theme.colors.silverBG};
  >h1{
    font-size: 1.75rem;
    align-items: center;
    text-align: center;
    margin-bottom: 60px;
  }
  >h1:after{
    content: "";
    width: 200px;
    height: 1px;
    display: block;
    background-color: ${props => props.theme.colors.primary};
    margin: 16px auto;
  }
`

export const ContainerSectionContact = styled.section`
  width: 100%;
  max-width: 100%; 
  margin-top: 60px;

  background-color: ${props => props.theme.colors.silverBG};
  padding: 60px 0;
`

export const SectionContact = styled.section`
  width: 100%;
  max-width: 100%; 
  justify-content: center;
  align-items: center;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  background-color: ${props => props.theme.colors.silverBG};
  @media (max-width: 850px){
    grid-template-columns: 1fr;
  }
`




export const Footer = styled.footer`
  width: 100%;
  max-width: 100%;
  padding: 20px;
  background: ${props => props.theme.colors.darkSilver}; 
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`
export const TopFooter = styled.div`
  width: 100%;
  max-width: 100%;
  display: grid;
  grid-template-columns: repeat(3, 1fr);

  .item{
    justify-self: center;
  }
`


const AnimaArrow = keyframes`
  from{
    transform: translateY(-30px)
  }to{
    transform: translateY(0px)
  }
`


export const ContainerArrow = styled.div`
  position: absolute;
  bottom: 20px;
  align-self: center;
  cursor: pointer;
  animation-name: ${AnimaArrow};
  animation-duration: .4s;
  animation-iteration-count: infinite;
  animation-timing-function: ease-in;
  animation-direction: alternate
`


