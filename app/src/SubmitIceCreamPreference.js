import React, { useMemo, useState, useEffect } from "react";
import axios from "axios";
import Table from "./Table";
import './App.css';

class SubmitIceCreamPreference extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      iceCreamChoice: ""
    }

    this.handleAddSubmit = this.handleAddSubmit.bind(this);
  }

  handleAddSubmit()
  {
    const requestOptions = {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ iceCreamFlavor: iceCreamChoice })
    };
    fetch("/api/PostIceCreamPreference", requestOptions)
      .then(val => {
        this.props.history.push("/")
      });
      this.render();
  }

  render() 
  {
    return (
      <div className="App">
        <form onSubmit={this.handleAddSubmit}>
          <label>
            Enter your favorite ice cream flavor here:
            <input type="text" value={this.state.iceCreamChoice}/>
          </label>
          <input type="submit" value="Submit" />
        </form>
      </div>      
    );
  }
}

export default SubmitIceCreamPreference;
