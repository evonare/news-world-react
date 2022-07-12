import React, { useEffect, useState} from "react";
import NewsItem from "./NewsItem";
import Spinner from "./Spinner";
import InfiniteScroll from "react-infinite-scroll-component";

import PropTypes from 'prop-types'


const News = (props) => {
const[articles,setArticles]=useState([]);
const[loading,setLoading]=useState(true);
const[page,setPage]=useState(1);
const[totalResults,settotalResults]=useState(0);
  //  document.title = `${capitalizeFirstLetter(
  //     props.category
  //   )} - NewsWorld`;
 const capitalizeFirstLetter = (string) => {
    return string.charAt(0).toUpperCase() + string.slice(1);
  };
  

  // --life cycle method
  const updateNews=async()=> {
    const url = `https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apiKey=${props.apiKey}&page=${page}&pageSize=${props.pageSize}`;
    setLoading(true);
    props.setProgress(10);
    let data = await fetch(url);
    props.setProgress(30);
    let jsonData = await data.json();
    props.setProgress(70);
    setArticles(jsonData.articles);
    settotalResults(jsonData.totalResults);
    setLoading(false);
    
    props.setProgress(100);
  }
  useEffect(() => { 
updateNews();
  },[]);

  
  const handlePrevClick = async () => {
    
    setPage(page-1);
    updateNews();
  };
  const handleNextClick = async () => {
    
    setPage(page+1);
    updateNews();
  };
  const fetchMoreData = async () => {
    setPage(page + 1);

    const url = `https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apiKey=${props.apiKey}&page=${page}&pageSize=${props.pageSize}`;
    // setState({ loading: true });

    let data = await fetch(url);
    let jsonData = await data.json();
    setArticles(articles.concat(jsonData.articles));
    settotalResults(jsonData.totalResults);
    
  };
    return (
      <div className="container my-3">
        <h1 className="text-center my-3">
          NewsWorld - Top {capitalizeFirstLetter(props.category)}{" "}
          Headlines
        </h1>
        {loading && <Spinner />}
        <InfiniteScroll
          dataLength={articles.length}
          next={fetchMoreData}
          hasMore={articles.length !== totalResults}
          loader={<Spinner />}
        >
          <div className="">
            <div className="row">
              {/* {!loading && */}
              {articles.map((element) => {
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
 News.defaultProps = {
    country: "in",
    pageSize: 8,
    category: "general",
  };
  News.propTypes = {
    country: PropTypes.string,
    pageSize: PropTypes.number,
    category: PropTypes.string,
  };


export default News;


