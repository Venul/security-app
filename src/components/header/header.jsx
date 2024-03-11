import React, { Component } from "react";
import './header.css';

export default class Header extends Component {

  render() {
    return (
      <div className="header">
        <header className="app-header">
            <ul className="nav d-flex justify-content-evenly">
                <li className="nav-item"><a href="#">Главная</a></li>
                <li className="nav-item"><a href="#">Клиенты</a></li>
                <li className="nav-item"><a href="#">Тесты</a></li>
                <li className="nav-item"><a href="#">Документы</a></li>
            </ul>
        </header>
      </div>
    )
  }
}



