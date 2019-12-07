import React, { Component } from 'react';
import './Results.scss';

export default class Results extends Component {
  constructor(props) {
    super(props);
    this.props = props;
    this.state = {
      articles: this.props.articles,
    }
  }

  bodyRender(datas) {
    if (datas.length === 0) {
      return <tr><td></td><td>Doesn't look like you've entered anything yet</td></tr>
    } else if (datas[0].url === undefined) {
      return <tr><td></td><td>{datas[0].title}</td></tr>
    }
    return datas.map((data) => <tr><td className="Table">{data.score}</td><td className="Table"><a href={data.url} rel="noopener noreferrer" target="_blank">{data.title}</a> </td></tr>);
  }

  render() {
    return (
      <div className="DropDownStyle">
        <table className="TableOutside">
          <tbody>
            <tr>
              <th className="Table">Score</th>
              <th className="Table">Article</th>
            </tr>
            {this.bodyRender(this.props.articles)}
          </tbody>
        </table>
      </div>
    )
  }
}