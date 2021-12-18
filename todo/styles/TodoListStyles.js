import styled from 'styled-components';

const TodoListWrapper = styled.div`
    margin: 0% 31%;
    text-align: center;
    position: relative;
    top: -8rem;

    .todolist-items {
        box-shadow: ${({ theme }) => theme.boxShadow};
    }

   
`;

 

export {TodoListWrapper};