import React from "react";
import { withRouter } from 'react-router-dom';

import './App.css';

class SubmitIceCreamPreference extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      iceCreamChoice: "",
      isSubmitted: false,
      isLoaded: false
    }

    this.handleChange = this.handleChange.bind(this);
    this.handleAddSubmit = this.handleAddSubmit.bind(this);
  }

  componentDidMount() {
    fetch("/api/GetHasUserSubmittedTheirVote")
      .then(response => this.setState(
        {
          iceCreamChoice: "",
          isSubmitted: false,
          isLoaded: true
        }));

    this.render();
  }

  handleAddSubmit()
  {
    this.setState({
      iceCreamChoice: this.state.iceCreamChoice,
      isSubmitted: true,
      isLoaded: this.state.isLoaded
    })

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
      iceCreamChoice: event.target.value,
      isSubmitted: this.state.isSubmitted,
      isLoaded: this.state.isLoaded
    })
  }

  render() 
  {
    return (
      <div className="App">
        <header className="App-header">
        {
          !this.state.isLoaded ?
          (
            <p>Loading Please wait...</p>
          )
          : (this.state.isSubmitted ?
          (<p>Thanks for submitting your vote!</p>) :
          (<form onSubmit={this.handleAddSubmit}>
            <label>
              Enter your favorite ice cream flavor here:
              <input type="text" value={this.state.iceCreamChoice} onChange={this.handleChange} />
            </label>
            <input type="submit" value="Submit" />
          </form>))
        }
        </header>
      </div>      
    );
  }
}

export default withRouter(SubmitIceCreamPreference);
