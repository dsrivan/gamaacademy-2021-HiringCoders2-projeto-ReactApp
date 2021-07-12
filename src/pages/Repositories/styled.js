import styled from 'styled-components';

import { Link } from 'react-router-dom';

export const Container = styled.div`
    width: 100%;
    max-width: 991px;
    margin: 0 auto;
`;

export const Title = styled.h1`
    /* text-align: center;
    background: linear-gradient(45deg, deeppink,darkviolet);
    color: #fff; */
    font-size: 2rem;
    font-family: sans-serif;
    border-radius: 4px;
    margin: 3rem 0 2rem 0;
    padding: 0.5rem;
    `;

export const List = styled.ul`
    list-style: none;
    padding: 0 .5rem;
    font-family: sans-serif;
    `;

export const ListItem = styled.li`
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin: .5rem 0;
    background: #f0f0f0;
    padding: 1.2rem .8rem;
    cursor: pointer;
    border-radius: 4px;
    transition: background .1s ease-in-out;

    &:hover {
        background: #e3e3e3;
    }
`;

export const ListItemIcon = styled.img`
    display: inline-block;
    width: 20px;
`;

export const LinkHome = styled(Link)`
    display: block;
    width: 6rem;
    text-align: center;
    margin: 2rem auto;
    background: linear-gradient(45deg, deeppink,darkviolet);
    padding: .5rem 0;
    color: #fff;
    text-decoration: none;
    border-radius: 4px;
`;

export const ErrorMessage = styled.span`
    display: block;
    font-size: 0.65rem;
    color: darkviolet;
    margin-top: 1rem;
    text-align: center;
    margin: 3rem 0 5rem 0;
`;