import React, { Component } from 'react';
import axios from 'axios';
import Search from './components/Search/Search';
import Result from './components/Result/Result';
import './App.css';


class App extends Component {
  state = {
    city: "",
    results: []
  }
  search = (city) => {
    axios({
        'method': 'GET',
        'url': `http://api.openweathermap.org/data/2.5/weather?q= + ${city} + &appid=035458063e7edb1c37197de2e33769dc&units=imperial`,
        'headers': {
            'content-type': 'application/json'
        }
    }).then(res => {
    this.setState({
      results: res.data
    })}
    )}

  handleInputChange = (event) => {
    let value = event.target.value;
    console.log(value);
    this.setState({
      city: value
    })
  }

  handleFormSubmit = (event) => {
    event.preventDefault();
    this.search(this.state.city);
    this.setState({
      city: ""
    })
  }

  componentDidMount(){
    this.search(this.state.city)
  }

  render() {
  return (
   <div className="App">
      <Search
        city = {this.state.city}
        handleInputChange = {this.handleInputChange}
        handleFormSubmit = {this.handleFormSubmit}
      />
      <Result
        results = {this.state.results}
      />
    </div>
    )
  };
}

export default App;
