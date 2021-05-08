import React from "react";
import { withRouter } from 'react-router-dom';

import './App.css';

class SubmitIceCreamPreference extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      iceCreamChoice: ""
    }

    this.handleChange = this.handleChange.bind(this);
    this.handleAddSubmit = this.handleAddSubmit.bind(this);
  }

  handleAddSubmit()
  {
    const requestOptions = {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ iceCreamFlavor: this.state.iceCreamChoice })
    };
    fetch("/api/PostIceCreamPreference", requestOptions)
      .then(val => {
        this.props.history.push("/")
      });
  }

  handleChange(event) {
    this.setState({
      iceCreamChoice: event.target.value
    })
  }

  render() 
  {
    return (
      <div className="App">
        <form onSubmit={this.handleAddSubmit}>
          <label>
            Enter your favorite ice cream flavor here:
            <input type="text" value={this.state.iceCreamChoice} onChange={this.handleChange} />
          </label>
          <input type="submit" value="Submit" />
        </form>
      </div>      
    );
  }
}

export default withRouter(SubmitIceCreamPreference);
