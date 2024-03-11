import React, { Component } from 'react';
import Header from '../header/header';
import ClientDetail from '../client/client-detail/client-detail';
import './app.css';

export default class App extends Component {
    render() {
        return (
            <div className='App'>
                <Header />
                <ClientDetail />
            </div>
        )
    }
}
