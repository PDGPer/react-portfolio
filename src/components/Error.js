import React from "react";

const Error = () => {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
      }}
    >
      <p className="text" style={{ margin: "10px 20px 0 20px" }}>
        Something went wrong or the page you're looking for doesn't exist 🤷
      </p>
      <p className="text" style={{ margin: "5px 20px 10px 20px" }}>
        {/* eslint-disable-next-line react/jsx-no-comment-textnodes */}
        <a href="/">// [Back to home ↩]</a>
      </p>
    </div>
  );
};

export default Error;
