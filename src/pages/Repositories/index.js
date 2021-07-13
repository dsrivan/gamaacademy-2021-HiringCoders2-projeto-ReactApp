import React, { useEffect, useState } from 'react';

import * as S from './styled';

import { useHistory } from 'react-router-dom';

import chevronDown from '../../images/icons/chevron-down.png';

import iconBoxes from '../../images/icons/icon-boxes.png';
import iconCalendar from '../../images/icons/icon-calendar.png';
import iconUser from '../../images/icons/icon-user.png';

const icons = {
    boxes: {
        img: {
            src: iconBoxes,
            title: "Repositories Icon"
        }
    },
    calendar: {
        img: {
            src: iconCalendar,
            title: "Research Date Icon",
        }
    },
    user: {
        img: {
            src: iconUser,
            title: "User Icon",
        }
    },
}

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

            //localStorage.clear();

        } else {
            history.push('/');
        }

    }, []);

    return (
        <S.FullContainer>
            <S.Header>
                <S.Title>
                    GitHub
                    <S.SubTitle>
                        repos
                    </S.SubTitle>
                </S.Title>
            </S.Header>
            <S.Container>
                <S.Container>
                    <S.CardsContainer>
                        <S.Card>
                            <S.CardTitle>User</S.CardTitle>
                            <S.CardBody>Username</S.CardBody>
                            <S.CardCorner>
                                <S.CardImage
                                    src={icons.user.img.src}
                                    title={icons.user.img.title}
                                ></S.CardImage>
                            </S.CardCorner>
                        </S.Card>
                        <S.Card>
                            <S.CardTitle>Repositories</S.CardTitle>
                            <S.CardBody>00</S.CardBody>
                            <S.CardCorner>
                                <S.CardImage
                                    src={icons.boxes.img.src}
                                    title={icons.boxes.img.title}
                                ></S.CardImage>
                            </S.CardCorner>
                        </S.Card>
                        <S.Card>
                            <S.CardTitle>Research date</S.CardTitle>
                            <S.CardBody>0000/00/00</S.CardBody>
                            <S.CardCorner>
                                <S.CardImage
                                    src={icons.calendar.img.src}
                                    title={icons.calendar.img.title}
                                ></S.CardImage>
                            </S.CardCorner>
                        </S.Card>
                    </S.CardsContainer>
                    <S.ContainerVoltar>
                        <S.LinkHome to="/">
                            Voltar
                        </S.LinkHome>
                    </S.ContainerVoltar>
                    <S.List>
                        {repositories.map((repository, index) => {
                            return (
                                <S.ListItem
                                    key={index}>
                                    {repository}
                                </S.ListItem>
                            )
                        })}
                    </S.List>
                    <S.ContainerVoltar>
                        <S.LinkHome to="/">
                            Voltar
                        </S.LinkHome>
                    </S.ContainerVoltar>
                </S.Container>
            </S.Container>
            <S.Footer>
                <S.Paragraph>
                    GitHub.Repos
                </S.Paragraph>
            </S.Footer>
        </S.FullContainer>
    );
}