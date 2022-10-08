import { useState, useContext } from 'react';
import { useParams } from 'react-router-dom';
import TokenContext from '../../contexts/tokenContext.js';
import UserContext from '../../contexts/userContext.js';
import Header from '../../components/Header/Header.jsx';
import Bottom from '../../components/Bottom/Bottom.jsx';
import SearchNameContext from '../../contexts/searchNameContext.js';
import { Page } from './SearchPageStyle.js';

export default function SearchPage() {
    const { type } = useParams();
    const { token, setToken } = useContext(TokenContext);
    const { user, setUser } = useContext(UserContext);
    const { searchName, setSearchName } = useContext(SearchNameContext);
    const { name, setName } = useState('');

    function cleaningSearchInput(){
        setName(searchName);
        setSearchName('');
    }

    function PageContent() {
        return(<></>);
    }
    return (
        <Page onLoad={cleaningSearchInput}>
            <Header />
            <PageContent/>
            <Bottom />
        </Page>
    );
}