import styled from "styled-components";
import theme from "styled-theming";

const todoBorder = theme("theme", {
  light: 'thin solid #e4e5f1',
  dark: 'thin solid #4d5066',
});

export const TodoItemContainer = styled.div`
  border-bottom: ${todoBorder};
`;

const backgroundColor = theme("theme", {
  light: '#FAFAFA',
  dark: "#161722",
});

const backgroundMainSectionColor = theme("theme", {
  light: 'white',
  dark: "#25273c",
});
const mainSectionShadow = theme("theme", {
  light: '0rem 0.5rem 3rem #999',
  dark: 'none',
});
export const MainSectionContainer = styled.div`
  background-color: ${backgroundMainSectionColor};
  box-shadow: ${mainSectionShadow};
  border-radius:5px;
`;
export const Input = styled.input`
background-color: ${backgroundMainSectionColor};
`;

const footerTextColor = theme("theme", {
  light: "#9394A5",
  dark: "#9394A4",
});
export const FooterContainer = styled.div`
 color: ${footerTextColor}
`;

const textColor = theme("theme", {
  light: "#484B6A",
  dark: "#CACDE8",
});

const backgroundImage = theme("theme", {
  light: 'url(https://todo-list-dev.vercel.app/images/bg-desktop-light.jpg)',
  dark: 'url(https://todo-app-frontendmentor-ii.vercel.app/images/bg-desktop-dark.jpg)',
});

export const FiltersContainer =styled.ul`
@media only screen and (max-width :500px){
  background-color: ${backgroundMainSectionColor};
  box-shadow: ${mainSectionShadow};
  border-radius: 5px;
  
}
`;
export const Container = styled.div`
  background-image: ${backgroundImage};
  color: ${textColor};
  background-color: ${backgroundColor};
  background-repeat: no-repeat;
  background-size: 100% auto;
  min-height: 100vh;
  text-align: center;
  @media only screen and (max-width :500px){
   
    background-size: auto 20vh;
 
    }
`;