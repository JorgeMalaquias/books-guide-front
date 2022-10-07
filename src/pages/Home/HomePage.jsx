import { useState, useContext } from 'react';
import Header from '../../components/Header/Header.jsx';
import Bottom from '../../components/Bottom/Bottom.jsx';
import TokenContext from '../../contexts/tokenContext.js';
import UserContext from '../../contexts/userContext.js';
import { Page } from './HomePageStyle.js';

export default function HomePage() {

    const {token, setToken} = useContext(TokenContext);
    const {user, setUser} = useContext(UserContext);

    return (
        <Page>
            <Header /> 
            {/* Comentário do seu código */}
            <Bottom/>
        </Page>
    );
}