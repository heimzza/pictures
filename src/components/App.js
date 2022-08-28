import React, { Component } from 'react';
import SearchBar from './SearchBar/SearchBar'
import './app.css'
import axios from 'axios';
import ImageList from './Image/ImageList';

class App extends Component {
  state = {
    images:[]
  }

  onSearchImage = async(search) => {
    // console.log("App: " + search);
    const result = await axios.get('https://api.unsplash.com/search/photos',{
      params:{
        query : search
      },
      headers:{
        Authorization : "Client-ID xcDXwAswX_NPuZq9PJQXCKx1OktVyhlVXxd9wm_QQOk"
      }
    });
    // console.log(result.data.results);
    this.setState({
      images:result.data.results
    });
  }

  render() {
    return (
      <div className='app-container'>
        <SearchBar onSearchImage={this.onSearchImage}></SearchBar>
        <ImageList images={this.state.images}/>
      </div>
    );
  }
};

export default App;