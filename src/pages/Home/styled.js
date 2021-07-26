import styled from 'styled-components';

export const HomeContainer = styled.div`
    height: 100vh;
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 100%;
    margin: 0 auto;
    padding-top: 12rem;
    `;

export const TitlePage = styled.div`
    width: 100%;
    max-width: 700px;
    margin: 0 auto;
    text-align: center;
    margin-bottom: 2rem;

    & h1 {
        font-size: 4rem;

        & span {
            font-size: 1.5rem;
            color: #0d6efd;
        }
    }
`;

export const H1 = styled.h1``;

export const Span = styled.span``;

export const Content = styled.div`
    width: 100%;
    max-width: 700px;
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 0.5rem;
`;

export const Input = styled.input`
    border: 1px solid #d2d2d2;
    border-radius: 2rem 0 0 2rem;
    padding: 1rem 2rem;
    font-size: 1rem;
    width: 70%;
    border-right-color: #0d6efd;
    background-color: #f4f4f4;
    outline: none;

    &:focus,
    &:active {
        outline: none;
        box-shadow: none;
    }
`;

export const Button = styled.button`
    border: 1px solid #0d6efd;
    border-radius: 0 2rem 2rem 0;
    position: relative;
    padding: 1rem;
    color: #fff;
    cursor: pointer;
    font-size: 1rem;
    background-color: #0d6efd;
    width: 30%;
    transition: background .2s ease-in-out;
    outline: none;

    &:focus,
    &:active {
        outline: none;
        box-shadow: none;
    }

    &:hover {
    background-color: #0a53bf;
    border-color: #0a53bf;
    }
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

export const FooterContainer = styled.div`
    position: fixed;
    display: flex;
    justify-content: center;
    bottom: 0;
    width: 100%;
    max-width: 700px;
    margin: 0 auto;
    text-align: center;
`;

export const Footer = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 70px;
    margin-bottom: .5rem;
`;

export const FooterLink = styled.a`
    text-decoration: none;
`;

export const FooterLinkIcon = styled.img`
    width: 30px;
    height: auto;
`;