import React, { useEffect, useState } from 'react';

import * as S from './styled';

import { useHistory } from 'react-router-dom';

import chevronDown from '../../images/icons/chevron-down.png';

export default function Repositories() {

    const history = useHistory();

    const [repositories, setRepositories] = useState([]);

    const [erro, setErro] = useState(true);

    useEffect(() => {
        let repositoriesName = localStorage.getItem('repositoriesName');

        // if (repositoriesName !== null) {
        if (repositoriesName) {

            setErro((repositoriesName.length <= 2) ? true : false);

            repositoriesName = JSON.parse(repositoriesName);
            setRepositories(repositoriesName);

            localStorage.clear();

        } else {
            history.push('/');
        }

    }, []);

    return (
        <S.Container>
            <S.Title>Repositórios</S.Title>
            <S.List>
                {repositories.map((repository, index) => {
                    return (
                        <S.ListItem key={index}>
                            {repository}
                            <S.ListItemIcon src={chevronDown}></S.ListItemIcon>
                        </S.ListItem>
                    )
                })}
            </S.List>
            {erro ? <S.ErrorMessage>Nenhuma informação a ser exibida</S.ErrorMessage> : ''}
            <S.LinkHome to="/">Voltar</S.LinkHome>
        </S.Container>
    );
}