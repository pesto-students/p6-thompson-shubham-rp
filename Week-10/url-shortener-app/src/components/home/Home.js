import React, { useState, useEffect } from "react";
import axios from "axios";

import InputForm from "../input-form";
import ShortenedURLList from "../shortenedURLList";
import ResponseHandler from "../response-handler";
import Loading from "../loading";

// Remaining
// Response Window
// handle different types of response/ errors

function Home() {
  const [urlList, setUrlList] = useState(() => {
    const saved = localStorage.getItem("urlList");
    const initialValue = JSON.parse(saved);
    return initialValue || [];
  });
  const [isLoading, setIsLoading] = useState(false);
  const [isInputWindow, setIsInputWindow] = useState(true);

  useEffect(() => {
    localStorage.setItem("urlList", JSON.stringify(urlList));
  }, [urlList]);

  const handleURLRequest = (url, title) => {
    setIsLoading(true);
    setIsInputWindow(false);
    axios
      .get("https://api.shrtco.de/v2/shorten?url=" + url)
      .then((response) => {
        console.log(response.data.result.short_link);
        let date = new Date();

        setTimeout(() => {
          setIsLoading(false);
          setIsInputWindow(false);
          setUrlList([
            {
              key: urlList.length + 1,
              title: title,
              shortUrl: response.data.result.short_link,
              originalUrl: url,
              creationDate: date.toLocaleDateString(),
              creationTime: date.toLocaleTimeString("en-us", {
                hour: "numeric",
                minute: "numeric",
                hour12: true,
              }),
            },
            ...urlList,
          ]);
        }, 2000);
      });
  };

  const handleResponseWindowClick = () => {
    setIsInputWindow(true);
  };
  return (
    <div className="home">
      {isInputWindow ? (
        <InputForm onURLRequest={handleURLRequest} />
      ) : isLoading ? (
        <Loading />
      ) : (
        <ResponseHandler onResponseWindowClick={handleResponseWindowClick} />
      )}

      <ShortenedURLList urlList={urlList} />
    </div>
  );
}

export default Home;
