import styled from 'styled-components';
import backgroundLight from '../images/bg-desktop-light.jpg';
import backgroundDark from '../images/bg-desktop-dark.jpg';

const Container = styled.div`
    background-image: url(${({ theme }) => theme.background});
    width: 100%;
    height: 285px;
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
    padding: 0% 31%;
    color: white;
    letter-spacing: 1rem;
    max-height: 100%;
    transition: all 0.25s;
`;

const HeaderWrapper = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding-top: 4rem;
    `;

const ToggleIcon = styled.div`
    background-image: url(${({ theme }) => theme.icon});
    height: 27px;
    width: 27px;
    background-size: cover;
    background-repeat: no-repeat;
    cursor: pointer;
    position: relative;
    top: -6px;
    `;



export {Container, HeaderWrapper, ToggleIcon};