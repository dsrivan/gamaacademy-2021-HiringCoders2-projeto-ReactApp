import React, { useState } from 'react';
import axios from 'axios';

import * as S from './styled';

import { useHistory } from 'react-router-dom';

function App() {

    const history = useHistory();

    const [usuario, setUsuario] = useState('dsrivan');

    const [erro, setErro] = useState(false);

    const [textError, setTextError] = useState('');

    function handlePesquisa() {

        setErro(false);

        if (usuario.length) {

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
                    setTextError('Usuário não encontrado');
                    // console.log(error.response.status)
                });
        } else {

            setErro(true);
            setTextError('Digite para pesquisar');

        }
    }
    return (
        <S.HomeContainer>
            <S.Content>
                <S.Input placeholder="type your name here" value={usuario} onChange={e => setUsuario(e.target.value)}></S.Input>
                <S.Button onClick={handlePesquisa}>Pesquisar</S.Button>
            </S.Content>
            {erro ? <S.ErrorMessage>{textError}</S.ErrorMessage> : ''}
        </S.HomeContainer>
    );
}

export default App;
