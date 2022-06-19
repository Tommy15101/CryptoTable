import styled from 'styled-components';

export const TableRow = styled.tr`
        text-align: center;
        font-size: 18px;
        letter-spacing: 3px;
        background-color: #d4c5ff;
        td {
            color: navy;
            font-weight: 500;
        }
        button {
            cursor: pointer;
            padding: 5px;
            font-weight: bold;
            font-size: 18px;
            color: aliceblue;
            background-color: navy;
            border-radius: 8px;
            transition: all .2s ease;
            &:hover {
                transform: scale(1.1);
                color: navy;
                background-color: aliceblue;
        }
    }
`