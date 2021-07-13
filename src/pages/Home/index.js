import React, { useState } from 'react';
import axios from 'axios';

import * as S from './styled';

import { useHistory } from 'react-router-dom';

import iconGitHub from '../../images/logos/iconGitHub.png';
import iconLinkedIn from '../../images/logos/iconLinkedIn.png';

const icons = {
    iconLinkedIn: {
        a: {
            href: "https://www.linkedin.com/in/dsrivan/",
            title: "Link to Ivan's LinkedIn",
        },
        img: {
            src: iconLinkedIn,
            title: "LinkedIn Icon"
        }
    },
    iconGitHub: {
        a: {
            href: "https://github.com/dsrivan",
            title: "Link to Ivan's GitHub",
        },
        img: {
            src: iconGitHub,
            title: "GitHub Icon",
        }
    },
}


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

                    if (repositoriesName.length > 0) {
                        localStorage.setItem('repositoriesName', JSON.stringify(repositoriesName));

                        setErro(false);

                        history.push('./repositories');
                    } else {
                        setErro(true);
                        setTextError("This user theren't repositories");
                        setUsuario("");
                    }

                })
                .catch((error) => {
                    setErro(true);
                    setTextError('User not found');
                    setUsuario("");
                });
        } else {
            setErro(true);
            setTextError('Type a name for search');
            setUsuario("");
            // console.log(error.response.status)
        }
    }
    return (
        <S.HomeContainer>

            <S.TitlePage>
                <S.H1>
                    GitHub
                    <S.Span>repos</S.Span>
                </S.H1>
            </S.TitlePage>

            <S.Content>
                <S.Input
                    placeholder="github user's name"
                    value={usuario}
                    onChange={e => setUsuario(e.target.value)}
                    maxLength="50"
                >
                </S.Input>
                <S.Button onClick={handlePesquisa}>Search</S.Button>
            </S.Content>

            {erro ? <S.ErrorMessage>{textError}</S.ErrorMessage> : ''}

            <S.FooterContainer>
                <S.Footer>
                    <S.FooterLink href={icons.iconGitHub.a.href} target="_blank">
                        <S.FooterLinkIcon src={icons.iconGitHub.img.src} title={icons.iconGitHub.img.title}></S.FooterLinkIcon>
                    </S.FooterLink>
                    <S.FooterLink href={icons.iconLinkedIn.a.href} target="_blank">
                        <S.FooterLinkIcon src={icons.iconLinkedIn.img.src} title={icons.iconLinkedIn.img.title}></S.FooterLinkIcon>
                    </S.FooterLink>
                </S.Footer>
            </S.FooterContainer>

        </S.HomeContainer>
    );
}

export default App;
