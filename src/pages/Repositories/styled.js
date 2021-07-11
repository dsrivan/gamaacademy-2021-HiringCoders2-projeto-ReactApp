import styled from 'styled-components';

import { Link } from 'react-router-dom';

export const Container = styled.div`
    width: 100%;
    max-width: 991px;
    margin: 0 auto;
`;

export const Title = styled.h1`
    text-align: center;
    font-size: 2rem;
    font-family: sans-serif;
    background: linear-gradient(45deg, deeppink,darkviolet);
    color: #fff;
    padding: 10px 0;
    border-radius: 4px;
    `;

export const List = styled.ul`
    list-style: none;
    padding: 0;
    margin: 0;
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

export const ListItemIcon = styled.span`
    display: inline-block;
    transform: rotate(90deg);
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