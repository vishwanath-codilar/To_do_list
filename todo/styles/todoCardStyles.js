import styled from 'styled-components';
import iconCheck from '../images/icon-check.svg';

const TodoCard = styled.div`
    border-bottom: 1px solid${({ theme }) => theme.inputBorder};
    background: ${({ theme }) => theme.formBackground};
    padding: 1.2rem;
    font-size: 18px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    position: relative;
    color: ${({ theme }) => theme.cardColor};
    cursor: pointer;
    transition: all 0.25s;
`;
 
 
export {TodoCard};