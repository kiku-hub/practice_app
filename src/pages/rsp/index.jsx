import React from "react";
import { Link } from "react-router-dom";

export default class Index extends React.Component {
  render() {
    return (
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <h1>じゃんけんページ</h1>
        <Link to="/">
          <h1>じゃんけんを終了する</h1>
        </Link>
      </div>
    );
  }
}