import { ThemeProvider, createGlobalStyle } from 'styled-components';
import { CustomBut, ThemeDarkBut } from '../styles/Buttons';

const theme = {
  dark: {
    primary: '#000',
    text: '#fff',
  },
  light: {
    text: '#000',
    primary: '#fff',
  },
};

const GlobalStyle = createGlobalStyle`
  button {
font-family: Impact, Haettenschweiler, 'Arial Narrow Bold', sans-serif;
font-size: 32px;
//свойства имеют более низкий приоритет, по сравнению с собственными
  }  
`;

function ButtonList() {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <CustomBut>About</CustomBut>
      <ThemeDarkBut>About</ThemeDarkBut>
    </ThemeProvider>
  );
}

export default ButtonList;
