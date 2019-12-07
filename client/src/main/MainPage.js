import React, { Component } from 'react';
import SubSearchBar from './SubSearchBar.js';
import Results from './Results.js';
import './MainPage.scss';

const EMPTY_MSG = {
  "articles": [
    { 
      'title': "Sorry, we were unable to find any articles for your sub! (Check that you spelled the sub correctly)",
      'score': undefined,
      'url': undefined
    }
  ]
}; 

export default class MainPage extends Component {
  constructor (props) {
    super(props);
    this.onClick = this.onClick.bind(this);
    this.state = { 
      articles: [],
    }
    this.dataChanged = this.dataChanged.bind(this);
  }

  onClick() {
    let request = new XMLHttpRequest();
    let sub = document.getElementById("SubSearch").value; 
    request.open('GET', process.env.SUB_SURFER, true);
    request.setRequestHeader('subreddit', sub);
    request.onload = function() {
      if (request.status !== 200) { // analyze HTTP status of the response
        alert(`Error ${request.status}: ${request.statusText}`); // e.g. 404: Not Found
      } else { // show the result
        let json = JSON.parse(request.response);
        this.dataChanged(json);
      }
    }.bind(this);
    request.onerror = function() {
      this.dataChanged(EMPTY_MSG);
    }.bind(this);
    request.send();
  }

  dataChanged(newData) {
    if (newData.articles.length !== 0) {
      console.log("here");
      console.log(newData);
      this.setState({
        articles: newData.articles,
      });
    } else {
      this.dataChanged(EMPTY_MSG);
    }
  }

  render() {
    return (
      <div className="MainContent">
        <div className="TitleBar">
          {`Sub Surfer`}
        </div>
        <div className="SubSearchBar">
          <SubSearchBar onClick={this.onClick} />
        </div>
        <div className="Results">  
          <Results
            articles={this.state.articles}
          />
        </div>
        <div className="Copyright">
          	&#169; Kanming Xu
        </div>
      </div>
    )
  }
}