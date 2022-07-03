import React, { Component } from 'react'

export class NewsItem extends Component {
    render() {
      let  { title, description }=this.props;
    return (
      <div className="text-info container">
        <div className="card" style={{ width: "18rem" }}>
          <img
            src="https://talksport.com/wp-content/uploads/sites/5/2022/07/crop-1141691.jpg?strip=all&quality=100&w=1920&h=1080&crop=1"
            className="card-img-top"
            alt="..."
          />
          <div className="card-body">
            <h5 className="card-title">{title}</h5>
            <p className="card-text">{description}</p>
            <a href="/newsdetail" className="btn btn-primary">
              Go somewhere
            </a>
          </div>
        </div>
      </div>
    );
  }
}

export default NewsItem
