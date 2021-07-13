import styled from 'styled-components';

import { Link } from 'react-router-dom';

export const FullContainer = styled.div`
    width: 100%;
    min-height: 100vh;
    margin: 0 auto;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    background-color: #eee;
    position: relative;
`;

export const Header = styled.div`
    background-color: #3752a2;
    width: 100%;
    min-height: 25vh;
    text-align: center;
    color: #fff;
`;

export const Title = styled.h1`
    font-weight: normal;
    font-size: 2.3rem;
    padding-top: 1.52rem;
`;

export const SubTitle = styled.span`
    font-size: 1.4rem;
    color: rgb(67, 143, 255);
    margin-left: .5rem;
`;

export const Container = styled.div`
    width: 100%;
    max-width: 991px;
    margin: 0 auto;
    flex: 1;
    padding-bottom: 2rem;
    transform: translateY(-3rem);

    @media (max-width: 768px) {
        transform: translateY(-2rem);
    }
`;

export const CardsContainer = styled.div`
    width: 100%;
    max-width: 991px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    gap: 2rem;
    padding: 0 .5rem;

    @media (max-width: 768px) {
        flex-direction: column;
        gap: 1rem;
    }
`;

export const Card = styled.div`
    display: inline-block;
    width: 33.3333%;
    height: 140px;
    padding: 2rem;
    background-color: #fff;
    border-radius: 6px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    position: relative;
    overflow: hidden;

@media (max-width: 768px) {
    width: 100%;
}
`;

export const CardTitle = styled.div`
    font-size: 1rem;
    z-index: 2;
`;

export const CardBody = styled.div`
    font-size: 1.6rem;
    z-index: 2;
    color: #3752a2;
`;

export const CardCorner = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    width: 60px;
    height: 60px;
    position: absolute;
    top: 1rem;
    right: 1rem;
    border-radius: 50%;
`;

export const CardImage = styled.img`
    display: inline-block;
    width: 30px;
    height: 30px;
`;

export const ContainerVoltar = styled.div`
    margin: 2.5rem .5rem 1rem;
    color: #3752a2;
    font-weight: bold;
`;

export const LinkHome = styled(Link)`
    background-color: #3752a2;
    color: #fff;
    padding: 1rem 2rem;
    border-radius: 5px;
    display: inline-block;
    text-decoration: none;
`;

export const List = styled.ul`
    list-style: none;
    padding: 0 .5rem;
    `;

export const ListItem = styled.li`
    display: flex;
    justify-content: space-between;
    background-color: #fff;
    align-items: center;
    margin: .7rem 0;
    padding: 1.2rem .8rem;
    cursor: pointer;
    border-radius: 4px;
    border: 1px solid #eee;
    transition: all .2s ease-in-out;

    &:hover {
        border-color: #cecece;
    }
`;

export const Footer = styled.div`
    width: 100%;
    min-height: 5vh;
    margin: 0 auto;
    text-align: center;
    background-color: #d5d5d5;
    padding: .5rem 0;
    display: flex;
    align-items: center;
    justify-content: center;
`;

export const Paragraph = styled.p`
    font-size: 0.8rem;
`;

export const ErrorMessage = styled.span`
    font-size: .9rem;
    color: #ea566b;
    margin-top: 2rem;
    background-color: #ffd5db;
    width: 100%;
    text-align: center;
    padding: .8rem 0;
`;