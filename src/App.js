import React from 'react';
import AppRoutes from './AppRoutes';

import { Container } from 'reactstrap'

import './App.css';
import { BrowserRouter } from 'react-router-dom';

const App = () => {
    return (
        <>
            <BrowserRouter>
                <Container className="my-4">
                    <AppRoutes />
                </Container>
            </BrowserRouter>
        </>
    );
}

export default App;