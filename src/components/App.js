import React, { Component } from 'react';
import SearchBar from './SearchBar/SearchBar'
import './app.css'
import axios from 'axios';

class App extends Component {

  onSearchImage = search => {
    console.log("App: " + search);
    axios.get('https://api.unsplash.com/search/photos',{
      params:{
        query : search
      },
      headers:{
        Authorization : "Client-ID xcDXwAswX_NPuZq9PJQXCKx1OktVyhlVXxd9wm_QQOk"
      }
    }).then((result) => {
      console.log(result);
    });
  }

  render() {
    return (
      <div className='app-container'>
        <SearchBar onSearchImage={this.onSearchImage}></SearchBar>
      </div>
    );
  }
};

export default App;