import styled from "styled-components";



interface IProps {
  activeMenu?: boolean,
  heightMenu?: number,
  colorMenu?: string,
  isMenuOpen?: boolean;
}

export const Container = styled.header<IProps>`
  box-shadow:  0px 0px 10px  rgba(0,0,0,.6);
  transition: 1s;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  max-width: 100%;
  background-color: ${props => props.theme.colors.menuColor};
  height: 80px;
  position: fixed;
  top: 0;
  z-index: 999;
  padding: 0 20px;


  .menu-btn{
     width: 60px;
     height: 60px;
     position: relative;     
     display: flex;
     justify-content: center;
     align-items: center;
     cursor: pointer;
  }
  
  .menu-btn__hamburger{
    width: 45px;
    height: 4px;
    background: #fff;
    border-radius: 10px;
    position: relative;
    transition: all .7s ease-in-out;
  }

  .menu-btn__hamburger::before, .menu-btn__hamburger::after{
    content: "";
    display: block;
    width: 45px;
    height: 4px;
    background: #fff;
    border-radius: 10px;   
    position:absolute;   
    transition: all .7s ease-in-out;
  
  }
  .menu-btn__hamburger:before{
    transform: translateY(-12px);
  }
  .menu-btn__hamburger:after{
    transform: translateY(12px);
  }

  .menu-btn.open .menu-btn__hamburger{
    transform: translateX(-30px);
    background: transparent;
  }

  .menu-btn.open .menu-btn__hamburger:before{
    transform: rotate(45deg) translate(21px, -21px);    
  }

  .menu-btn.open .menu-btn__hamburger:after{
    transform: rotate(-45deg) translate(21px, 21px);    
  }

  
  /* >button{
    transition: all  .7s;    
    background: none;
    border:  none;
    border-radius: 12px;
    padding-top:  4px;
    cursor: pointer;
    &:hover{
      background: rgba(0,0,0,.3)
    }
  } */

  ${({ colorMenu, isMenuOpen }) => {
    if (colorMenu === "light" && isMenuOpen) {
      return `background: rgba(0,0,0,.9)`;
    }
    if (colorMenu === "light" && !isMenuOpen) {
      return `background: rgba(0,0,0,.3)`;
    }
    if (colorMenu === "dark") {
      return `background: rgba(0,0,0,.9)`;
    }
  }}  
  
`


export const LogoContainer = styled.div`
  width: 121px;
  >img{
     max-width: 100%;     
  }
`


export const Link = styled.a<IProps>`
  transition:  all .7s;
  color: #fff;
  text-decoration: none;   
  margin-right:20px;
  cursor: pointer;
  &:hover{
      color: ${props => props.theme.colors.primary};
  }

  ${(props) => {
    if (props.activeMenu) {
      return ` color: ${props.theme.colors.primary}`
    }
  }}
`

export const Nav = styled.nav`
  display: flex; 
  align-items: center; 
`


export const ContainerMenu = styled.nav<IProps>`
  overflow: hidden;
  transition: all  .7s;
  position: absolute; 
  top: 80px;
  width: 100%;
  height: ${props => props.heightMenu}px;
  z-index: 9999; 
  background: rgba(0,0,0,.9) ;
  left: 0;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;

  >a{
    margin-top: 20px;
  }
  >a:after{
    content: "";
    display:block;
    width: 300px;
    height:  1px;
    background:  rgba(255,255,255,.2);
    margin-top: 20px
  }
  >div{
    margin-top: 20px;
  }
`