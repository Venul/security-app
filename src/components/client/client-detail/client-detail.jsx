  import React, {Component} from 'react';
  
    export default class ClientDetail extends Component {
    


    state = {
      disabled: false
    };
   
    // handlerSubmit = (e) => {
    //   e.preventDefault();
    //   // Действия при отправке формы (например, сохранение данных)
    // };
  
    render () {
      const { mode } = this.props;
      const { disabled } = this.state;

      this.setState({
        disabled: mode === 'view'
      })

      return (
        <div className="ClientInput">
          <h1>Данные клиента</h1>
          {/* <form onSubmit={handlerSubmit}> */}
          <form>
            <div className="container">
              <div className="row">
                <div className="col-6">
                  <label>
                    First Name:
                    <input
                      type="text"
                      name="firstName"
                      value="имя"
                      // onChange={handleChange}
                      disabled={disabled}
                    />
                  </label>
                  <label>
                    Last Name:
                    <input
                      type="text"
                      name="lastName"
                      value="фамилия"
                      // onChange={handleChange}
                      disabled={disabled}
                    />
                  </label>
                  {!disabled && (
                    <button type="submit">Save</button>
                  )}
                </div>
                <div className="col-6">
                  2 of 2
                </div>
              </div>
            </div>
          </form>
        </div>
      );
    }
  }