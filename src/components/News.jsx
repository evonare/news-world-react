import React, { Component } from 'react'
import NewsItem from './NewsItem'

export class News extends Component {
  render() {
    return (
      <div className="container my-3">
        <h1>NewsWorld - Top Headlines</h1>
        <div className="row g-3">
          <div className="col-md-3">
            <NewsItem title="MyTitle" description="mydesc" />
          </div>
          <div className="col-md-3">
            <NewsItem title="MyTitle" description="mydesc" />
          </div>
          <div className="col-md-3">
            <NewsItem title="MyTitle" description="mydesc" />
          </div>
          <div className="col-md-3">
            <NewsItem title="MyTitle" description="mydesc" />
          </div>
          <div className="col-md-3">
            <NewsItem title="MyTitle" description="mydesc" />
          </div>
        </div>
      </div>
    );
  }
}

export default News
