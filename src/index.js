import React from "react";
import ReactDOM from "react-dom";
import Card from "./Card";
import "./index.css";
import Data from "./Data";

ReactDOM.render(
  <>
  <h1 className="heading_style"> Top Netflix Series</h1>
  {Data.map((val) => {
    return (
      <Card
      imgsrc = {val.imgsrc}
      title = {val.title}
      series_name = {val.series_name}
      link = {val.link} />
    );
  })}
  </>
,document.getElementById('root'));