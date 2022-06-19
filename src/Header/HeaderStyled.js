import styled from 'styled-components';

export const HeaderContainer = styled.div`
    width: 100vw;
    height: 20vh;
    display: grid;
    grid-template-columns: 1fr 1fr;
    background-color: navy;
`;
export const HeaderTitle = styled.h1`
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 40px;
    color: aliceblue;
    border-right: 2px solid aliceblue;
`;
export const BalanceContainer = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-evenly;
    border-left: 2px solid aliceblue;
`
export const HeaderBalance = styled.h2`
    font-size:30px;
    color: aliceblue;
`
export const BalanceButton = styled.button`
    padding: 12px;
    cursor: pointer;
    color: navy;
    font-weight: bolder;
    transition: all .2s ease;
    &:hover {
        transform: scale(1.1);
    }
`