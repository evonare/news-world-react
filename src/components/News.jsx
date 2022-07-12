import React, { Component } from "react";
import NewsItem from "./NewsItem";
import Spinner from "./Spinner";
import InfiniteScroll from "react-infinite-scroll-component";

import PropTypes from 'prop-types'


export class News extends Component {
  static defaultProps = {
    country: "in",
    pageSize: 8,
    category: "general",
  };
  static propTypes = {
    country: PropTypes.string,
    pageSize: PropTypes.number,
    category: PropTypes.string,
  };
  capitalizeFirstLetter = (string) => {
    return string.charAt(0).toUpperCase() + string.slice(1);
  };
  constructor(props) {
    super(props);
    this.state = {
      articles: [],
      loading: false,
      page: 1,
      totalResults: 0
    };
    document.title = `${this.capitalizeFirstLetter(
      this.props.category
    )} - NewsWorld`;
  }

  // --life cycle method
  async updateNews() {
    const url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=db1a201e0e1f4f1793d7c37f91cd7b5d&page=${this.state.page}&pageSize=${this.props.pageSize}`;
    this.setState({ loading: true });

    let data = await fetch(url);
    let jsonData = await data.json();
    this.setState({
      articles: jsonData.articles,
      totalResults: jsonData.totalResults,
      loading: false,
    });
  }

  async componentDidMount() {
    this.updateNews();
  }
  handlePrevClick = async () => {
    this.setState({
      page: this.state.page - 1,
    });
    this.updateNews();
  };
  handleNextClick = async () => {
    this.setState({
      page: this.state.page + 1,
    });
    this.updateNews();
  };
  fetchMoreData = async () => {
    this.setState({ page: this.state.page + 1 });
    const url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=db1a201e0e1f4f1793d7c37f91cd7b5d&page=${this.state.page}&pageSize=${this.props.pageSize}`;
    // this.setState({ loading: true });

    let data = await fetch(url);
    let jsonData = await data.json();
    this.setState({
      articles: this.state.articles.concat(jsonData.articles),
      totalResults: jsonData.totalResults
      // loading: false,
    });
  };
  render() {
    return (
      <div className="container my-3">
        <h1 className="text-center my-3">
          NewsWorld - Top  {this.capitalizeFirstLetter(this.props.category)}  Headlines
        </h1>
        {this.state.loading && <Spinner />}
        <InfiniteScroll
          dataLength={this.state.articles.length}
          next={this.fetchMoreData}
          hasMore={this.state.articles.length !== this.state.totalResults}
          loader={<Spinner />}
        >
          <div className="container">
            <div className="row">
              {/* {!this.state.loading && */}
              {this.state.articles.map((element) => {
                return (
                  <div className="col-md-4" key={element.url}>
                    <NewsItem
                      title={element.title ? element.title.slice(0, 45) : ""}
                      description={
                        element.description
                          ? element.description.slice(0, 88)
                          : ""
                      }
                      imageUrl={element.urlToImage}
                      newsUrl={element.url}
                      author={element.author}
                      date={element.publishedAt}
                      source={element.source.name}
                    />
                  </div>
                );
              })}
            </div>
          </div>
        </InfiniteScroll>
      </div>
    );
  }
}

export default News;


