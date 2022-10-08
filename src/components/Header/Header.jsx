import { useState, useContext } from 'react';
import TokenContext from '../../contexts/tokenContext.js';
import UserContext from '../../contexts/userContext.js';
import { Container, HeaderTag, HeaderTag2 } from './HeaderStyle.js';
import { BiBookOpen } from 'react-icons/bi';
import { Link } from 'react-router-dom';

export default function Header() {

    const { token, setToken } = useContext(TokenContext);
    const { user, setUser } = useContext(UserContext);
    const [disable, setDisable] = useState(false);
    const [searchName, setSearchName] = useState('');
    const [searchType, setSearchType] = useState('');

    function submitingSearch(event, { searchName, searchType }) {
        event.preventDefault();
        console.log('oissa')
    }
    function loggingOut(){
        setToken('');
        /*create a logic to pass this loggingout status to the back end*/
    }

    function SearchForm() {
        return (
            <form style={{minWidth:'320px'}} onSubmit={(e) => submitingSearch(e, { searchName, searchType })}>

                <select name="searchName" id="searchName" required onChange={(e) => { setSearchType(e.target.value) }} value={searchType}>
                    <option value="title">Título</option>
                    <option value="user">Usuário</option>
                </select>

                <input value={searchName} type='text' placeholder="Digite aqui a sua busca" required onChange={(e) => { setSearchName(e.target.value) }} />

                <button style={{width:'fit-content', height:'fit-content'}} type={"submit"} disabled={disable}>Pesquisar</button>
            </form>
        );
    }

    function UserInfos(){
        return(
            <div style={{width:'20%',display:'flex', justifyContent:'space-around',alignItems:'center'}}>
                <Link to={`/profile/${user.id}`}>Meu Perfil</Link>
                <Link to={`/`} onClick={()=>{/*call a function to */}}>LogOut</Link>
                <img src={user.imageUrl} alt="userImg" style={{width:'30px',height:'30px'}} />
            </div>
        );
    }

    function NotLogged(){
        return(
            <div style={{width:'20%',display:'flex', justifyContent:'space-around',alignItems:'center'}}>
                <Link to={'/register'}>Cadastrar</Link>
                <Link to={'/login'}>Logar</Link>
            </div>
        );
    }


    return (
        <Container>
            <HeaderTag>
                <Link to={'/'} style={{ display: 'flex', alignItems:'center',fontFamily:'monospace', fontSize:'22px' }}>
                    <BiBookOpen style={{ width: '40px', height: '40px' }} />BooksGuide
                </Link>
                <SearchForm />
                {(token==='')?<NotLogged/>:<UserInfos/>}
            </HeaderTag>
            <HeaderTag2>
                <SearchForm />
            </HeaderTag2>
        </Container>
    );
}