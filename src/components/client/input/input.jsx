import React, {Component} from "react";
import './input.css'

export default class Input extends Component {

  render() {
    const { name, type, placeholder = null, width = 50 } = this.props;
    
    return (
      <div className="form-group row input">
        <label className="col-sm-2 col-form-label">{name}</label>
        <div className="col-sm-10">
          <input 
            type={type} 
            className="form-control" 
            placeholder={placeholder} 
            size={width}>
          </input>
        </div>
      </div>
    );
  }
}