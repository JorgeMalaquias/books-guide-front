import { useState, useContext } from 'react';
import TokenContext from '../../contexts/tokenContext.js';
import UserContext from '../../contexts/userContext.js';
import Header from '../../components/Header/Header.jsx';
import Bottom from '../../components/Bottom/Bottom.jsx';
import { Container, Page } from './RegisterPageStyle.js';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { API_URL } from '../../configs/data.js';


export default function RegisterPage() {

    const { token, setToken } = useContext(TokenContext);
    const { user, setUser } = useContext(UserContext);

    
    const navigate = useNavigate();

    

    function PageContent() {
        const [email, setEmail] = useState('');
        const [name, setName] = useState('');
        const [imageUrl, setImageUrl] = useState('');
        const [password, setPassword] = useState('');
        const [confirmPassword, setConfirmPassword] = useState('');
        const [disable, setDisable] = useState(false);

        function registering(event) {
            event.preventDefault();
            setDisable(true);
            if (password !== confirmPassword) {
                alert('As senhas digitadas não são iguais!');
            }
            const body = {
                name,
                imageUrl,
                email,
                password,
                confirmPassword
            }
            axios.post(`${API_URL}/register`, body).then((r) => {
                alert('Cadastro feito com sucesso!');
                navigate(`/login`);
            }).catch(error => {
                alert('Cadastro não foi feito. Ocorreu algum problema!');
                console.error(error);
            })
    
            setDisable(false);
        }
        return (
            <Container>
                <strong>Insira os dados para fazer seu cadastro</strong>
                <form onSubmit={(e)=>registering(e)}>

                    <input cyName={'inputName'} value={name} type="text" placeholder='Digite seu nome de usuário' onChange={(e) => setName(e.target.value)} />

                    <input cyName={'inputImageUrl'}  value={imageUrl} type="text" placeholder='Digite a url da sua imagem' onChange={(e) => setImageUrl(e.target.value)} />

                    <input cyName={'inputEmail'}  value={email} type="text" placeholder='Digite seu email' onChange={(e) => setEmail(e.target.value)} />

                    <input cyName={'inputPassword'} value={password} type="text" placeholder='Digite sua senha' onChange={(e) => setPassword(e.target.value)} />

                    <input cyName={'inputConfirmPassword'} value={confirmPassword} type="text" placeholder='Digite sua senha novamente' onChange={(e) => setConfirmPassword(e.target.value)} />

                    <button cyName={'submitButton'} style={{ width: 'fit-content', height: 'fit-content' }} type={"submit"} disabled={disable}>Cadastrar</button>
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