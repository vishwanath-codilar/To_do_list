import darkModeIcon from '../images/icon-moon.svg';
import lightModeIcon from '../images/icon-sun.svg';
import backgroundLight from '../images/bg-desktop-light.jpg';
import backgroundDark from '../images/bg-desktop-dark.jpg';

export const lightTheme = {
    body: 'hsl(0, 0%, 98%)',
    text: '#9495A5',
    formBackground: '#fff',
    placeholderColor: '#9495A5',
    inputBorder: '#E3E4F1',
    inputColor: '#393A4B',
    icon: lightModeIcon,
    background: backgroundLight,
    cardColor: '#494C6B',
    completed: '#D1D2DA',
    filterTabHover: '#494C6B',
    boxShadow: '0px 35px 50px -15px #C2C3D6'
  }
  
  export const darkTheme = {
    body: '#171823',
    text: '#5B5E7E',
    formBackground: '#25273D',
    placeholderColor: '#767992',
    inputBorder: '#393A4B',
    inputColor: '#C8CBE7',
    icon: darkModeIcon,
    background: backgroundDark, 
    cardColor: '#C8CBE7',
    completed: '#4D5067',
    filterTabHover: '#E3E4F1',
    boxShadow:' 0px 35px 50px -15px #000'
  }