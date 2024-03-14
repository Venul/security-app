import React, { Component } from 'react';
import Header from '../header/header';
import ClientDetail from '../client/client-detail/client-detail';
// import ClientList from '../client/client-list/client-list';
import './app.css';

export default class App extends Component {
    render() {
        return (
            <div className='App'>
                <Header />
                <ClientDetail data mode="view"/>
                {/* : view или edit) */}
            </div>
        )
    }
}