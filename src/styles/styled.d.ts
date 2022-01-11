import "styled-components";

declare module "styled-components" {
  export interface DefaultTheme {
    title: string,
    colors: {
      primary: string,
      silverBG: string,
      second: string,
      white: string,
      black: string,
      darkSilver: string,
      silverChumbo: string,
      menuColor: string;
      lightGreen: string;
      darkGreen: string;
    },
    font: string
  }
}