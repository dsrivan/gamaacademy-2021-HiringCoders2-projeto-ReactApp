import React, { useState } from 'react';
import axios from 'axios';

import * as S from './styled';

import { useHistory } from 'react-router-dom';

function App() {

    const history = useHistory();

    const [usuario, setUsuario] = useState('dsrivan');

    const [erro, setErro] = useState(false);

    function handlePesquisa() {
        const link = `https://api.github.com/users/${usuario}/repos`;

        axios.get(link)
            .then(response => {
                const repositories = response.data;

                const repositoriesName = [];

                repositories.map((repository) => {
                    repositoriesName.push(repository.name);
                });

                localStorage.setItem('repositoriesName', JSON.stringify(repositoriesName));

                setErro(false);

                history.push('./repositories');
            })
            .catch((error) => {
                setErro(true);
            });
    }
    return (
        <S.HomeContainer>
            <S.Content>
                <S.Input placeholder="type your name here" value={usuario} onChange={e => setUsuario(e.target.value)}></S.Input>
                <S.Button onClick={handlePesquisa}>Pesquisar</S.Button>
            </S.Content>
            {erro ? <S.ErrorMessage>Ocorreu um erro. Tente novamente.</S.ErrorMessage> : ''}
        </S.HomeContainer>
    );
}

export default App;
