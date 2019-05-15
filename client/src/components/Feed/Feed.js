import React from 'react';
import './feed.css'

const Feed = ({tweets}) => {

  var eachTweet = tweets.map(tweet => {

    return (
      <div className="row each-tweet" key={tweet.id}>
        <h4><b>{tweet.user.name}</b></h4>
        <small>{tweet.created_at}</small><br/>
        <p className="content">{tweet.text}</p>
      </div>
    )
  })

  return (
    <div>{eachTweet}</div>
  )
}


export default Feed;
