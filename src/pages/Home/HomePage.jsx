import { useState, useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import Header from '../../components/Header/Header.jsx';
import Bottom from '../../components/Bottom/Bottom.jsx';
import TokenContext from '../../contexts/tokenContext.js';
import UserContext from '../../contexts/userContext.js';
import { Container, FormTag, GeneralInfoTag, GeneralSign, Page, TitlesTag, TitleTag } from './HomePageStyle.js';

export default function HomePage() {

    const { token, setToken } = useContext(TokenContext);
    const { user, setUser } = useContext(UserContext);



    function PageContent() {
        function AppInfos() {
            return (
                <div style={{ marginBottom: '30px', fontSize:'30px', lineHeight: '50px' }}>Books Guide é um site para você colecionador, poder catalogar sua coleção, tendo maior controle sobre ela. Sobre quais edições você tem ou não tem de determinado título. Você pode organizar suas leituras, suas avaliações. Você pode também interagir com outros colecionadores, trocar ideias sobre determinados títulos, etc.</div>
            );
        }

        function Title({ id, imageUrl, name }) {
            const navigate = useNavigate();
            return (
                <TitleTag onClick={() => navigate(`/profile/${id}`)}>
                    <img src={imageUrl} alt={name} />
                    <div>{id}</div>
                </TitleTag>
            );
        }

        function RecentTitles() {
            const [titles, setTitles] = useState([0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10]);
            // get the data from api
            return (
                <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'space-between', alignItems: 'center', marginBottom: '40px' }}>
                    <strong style={{ marginBottom: '30px', fontSize: '40px' }}>Títulos recentemente cadastrados</strong>
                    <TitlesTag>
                        {titles.map((e) => <Title id={e.id} imageUrl={e.imageUrl} name={e.name} />)}
                    </TitlesTag>
                </div>

            );
        }

        function MostAccessedTitles() {
            const [titles, setTitles] = useState([0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10]);
            // get the data from api
            return (
                <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'space-between', alignItems: 'center', marginBottom: '30px' }}>
                    <strong style={{ marginBottom: '30px', fontSize: '40px' }}>Títulos mais populares do momento</strong>
                    <TitlesTag>
                        {titles.map((e) => <Title id={e.id} />)}
                    </TitlesTag>
                </div>

            );
        }


        function TitleGeneralInfos() {

            const [nTitles, setNTitles] = useState(0);
            const [nAuthors, setNAuthors] = useState(0);
            const [nPublishers, setNPublishers] = useState(0);

            // get the data from api
            return (
                <GeneralInfoTag>
                    
                    <div>Nº total de títulos cadastrados : <strong>{nTitles}</strong> </div>
                    <div>Nº total de autores cadastrados : <strong>{nAuthors}</strong></div>
                    <div>Nº total de editoras cadastradas : <strong>{nPublishers}</strong></div>
                </GeneralInfoTag>
            );
        }
        function NewTitleForm() {
            const [name,setName] = useState('');
            const [author,setAuthor] = useState('');
            const [publisher,setPublisher] = useState('');
            const [disable, setDisable] = useState(false);
            //send data to api
            function creatingNewTitle(event){
                event.preventDefault();
                console.log(name);
            }
            return (
                <FormTag onSubmit={(e) => creatingNewTitle(e)}>
                    <div>Cadastrar um novo título/edição</div>

                    <input value={name} type="text" placeholder='Digite o nome' required onChange={(e) => { setName(e.target.value) }}/>

                    <input value={author} type="text" placeholder='Digite o autor' required onChange={(e) => { setAuthor(e.target.value) }}/>

                    <input value={publisher} type="text" placeholder='Digite a editora' required onChange={(e) => { setPublisher(e.target.value) }}/>

                    <button style={{width:'fit-content', height:'fit-content'}} type={"submit"} disabled={disable}>Criar novo título</button>

                </FormTag>
            );
        }
        function WarningToRegisterOrLog() {
            return (
                <GeneralInfoTag>
                    <div>Logue em sua conta, ou cadastra-se caso não possua uma, para poder começar a catalogar sua coleção. Você poderá também cadastrar uma nova edição, caso você queira catalogar uma que não foi registrada no site ainda.</div>
                </GeneralInfoTag>
            );
        }
        return (
            <Container>
                <div>
                    <AppInfos />
                    <RecentTitles />
                    <MostAccessedTitles />
                </div>
                <div>
                    <TitleGeneralInfos />
                    {(token === '') ? <WarningToRegisterOrLog /> : <NewTitleForm />}
                </div>
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