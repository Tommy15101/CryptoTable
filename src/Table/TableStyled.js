import styled from 'styled-components';

export const TableWrapper = styled.div`
    width: 100vw;
    height: 80vh;
    background-color: aliceblue;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
`;

export const TableContainer = styled.table`
    width: 80%;
    height: 80%;
    border: 2px solid navy;
    border-radius: 8px;
    background-color: darkslategrey;
    th {
        color: aliceblue;
        font-size: 20px;
        text-decoration: underline;
        padding: 10px 0;
        background-color: darkblue;
    }
`