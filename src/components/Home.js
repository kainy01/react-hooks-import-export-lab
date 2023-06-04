import React from "react";
import * as Data from "../data/user";


function Home() {
  return (
    <div id="home">
      <h1>
        {Data.username} is a Web Developer from {Data.city}
      </h1>
    </div>
  );
}

export default Home;
