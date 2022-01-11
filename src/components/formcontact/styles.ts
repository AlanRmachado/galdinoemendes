import styled from "styled-components"

export const Form = styled.form`
  margin: 0 auto;
  width: 400px;
  display: flex;  
  flex-direction: column;

  align-items: center;  

  >input, textarea{
    font-family: ${props => props.theme.font};
  }

  >input[type="text"], textarea{
    width: 400px;
    margin-top: 20px;
    border: 1px solid rgba(0,0,0,.1);
    font-weight: 200;
    border-radius: 3px;
    padding: 10px;
  }
  >input[type="text"]{   
    margin-top: 20px;
    outline: none;
  }
  >textarea{
    min-height: 200px
    max-height: 200px;
    height: 120px;
    outline: none;
  }
  >input[type="submit"]{
    padding: 10px;
    border: none;
    border-radius: 20px;
    background: ${props => props.theme.colors.second}; 
    width: 140px;   
    margin-top: 20px;
    align-self: flex-start;
    cursor: pointer;
    transition: all .7s;
    &:hover{
      background: ${props => props.theme.colors.primary};
    }
  }
  >span{
    color: red;
    padding: 0;
    margin: 5px 0;
    align-self: flex-start;
    font-size: .625rem;  
  }
`