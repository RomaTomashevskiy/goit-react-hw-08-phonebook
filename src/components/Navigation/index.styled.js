import styled from "styled-components";
import { NavLink } from "react-router-dom";


export const Container = styled.div`

    margin:0 auto;
`;


export const Header = styled.header`
    padding:15px;
   
    border-bottom:1px solid black;
    border-radius:1px;
`;


export const Title = styled.h1`
    margin:0;
    color: #2196F3;
`;


export const Nav = styled.nav`
    display: flex;
    justify-content: space-between;
`;


export const Link = styled(NavLink)`
    display: inline-block;
    font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol";
    font-size: 1.5rem;
    line-height: 1.5;
    letter-spacing: 0.1px;
    color: rgb(33, 33, 33);
    font-weight: 700;
    text-decoration:none;

 

    &:not(last-child){
        margin-right:100px;
    }

    &:hover {
    color: #2196F3;
   }
   
   &.active {
    color: #2196F3;
   }

`;