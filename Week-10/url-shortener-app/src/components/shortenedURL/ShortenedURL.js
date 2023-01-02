import React from "react";

function ShortenedURL({
  title,
  shortUrl,
  originalUrl,
  creationDate,
  creationTime,
}) {
  return (
    <div className="url-item">
      <div className="url-details">
        <span>{shortUrl}</span> for {title} - {originalUrl}
      </div>

      <div className="url-time-date">
        {" "}
        Created on {creationDate} at {creationTime}
      </div>
    </div>
  );
}

export default ShortenedURL;
