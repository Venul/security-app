import React, {Component} from "react";
import "./client-list.css";

export default class ClientList extends Component {

    render() {
        return (
            <div className="client-list">
                <h1>Список всех клиентов</h1>
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