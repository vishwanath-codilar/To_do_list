import styled from 'styled-components';

const FilterTab = styled.div`
    display: flex;
    justify-content: space-between;
    background: ${({ theme }) => theme.formBackground};
    color: ${({ theme }) => theme.text};
    padding: 1.2rem;
    font-size: 14px;
    transition: all 0.25s;
    border-bottom-left-radius: 5px;
    border-bottom-right-radius: 5px;

    p {
        transition: .1s ease-in-out;
    }

    #all, #active, #complete {
        color: #3A7CFD;
    }

    .items-middle {
        display: flex;
        margin-left: 2.5rem;
    }

    .items-left p {
        cursor: initial;
    }

    .items-middle p {
       font-weight: 700;
       margin: 0 0.6rem;
    }

    .items-middle p:hover, .items-right p:hover {
        color: ${({ theme }) => theme.filterTabHover};
    }
 
`;

export {FilterTab};