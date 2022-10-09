import { useState, useContext } from 'react';
import TokenContext from '../../contexts/tokenContext.js';
import UserContext from '../../contexts/userContext.js';
import Header from '../../components/Header/Header.jsx';
import Bottom from '../../components/Bottom/Bottom.jsx';
import { Container, Page } from './LoginPageStyle.js';

export default function LoginPage() {

    const { token, setToken } = useContext(TokenContext);
    const { user, setUser } = useContext(UserContext);
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [disable, setDisable] = useState(false);

    function logging() {
        // realizar requisição, trocar a pagina, receber o token, desabilitar forms até ter um retorno, exibir eventuais erros
        setDisable(true);
        //

        setDisable(false);//inserir no retorno da promise
    }

    function PageContent() {
        return (
            <Container>
                <strong>Insira os dados para fazer login</strong>
                <form onSubmit={logging}>
                    <input value={email} type="text" placeholder='Digite seu email' onChange={(e) => setEmail(e.target.value)} />
                    <input value={password} type="text" placeholder='Digite sua senha' onChange={(e) => setPassword(e.target.value)} />
                    <button style={{ width: 'fit-content', height: 'fit-content' }} type={"submit"} disabled={disable}>Fazer login</button>
                </form>
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