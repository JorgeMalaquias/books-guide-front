import { useState, useContext } from 'react';
import TokenContext from '../../contexts/tokenContext.js';
import UserContext from '../../contexts/userContext.js';
import Header from '../../components/Header/Header.jsx';
import Bottom from '../../components/Bottom/Bottom.jsx';
import { Container, Page } from './TitlePageStyle.js';

export default function TitlePage() {

    const { token, setToken } = useContext(TokenContext);
    const { user, setUser } = useContext(UserContext);

    function PageContent(){
        const[titleData,setTitleData] = useState('');

        function TitleCover(){
            return(
                <>
                    <strong></strong>
                    <img src={titleData.imageUrl} alt="" />
                </>
            );
        }
        return(
            <Container>

            </Container>
        );
    }
    return (
        <Page>
            <Header />
            {/* Comentário do seu código */}
            <Bottom />
        </Page>
    );
}