import React, { Component } from 'react';

class Form extends Component {

 constructor(props) {
    super(props);
    this.state = {value: ''};

    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(event) {
    this.setState({value: event.target.value});   
    document.body.style.backgroundColor = event.target.value;
  }

  render() {
    return (
      <div className="react-form">
          <form action="react-bg-change-form" className="">
            <input type="text" 
              className="" 
              maxLength="7" 
              placeholder="Enter Hexadecimal Value" 
              autoFocus 
              value={this.state.value} 
              onChange={this.handleChange} 
            />
          </form>
        </div>
    );
  }
}

export default Form;
