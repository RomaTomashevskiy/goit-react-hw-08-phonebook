import styled from "styled-components";


export const Box = styled.div`
    display:flex;
    justify-content: center;    
`
export const Form = styled.form`
    margin-top:100px;
`;

export const LabelName = styled.label`
    font-family: Roboto;
    font-style: Bold;
    Font-size: 36px;
    Line-height: 42px;
    Line-height: 100%;
    Letter-spacing: 3%;
`;

export const InputName = styled.input`
    margin-top: 15px;
    display: block;
    align-items: center;
    justify-content: center;
    padding: 5px 10px 5px 15px;
    border-radius: 5px;
    width: 500px;
    height: 50px;
    border: none;
    background-color: rgb(223, 222, 222);
    color: #000000;
`;

export const LabelEmail = styled.label`
    display: block;
    margin-top: 30px;
    font-family: Roboto;
    font-style: Bold;
    Font-size: 36px;
    Line-height: 42px;
    Line-height: 100%;
    Letter-spacing: 3%;
`;

export const InputEmail = styled.input`
    margin-top: 15px;
    margin-bottom: 15px;
    display: block;
    align-items: center;
    justify-content: center;
    padding: 5px 15px 5px 15px;
    width: 500px;
    height: 50px;
    border-radius: 5px;
    border: none;
    background-color: rgb(223, 222, 222);
    color: #000000;
`;

export const LabelPassword = styled.label`
    display: block;
    margin-top: 30px;
    font-family: Roboto;
    font-style: Bold;
    Font-size: 36px;
    Line-height: 42px;
    Line-height: 100%;
    Letter-spacing: 3%;
`;

export const InputPassword = styled.input`
    display:block;
    margin-top: 15px;
    margin-bottom: 15px;
    align-items: center;
    justify-content: center;
    padding: 5px 15px 5px 15px;
    width: 500px;
    height: 50px;
    border-radius: 5px;
    border: none;
    background-color: rgb(223, 222, 222);
    color: #000000;
`;



export const Button = styled.button`
    background-color: #2196F3;
    color: #000000;
    padding: 15px 50px 15px 50px;
    border-radius: 5px;
    border: none;
    cursor: pointer;
    margin: 0 auto;
    display: block;

   
    &:hover{
        background-color: #006dc7;
    }
`;
