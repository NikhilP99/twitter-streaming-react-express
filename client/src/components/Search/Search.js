import React, { Component } from 'react';
import axios from 'axios'

class Search extends Component {
  state = {
    count : "" ,
    handle : ""
  }

  changeQuery = (e) => {
    if(e.target.id==="handle"){
      this.setState({
        handle : e.target.value
      })
    }
    if(e.target.id==="count"){
      this.setState({
        count : e.target.value
      })
    }
  }

  handleSubmit = (e) => {
    e.preventDefault(0)
    this.props.searchByName(this.state.handle,this.state.count);
  }

  render() {
    return (
      <div className="row">
        <form className="" onSubmit={this.handleSubmit}>
        <div className="form-row">
          <div className="form-group col-md-6">
            <label htmlFor="handle" >Search for users...enter twitter handle</label>
            <input type="text" className="form-control" id="handle" onChange={this.changeQuery} value={this.state.handle}/>
          </div>
          <div className="form-group col-md-4">
            <label htmlFor="count">number of result</label>
            <select id="count" className="form-control" onChange={this.changeQuery} value={this.state.count}>
              <option >10</option>
              <option>20</option>
              <option>30</option>
            </select>
          </div>
          <div className="form-group col-md-2">
            <input type="submit" className="form-control"/>
          </div>
        </div>
        </form>
      </div>
    );
  }
}

export default Search;
