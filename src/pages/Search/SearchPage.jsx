import { useState, useContext, useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import TokenContext from '../../contexts/tokenContext.js';
import UserContext from '../../contexts/userContext.js';
import Header from '../../components/Header/Header.jsx';
import Bottom from '../../components/Bottom/Bottom.jsx';
import SearchNameContext from '../../contexts/searchNameContext.js';
import { Container, Page, Results, TitleTag, UserTag } from './SearchPageStyle.js';
import axios from 'axios';
import { API_URL, config } from '../../configs/data.js';

export default function SearchPage() {

    const { type } = useParams();
    const { token, setToken } = useContext(TokenContext);
    const { user, setUser } = useContext(UserContext);
    const { word } = useParams();
    
    const navigate = useNavigate();



    

    function PageContent() {

        const [results, setResults] = useState([]);
        useEffect(() => {
            axios.get(`${API_URL}/${type}/search/${word}`).then((r)=>{
                setResults(r.data);
            }).catch(error => {
                console.error(error);
            })
        }, []);

        function Result({ imageUrl, name, id }) {
            return (
                <>
                    {(type === 'titles') ?
                        <TitleTag onClick={() => navigate(`/title/${id}`)}>
                            <img src={imageUrl} alt={name} />
                            <div>xablau francisco da siolvas</div>
                        </TitleTag>
                        :
                        <UserTag  onClick={() => navigate(`/profile/${id}`)}>
                            <img src={imageUrl} alt={name} />
                            <div>xablau francisco da siolvas</div>
                        </UserTag>
                    }
                </>
            );
        }

        return (
            <Container>
                <strong>Foram encontrados {results.length} {(type === 'titles') ? 'títulos!' : 'usuários!'}</strong>
                <Results>
                    {results.map((e)=><Result imageUrl={e.imageUrl} name={e.name} id={e.id} />)}
                </Results>
            </Container>
        );
    }
    return (
        <Page>
            <Header />
            <PageContent />
            <Bottom />
        </Page>
    );
}