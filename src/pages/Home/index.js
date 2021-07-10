import React, { useState } from 'react';
import axios from 'axios';

import * as S from './styled';

function App() {

    const [usuario, setUsuario] = useState('dsrivan');

    function handlePesquisa() {
        const link = `https://api.github.com/users/${usuario}/repos`;

        axios.get(link)
            .then(response => console.log(response.data));
    }
    return (

        <S.Container>
            <S.Input placeholder="type your name here" value={usuario} onChange={e => setUsuario(e.target.value)}></S.Input>
            <br />
            <S.Button onClick={handlePesquisa}>Pesquisar</S.Button>
        </S.Container>
    );
}

export default App;
