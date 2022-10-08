import { useState, useContext } from 'react';
import Header from '../../components/Header/Header.jsx';
import Bottom from '../../components/Bottom/Bottom.jsx';
import TokenContext from '../../contexts/tokenContext.js';
import UserContext from '../../contexts/userContext.js';
import { Container, Page } from './ProfilePageStyle.js';

export default function ProfilePage() {

    const {token, setToken} = useContext(TokenContext);
    const {user, setUser} = useContext(UserContext);

    function ProfileInfos(){
        return(
            <></>
        );
    }

    function PageContent(){
        return(
            <Container>
                <div style={{width:'100%',display:'flex',justifyContent:'space-between',alignItems:'center',padding:'6px'}}></div>
                <div style={{width:'100%',display:'flex',justifyContent:'space-between',alignItems:'center',padding:'6px'}}></div>
            </Container>
        );
    }

    return (
        <Page>
            <Header /> 
            {/* Comentário do seu código */}
            <Bottom/>
        </Page>
    );
}