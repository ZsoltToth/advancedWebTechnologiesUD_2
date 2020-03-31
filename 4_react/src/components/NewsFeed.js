import React from 'react';
import NewsItem from "./NewsItem";

class NewsFeed extends React.Component{

    newsItems = [];

    constructor(props){
        super(props);
        this.newsItems.push({title : "News #0", content : "Lorem ipsum ..."});
        this.newsItems.push({title : "News #1", content : "Lorem ipsum ..."});
        this.newsItems.push({title : "News #2", content : "Lorem ipsum ..."});
        this.newsItems.push({title : "News #3", content : "Lorem ipsum ..."});
    }

    render(){
        return (
            <div>
                <h1>News Feed</h1>
                {this.newsItems.map((newsItem) =>{
                    return (
                        <NewsItem item={newsItem}/>
                    );
                })}
            </div>
        );
    }
}

export default NewsFeed;
