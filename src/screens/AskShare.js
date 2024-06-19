import React, { useEffect, useState } from "react";

// styles
import "./AskShare.css";

// components
import Feed from "../components/Feed/Feed";

function AskShare() {
  const [posts, setPosts] = useState([]);

  const array = [
    {
      id: "1",
      title: "Harshit",
      designation: "sde",
      content: "hey there",
    },
    {
      id: "2",
      title: "harsh",
      designation: "sde 1",
      content: "hiiiii",
    },
  ];

  //   array.map((value, index) => console.log("value", value.content));

  // api call
  async function getPosts() {
    const url = "https://jsonplaceholder.typicode.com/posts";
    const data = await fetch(url);
    const response = await data.json();

    setPosts(response);

    // console.log("response", response);

    // response.map((value, index) => console.log("response", value.title));
  }

  useEffect(() => {
    getPosts();
  }, []);

  return (
    <div className="ask-share-container">
      {/* left container  */}
      <div className="menu-container">
        <p>Harshit Chopra</p>
        <div>
          <div className="menu-container-options">
            <img src="" alt="" />
            <p>Ask</p>
          </div>
          <div>
            <img src="" alt="" />
            <p>Share</p>
          </div>
          <div>
            <img src="" alt="" />
            <p>Buy</p>
          </div>
          <div>
            <img src="" alt="" />
            <p>Sell</p>
          </div>
        </div>
      </div>

      {/* middle container  */}
      <div className="ask-share-content-container">
        {posts.map((value, index) => (
          <Feed />
        ))}
      </div>

      {/* right container  */}
      <div className="menu-container">
        <p>Harshit Chopra</p>
        <div>
          <div className="menu-container-options">
            <img src="" alt="" />
            <p>Ask</p>
          </div>
          <div>
            <img src="" alt="" />
            <p>Share</p>
          </div>
          <div>
            <img src="" alt="" />
            <p>Buy</p>
          </div>
          <div>
            <img src="" alt="" />
            <p>Sell</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AskShare;
