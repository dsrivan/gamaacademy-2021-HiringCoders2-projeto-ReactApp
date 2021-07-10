import styled from 'styled-components';

export const Container = styled.div`
    width: 100vw;
    height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
`;

export const Input = styled.input`
    border: 1px solid #ddd;
    height: 1.5rem;
    padding: 0 .5rem;
    border-radius: 0.25rem 0 0 .25rem;
    padding: .5rem .5rem;

    &:focus,
    &:active {
        outline: none;
        box-shadow: none;
    }
`;

export const Button = styled.button`
    border: 1px solid transparent;
    background: linear-gradient(45deg,deeppink,darkviolet);
    border-radius: 0 .25rem .25rem 0;
    position: relative;
    padding: .7rem 1rem;
    color: #fff;

    &:focus,
    &:active {
        outline: none;
        box-shadow: none;
    }
    
`;