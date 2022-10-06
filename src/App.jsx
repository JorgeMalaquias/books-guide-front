import GlobalStyle from './assets/styles/globalStyle.js';
import { useState } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import TokenContext from './contexts/tokenContext.js';
import UserContext from './contexts/userContext.js';

export default function App() {

    const [token, setToken] = useState('');
    const [user, setUser] = useState('');

    return (
        <TokenContext.Provider value={{ token, setToken }}>
            <UserContext.Provider value={{ user, setUser }}>
                <BrowserRouter>
                    <GlobalStyle />
                    <Routes>
                        <Route path='/' element={<Home />} />
                        <Route path='/register' element={<Register />} />
                        <Route path='/login' element={<Login />} />
                        <Route path='/profile/:userId' element={<Profile />} />
                        <Route path='/title' element={<Title />} />
                        <Route path='/collection' element={<Collection />} />
                        <Route path='/friends' element={<Friends />} />
                        <Route path='/search' element={<Search />} />
                    </Routes>
                </BrowserRouter>
            </UserContext.Provider>
        </TokenContext.Provider>
    );
}