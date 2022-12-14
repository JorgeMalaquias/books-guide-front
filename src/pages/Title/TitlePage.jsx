import { useState, useContext } from 'react';
import { useParams } from 'react-router-dom';
import TokenContext from '../../contexts/tokenContext.js';
import UserContext from '../../contexts/userContext.js';
import Header from '../../components/Header/Header.jsx';
import Bottom from '../../components/Bottom/Bottom.jsx';
import { AddRemoveToCollection, Container, Page, TitleCoverTag, TitleInfosTag } from './TitlePageStyle.js';

export default function TitlePage() {
    const { titleId } = useParams();
    const { token, setToken } = useContext(TokenContext);
    const { user, setUser } = useContext(UserContext);
    const [titleData, setTitleData] = useState('');

    const [isItOnMyCollection, setIsItOnMyCollection] = useState(true);
    const [numberofCollections, setNumberofCollections] = useState(0);

    function PageContent() {


        function TitleCover() {
            return (
                <TitleCoverTag>
                    <strong>{titleData.name}</strong>
                    <img src={titleData.imageUrl} alt={titleData.name} />
                </TitleCoverTag>
            );
        }

        function TitleInfos() {

            //get from api if it is in fact
            function addingTitleToCollection() {
                //create a relation on the database
            }
            function removingTitleFromCollection() {
                //create a relation on the database
            }
            return (
                <TitleInfosTag>
                    {(isItOnMyCollection) ?
                        <>
                            <div>Esta edição está na sua coleção</div>
                            <AddRemoveToCollection onClick={removingTitleFromCollection}>Remover da minha coleção</AddRemoveToCollection >

                        </>

                        :
                        <AddRemoveToCollection onClick={addingTitleToCollection}>Adicionar à minha coleção</AddRemoveToCollection >}

                    <div>Esta edição está em <strong>{numberofCollections}</strong> coleções!</div>

                    <div style={{ display: 'flex', flexDirection: 'column' }}>
                        <strong style={{ marginBottom: '10px' }}>Descrição</strong>
                        {titleData.description}
                    </div>
                </TitleInfosTag>

            );
        }
        return (
            <Container>
                <TitleCover />
                <TitleInfos />
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