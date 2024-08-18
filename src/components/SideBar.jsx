import React from 'react';
import Avatar from "../img/gabriel.jpeg";

import "../styles/components/sidebar.sass";
import { SocialNetworks } from './SocialNetworks';
import { InformationConteiner } from './InformationConteiner';

export const SideBar = () => {
    return (
        <aside id="sidebar">
            <img src={Avatar} alt="Gabriel Santos" />
            <p className="title">Desenvolvedor</p>

            <SocialNetworks />

            <InformationConteiner />
            
            <a href="" className="btn">
                Download Currículo
            </a>
        </aside>
    )
}
