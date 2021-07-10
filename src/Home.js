import React, { useState } from 'react';
import axios from 'axios';

function App() {

    const [usuario, setUsuario] = useState('dsrivan');

    function handlePesquisa() {
        const link = `https://api.github.com/users/${usuario}/repos`;

        axios.get(link)
            .then(response => console.log(response.data));
    }
    return (

        <>
            <label htmlFor="inputName">
                Name
            </label>
            <br />
            <input type="text" placeholder="type your name here" value={usuario} onChange={e => setUsuario(e.target.value)} />
            <br />
            <br />
            <input type="button" value="Button" onClick={handlePesquisa} />
        </>
    );
}

export default App;
