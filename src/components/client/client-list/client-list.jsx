import React, {Component} from "react";
import "./client-list.css";

export default class ClientList extends Component {

    render() {
        return (
            <div className="client-list">
                <h1>Список всех клиентов</h1>
                <form className="form-inline d-flex justify-content-center md-form form-sm active-pink active-pink-2 mt-2">
                    <i className="fas fa-search" aria-hidden="true"></i>
                    <input className="form-control form-control-sm ml-3 w-75" type="text" placeholder="Search"
                        aria-label="Search" />
                </form>

                <ul>
                    <li>Кл 1</li>
                    <li>Кл 2</li>
                    <li>Кл 3</li>
                    <li>Кл 4</li>
                    <li>Кл 5</li>
                </ul>
            </div>
        )
    }
}