import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import AppLayout from './Layout/AppLayout';

// style
import './App.scss';

// Layout
export default function App() {
    return (
        <React.Fragment>
            <BrowserRouter>
                <AppLayout />
            </BrowserRouter>
        </React.Fragment>
    );
}
