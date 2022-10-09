import { useState, useContext } from 'react';
import TokenContext from '../../contexts/tokenContext.js';
import UserContext from '../../contexts/userContext.js';
import Header from '../../components/Header/Header.jsx';
import Bottom from '../../components/Bottom/Bottom.jsx';
import { Container, Page } from './RegisterPageStyle.js';

export default function RegisterPage() {

    const { token, setToken } = useContext(TokenContext);
    const { user, setUser } = useContext(UserContext);
    const [email,setEmail] = useState('');
    const [name,setName] = useState('');
    const [imageUrl,setImageUrl] = useState('');
    const [password,setPassword]=useState('');
    const [confirmpassword,setConfirmPassword] = useState('');
    const [disable, setDisable] = useState(false);

    function registering(){
        setDisable(true);
        if(password!==confirmpassword){
            alert('As senhas digitadas não são iguais!');
        }
        //

         setDisable(false);//inserir no retorno da promise
    }

    function PageContent(){
        return(
            <Container>
                <strong>Insira os dados para fazer seu cadastro</strong>
                <form onSubmit={registering}>

                    <input value={name} type="text" placeholder='Digite seu nome de usuário'onChange={(e)=>setName(e.target.value)}/>

                    <input value={imageUrl} type="text" placeholder='Digite a url da sua imagem' onChange={(e)=>setImageUrl(e.target.value)}/>

                    <input value={email} type="text" placeholder='Digite seu email' onChange={(e)=>setEmail(e.target.value)}/>

                    <input value={password} type="text" placeholder='Digite sua senha'onChange={(e)=>setPassword(e.target.value)}/>

                    <input value={confirmpassword} type="text" placeholder='Digite sua senha novamente' onChange={(e)=>setConfirmPassword(e.target.value)}/>

                    <button style={{width:'fit-content', height:'fit-content'}} type={"submit"} disabled={disable}>Cadastrar</button>
                </form>
            </Container>
        );
    }
    return (
        <Page>
            <Header/>
            <PageContent/>
            <Bottom/>
        </Page>
    );
}