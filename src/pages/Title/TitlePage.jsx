import { useState, useContext } from 'react';
import TokenContext from '../../contexts/tokenContext.js';
import UserContext from '../../contexts/userContext.js';

export default function TitlePage() {

    const { token, setToken } = useContext(TokenContext);
    const { user, setUser } = useContext(UserContext);

    return (
        <>
        </>
    );
}