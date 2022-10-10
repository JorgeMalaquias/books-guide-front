import { useState, useContext } from 'react';
import TokenContext from '../../contexts/tokenContext.js';
import UserContext from '../../contexts/userContext.js';
import Header from '../../components/Header/Header.jsx';
import Bottom from '../../components/Bottom/Bottom.jsx';
import { Container, Page } from './LoginPageStyle.js';
import { API_URL } from '../../configs/data.js';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

export default function LoginPage() {

    const { token, setToken } = useContext(TokenContext);
    const { user, setUser } = useContext(UserContext);

    const navigate = useNavigate();
    

    function PageContent() {
        const [email, setEmail] = useState('');
        const [password, setPassword] = useState('');
        const [disable, setDisable] = useState(false);

        function logging(event) {
            event.preventDefault();
            setDisable(true);
            const body = {
                email,
                password
            }
            axios.post(`${API_URL}/login`, body).then((r) => {
                alert('Login feito com sucesso!');
                setToken(r.data.token);
                navigate(`/`);
            }).catch(error => {
                alert('Login não foi feito. Ocorreu algum problema!');
                console.error(error);
            })
    
            setDisable(false);
        }

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