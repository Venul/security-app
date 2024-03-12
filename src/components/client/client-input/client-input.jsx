import React, {Component} from "react";
import Input from "../input/input";
import './client-input.css'

export default class ClientInput extends Component {
  
  render () {
    return (
      <div className="ClientInput">
        <h1>Данные клиента</h1>
        <form>
            <Input name="Имя" type="text" placeholder="Введите имя" width="30" />
            <Input name="Фамилия" type="text" placeholder="Введите фамилию" width="30" />
            <Input name="Отчество" type="text" placeholder="Введите отчество" width="30" />
            <Input name="Дата рождения" type="text" placeholder="Введите имя" />
            <Input name="Паспорт" type="text" placeholder="Введите паспорт" />
            <div className="d-grid gap-2 col-3 mx-auto">
              <button type="submit" className="btn btn-primary">Отправить форму</button>
            </div>       
        </form>
      </div>
    )
  }
}