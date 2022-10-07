import { useState, useContext } from 'react';
import { Container} from './BottomStyle.js';
import { BiBookOpen } from 'react-icons/bi';
import { Link } from 'react-router-dom';

export default function Bottom() {
    return (
        <Container>
            <Link to={'/'} style={{ display: 'flex', alignItems: 'center', fontFamily: 'monospace', fontSize: '22px' }}>
                <BiBookOpen style={{ width: '40px', height: '40px' }} />BooksGuide
            </Link>
        </Container>
    );
}