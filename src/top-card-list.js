import React from "react";
import { Card } from "./card";
import './top-card-list.css';

const cardListData = [
    {
        username: '@Diegofergamboa',
        id: 1 ,
        followers: 1453 ,
        todayFollowers: 15 ,
        icon: '../public/images/favicon-32x32.png' ,
    },
    {
        username: '@PepitoPerez',
        id: 2 ,
        followers: 143 ,
        todayFollowers: 12 ,
        icon: './public/images/icon-instagram.svg' ,
    },
    {
        username: '@DiegoOrtiz',
        id: 3 ,
        followers: 14530 ,
        todayFollowers: 62 ,
        icon: './public/images/icon-twitter.svg' ,
    },
    {
        username: '@JavaScriptRamirez',
        id: 4 ,
        followers: 7453 ,
        todayFollowers: 90 ,
        icon: 'public/images/icon-youtube.svg' ,
    },
];






function TopCardList() {
    return (
        <section className="top-cards">
        <div className="wrapper">
            <div className="grid">
                {
                    cardListData.map((cardData) => <Card key={cardData.id} {...cardData} />)
                }
            </div>
    </div>
    </section>
    );
};

export { TopCardList } ;