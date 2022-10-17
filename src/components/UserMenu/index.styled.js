import styled from 'styled-components';

export const Box = styled.div`
display: flex;
align-items:baseline;

`


 export const UserEmail = styled.p`
    margin: 0px;
    margin-right: 10px;
    font-family: Roboto;
    font-style: 900;
    font-size: 20px;
    line-height: 20px;
`


export const Button = styled.button`

    font-family: Roboto;
    font-style: 900;
    font-size: 16px;
    line-height: 16px;
    background-color: #2196F3;
    color: #000000;
    padding: 15px 30px 15px 30px;
    border-radius: 5px;
    border: none;
    cursor: pointer;
    margin: 0 auto;
    display: block;

        &:hover{
        background-color: #006dc7;
    }
`;