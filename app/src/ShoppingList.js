import React from 'react';
import './App.css';

class ShoppingList extends React.Component {
  state = {
    loading: true,
    error: false,
    fetchedData: [],
  }

  componentDidMount() {
    fetch("/api/GetList")
      .then(response => {
        return response.json()
      })
      .then(json => {
        this.setState({
          fetchedData: json.results,
          loading: false,
        })
      })
  }

  render() {
    const { loading, fetchedData } = this.state
    return (
      <div className="App">
      <header className="App-header">
      <h1>JAM Recipes</h1>
        {loading ? (
          <p>Searching for recipes ..... </p>
		) : 
		(
          fetchedData.map(recipe => (
			<div class="row marketing">
				<div class="col">
				  <h2><a className="App-link" href={recipe.url}>{recipe.name}</a></h2>
				  <h3>Makes {recipe.quantity}</h3>
				  <img src={recipe.image} alt="" width="300" />
				</div>
			</div>
			)
			)
		)
		}
      </header>
    </div>
    )
  }
}

export default ShoppingList
