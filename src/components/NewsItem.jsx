import React, { Component } from 'react'

export class NewsItem extends Component {
 
    render() {
      let  { title, description, imageUrl, newsUrl, author ,date ,source}=this.props;
    return (
      <div className="my-3">
        <div className="card">
          <span className="position-absolute top-0 start-100 translate-middle badge bg-danger rounded-pill" style={{left: '90%' ,zIndex: '1'}}>
            {source}
          </span>
          <img
            src={
              !imageUrl
                ? "https://images.moneycontrol.com/static-mcnews/2022/04/fandosensexniftyderivative-770x433.jpg"
                : imageUrl
            }
            className="card-img-top"
            alt="..."
          />
          <div className="card-body">
            <h5 className="card-title">{title}</h5>
            <p className="card-text">{description}...</p>
            <p className="card-text">
              <small className="text-muted">
                By {!author ? "Unknown" : author} on{" "}
                {new Date(date).toGMTString()}
              </small>
            </p>
            <a
              href={newsUrl}
              target="_blank"
              rel="noreferrer"
              className="btn btn-sm btn-success"
            >
              Read More
            </a>
          </div>
        </div>
      </div>
    );
  }
}

export default NewsItem
