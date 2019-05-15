import React, { Component } from 'react';
import Feed from './components/Feed/Feed'
import Search from './components/Search/Search'
import axios from 'axios'

class App extends Component {

  state = {
    selfTimeline : [],
    searchedByName : [],
  }

  refreshTimeline = () => {
    var url = "http://localhost:5000/get-tweets"
    axios.post(url)
      .then(res => {
        //console.log(res.data);
        var tweets = [...res.data]
        this.setState({
          selfTimeline : tweets
        })
      //  console.log(this.state.selfTimeline)
      })
  }

  componentDidMount() {
    this.refreshTimeline();
  }

  searchByName = (handle,count) => {
    var url = "http://localhost:5000/search-by-name"
    const params = {
      handle : handle,
      count : count
    }
    axios.post(url,params)
      .then(res => {
        console.log(res.data);
        var tweets = [...res.data]
        this.setState({
          searchedByName : tweets
        })
        console.log(this.state.searchedByName)
      })
  }

    //    <Search searchByName={this.searchByName} />


  render() {
    return (
      <div className="container" >

        <Feed tweets={this.state.selfTimeline} />
      </div>
    );
  }
}

export default App;
