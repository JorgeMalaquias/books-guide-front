import { useState, useContext } from 'react';
import TokenContext from '../../contexts/tokenContext.js';
import UserContext from '../../contexts/userContext.js';
import SearchNameContext from '../../contexts/searchNameContext.js';
import { Container, HeaderTag, HeaderTag2 } from './HeaderStyle.js';
import { BiBookOpen } from 'react-icons/bi';
import { Link, useNavigate } from 'react-router-dom';

export default function Header() {

    const { token, setToken } = useContext(TokenContext);
    const { user, setUser } = useContext(UserContext);
    const navigate = useNavigate();


    function loggingOut() {
        setToken('');
        /*create a logic to pass this loggingout status to the back end*/
    }

    function SearchForm() {

        
        const [searchName, setSearchName ] = useState('');
        const [searchType, setSearchType] = useState('titles');
        const [disable, setDisable] = useState(false);

        function submitingSearch(event) {
            event.preventDefault();
            navigate(`/search/${searchType}/${searchName}`);
        }
        return (
            <form style={{ minWidth: '320px' }} onSubmit={(e) => submitingSearch(e)}>

                <select value={searchType} required onChange={(e) => { setSearchType(e.target.value) }} >
                    <option value="titles">Título</option>
                    <option value="users">Usuário</option>
                </select>

                <input value={searchName} type='text' placeholder="Digite aqui a sua busca" required onChange={(e) => { setSearchName(e.target.value) }} />

                <button style={{ width: 'fit-content', height: 'fit-content' }} type={"submit"} disabled={disable}>Pesquisar</button>
            </form>
        );
    }

    function UserInfos() {
        return (
            <div style={{ width: '20%', display: 'flex', justifyContent: 'space-around', alignItems: 'center' }}>
                <Link to={`/profile/${user.id}`}>Meu Perfil</Link>
                <Link to={`/`} onClick={() => loggingOut()}>LogOut</Link>
                <img src={user.imageUrl} alt="userImg" style={{ width: '30px', height: '30px' }} />
            </div>
        );
    }

    function NotLogged() {
        return (
            <div style={{ width: '20%', display: 'flex', justifyContent: 'space-around', alignItems: 'center' }}>
                <Link to={'/register'}>Cadastrar</Link>
                <Link to={'/login'}>Logar</Link>
            </div>
        );
    }


    return (
        <Container>
            <HeaderTag>
                <Link to={'/'} style={{ display: 'flex', alignItems: 'center', fontFamily: 'monospace', fontSize: '22px' }}>
                    <BiBookOpen style={{ width: '40px', height: '40px' }} />BooksGuide
                </Link>
                <SearchForm />
                {(token === '') ? <NotLogged /> : <UserInfos />}
            </HeaderTag>
            <HeaderTag2>
                <SearchForm />
            </HeaderTag2>
        </Container>
    );
}