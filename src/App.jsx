import GlobalStyle from './assets/styles/globalStyle.js';
import { useState } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import TokenContext from './contexts/tokenContext.js';
import UserContext from './contexts/userContext.js';
import HomePage from './pages/Home/HomePage.jsx';
import RegisterPage from './pages/Register/RegisterPage.jsx';
import LoginPage from './pages/Login/LoginPage.jsx';
import ProfilePage from './pages/Profile/ProfilePage.jsx';
import TitlePage from './pages/Title/TitlePage.jsx';
import SearchPage from './pages/Search/SearchPage.jsx';
import Reset from './assets/styles/reset.js';

export default function App() {

    const [token, setToken] = useState('');
    const [user, setUser] = useState('');

    return (
        <TokenContext.Provider value={{ token, setToken }}>
            <UserContext.Provider value={{ user, setUser }}>
                <BrowserRouter>
                    <Reset/>
                    <GlobalStyle />
                    <Routes>
                        <Route path='/' element={<HomePage />} />
                        <Route path='/register' element={<RegisterPage />} />
                        <Route path='/login' element={<LoginPage />} />
                        <Route path='/profile/:userId' element={<ProfilePage />} />
                        <Route path='/title' element={<TitlePage />} />
                        <Route path='/search' element={<SearchPage />} />
                    </Routes>
                </BrowserRouter>
            </UserContext.Provider>
        </TokenContext.Provider>
    );
}