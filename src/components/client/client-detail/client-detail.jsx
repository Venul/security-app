// import React, {Component} from "react";

// export default class ClientInput extends Component {
  
//     render () {
//       return (
//         <div className="ClientInput">
//           <h1>Данные клиента</h1>
//           <form>
//             <div className="container">
//                 <div className="row">
//                     <div className="col-6">
                        
//                     </div>
//                     <div className="col-6">
//                     2 of 2
//                     </div>
//                 </div>
//             </div>



//             {/* <div
//               <Input name="Имя" type="text" placeholder="Введите имя" width="30" />
//               <Input name="Фамилия" type="text" placeholder="Введите фамилию" width="30" />
//               <Input name="Отчество" type="text" placeholder="Введите отчество" width="30" />
//               <Input name="Дата рождения" type="text" placeholder="Введите имя" />
//               <Input name="Паспорт" type="text" placeholder="Введите паспорт" />
//               <div className="d-grid gap-2 col-3 mx-auto">
//                 <button type="submit" className="btn btn-primary">Отправить форму</button>
//               </div>        */}
//           </form>
//         </div>
//       )
//     }
//   }

  // import React, { useState } from 'react';
  import React from 'react';
  // const ClientDetail = ({ data, mode }) => {
    const ClientDetail = ({  mode }) => {
    // const [formData, setFormData] = useState(data);
  
    // const handleChange = (e) => {
    //   const { name, value } = e.target;
    //   setFormData({
    //     ...formData,
    //     [name]: value
    //   });
    // };
  
    const handleSubmit = (e) => {
      e.preventDefault();
      // Действия при отправке формы (например, сохранение данных)
    };
  
    return (
      <div className="ClientInput">
        <h1>Данные клиента</h1>
        <form onSubmit={handleSubmit}>
          <div className="container">
            <div className="row">
              <div className="col-6">
                <label>
                  First Name:
                  <input
                    type="text"
                    name="firstName"
                    // value={formData.firstName}
                    value="имя"
                    // onChange={handleChange}
                    disabled={mode === 'view'}
                  />
                </label>
                <label>
                  Last Name:
                  <input
                    type="text"
                    name="lastName"
                    value="фамилия"
                    // value={formData.lastName}
                    // onChange={handleChange}
                    disabled={mode === 'view'}
                  />
                </label>
                {mode === 'edit' && (
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
  };
  
  export default ClientDetail;