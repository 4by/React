import styled from 'styled-components';

export const CustomBut = styled.button`
  border: 2px solid white;
  border-radius: 30px;
  background-color: ${(props) => (props.variant === 'outline' ? '#FFF' : '#ff0000')};
  padding: 15px 32px;
  text-align: center;
  text-decoration: peru;
  display: inline-block;
  font-size: 16px;
  cursor: pointer;
  transition: 0.5s all ease-out;
&:active{
background-color: ${(props) => (props.variant !== 'outline' ? '#1eff00' : '#0400ff')};
color: ${(props) => (props.variant !== 'outline' ? '#0400ff' : '#1eff00')};
};
`;

export const SubmitBut = styled(CustomBut).attrs({
  type: 'submit',
})`
  box-shadow: 0 9px #999;
`;

export const ThemeDarkBut = styled.button`
background-color: ${(props) => props.theme.dark.primary};
color: ${(props) => props.theme.dark.text};

    `;
