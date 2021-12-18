import styled from 'styled-components';

    const Form = styled.form`
    margin-bottom: 1.5rem;
    padding: 0.75rem 3rem;
    border-radius: 5px;
    background: ${({ theme }) => theme.formBackground};
    box-shadow: ${({ theme }) => theme.boxShadow};
    `;

    const Input = styled.input`
    position: absolute;
    opacity: 0;
    cursor: pointer;
    height: 0;
    width: 0;
     
`;

const InputSpan = styled.input`
    position: absolute;
    top: 17px;
    left: 20px;
    height: 25px;
    width: 25px;
    border: 1px solid ${({ theme }) => theme.inputBorder};
    border-radius: 50%;
    cursor: pointer;
    outline: none;
    background: none;
`;

const InputText = styled.input`
    width: 90%;
    outline: none;
    border: none;
    padding: 0.5rem 0;
    font-size: 18px;
    background: ${({ theme }) => theme.formBackground};
    color: ${({ theme }) => theme.inputColor}
`;

const Submit = styled.input`
    display: none;
`;


export {Form, Input, InputSpan, InputText, Submit};