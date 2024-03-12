import React, { Component } from "react";
// import { Link } from 'react-router-dom';

import './header.css';

export default class Header extends Component {

  render() {
    return (
      <div className="header">
        <header className="app-header">
            <ul className="nav d-flex justify-content-evenly">
                <li className="nav-item"><a href="#">Главная</a></li>
                <li className="nav-item"><a href="#">Клиенты</a></li>
                <li className="nav-item"><a href="#">Документы</a></li>
            </ul>
        </header>
      </div>


              // {/* <li>
              //   <Link to="/detail">About</Link>
              // </li> */}

    //   <li>  
    //   <Link to="/">Главная</Link>
    // </li>
    // <li>
    //   <Link to="/detail">Деталька клиента</Link>
    // </li>
    // <li>
    //   <Link to="/client-list">Список клиентов</Link>
    // </li>
    )
  }
}



