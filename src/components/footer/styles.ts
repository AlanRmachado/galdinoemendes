import styled from "styled-components";

interface IBlocks {
  color?: string;
}

export const ColumnContent = styled.div`
  display: flex;
  flex-direction: column;
  padding-left: 10px;
  >h2{
    color: #fff;
    font-size: .875rem;
    margin-bottom: 8px;
    font-weight: 300
  }
  >span{
    color: rgba(255, 255, 255, .5);
    font-size: .75rem;
  }

  @media (max-width:700px){
    padding-left: 0;
    
    #container__socials{
      justify-content: space-around;
      align-items:center;      
    }
    .iconFooter{
      margin-right: 0 !important;
    }
  }

  .iconFooter{
    cursor:pointer;  
    margin-right:20px;
  }
  #container__socials{
    width: 100%;
    display: flex;   
  }

`

export const Container = styled.div`
  width: 100%;
  max-width: 100%;
  padding: 20px;
  background: ${props => props.theme.colors.darkSilver}; 
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  
  .footer__bottom__container{
    display: flex;
    justify-content: flex-end;
    align-items: center;
    
    width: 100%;
  }
`

export const TopFooter = styled.div`
  width: 100%;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  
  >div{
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
  }

  @media (max-width:700px){
    grid-template-columns: 1fr;

    >div{
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;
    margin-bottom: 20px;
    text-align:center;
    >svg{
      margin-bottom: 6px;
    }
  }
  }
`