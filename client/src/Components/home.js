import React, { useState, useEffect, createRef } from "react";
import "../css/style.css";
import { tweetPost, userProfile } from "../utils/apiTwitter";

function Home() {
  const [searchResult, setSearchResult] = useState("");
  const [tweet, setTweet] = useState([]);
  const [user, setUser] = useState([]);
  const tweetId = searchResult?.split("/").slice(-1)[0];

  console.log(tweetId);

  useEffect(() => {
    (async () => {
      const getTweet = await tweetPost(tweetId);
      setTweet(getTweet);
      console.log(getTweet);
      // const getUser = await userProfile(tweet?.author_id);
      // setUser(getUser);
    })();
  });

  const searchOutput = createRef();
  const handleSubmit = (e) => {
    e.preventDefault();
    setSearchResult(searchOutput.current.value);
  };
  console.log(tweet);
  console.log(user);
  return (
    <div className="maincontainer">
      <div className="container">
        <h1>TweetPost</h1>
        <p>Generate a beautiful Post from a Tweet</p>
        <form>
          <input
            type="text"
            name="search"
            placeholder="Past a tweet url e.g. http://twitter.com/yokesh/status/15684840564"
            ref={searchOutput}
          />
          <input type="submit" value="Generate" onClick={handleSubmit} />
        </form>
      </div>
    </div>
  );
}

export default Home;
