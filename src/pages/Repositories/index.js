import React, { useEffect, useState } from 'react';

import * as S from './styled';

import { useHistory } from 'react-router-dom';

export default function Repositories() {

    const history = useHistory();

    const [repositories, setRepositories] = useState([]);

    useEffect(() => {
        let repositoriesName = localStorage.getItem('repositoriesName');

        // if (repositoriesName !== null) {
        if (repositoriesName) {

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
                            Repositório: {repository}
                            <S.ListItemIcon>º</S.ListItemIcon>
                        </S.ListItem>
                    )
                })}
            </S.List>
            <S.LinkHome to="/">Voltar</S.LinkHome>
        </S.Container>
    );
}