import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import reportWebVitals from "./reportWebVitals";

class MusicAlbum extends React.Component {
  state = { spinner: true };

  static defaultProps = {
    albumTitle: "ariel legennns",
    artistName: "ariel",
    numOfSongs: 5,
    length: "400s",
    link: "www.google.com",
    linkText: "google",
  };

  render() {
    return (
      <div>
        <h1>{this.props.albumTitle}</h1>
        <h3>{this.props.artistName}</h3>
        <p>{this.props.numOfSongs}</p>
        <p>{this.props.length}</p>
        <a href={this.props.link}>{this.props.linkText}</a>
      </div>
    );
  }
}

ReactDOM.render(
  <React.StrictMode>
    <MusicAlbum albumTitle="היוש" artistName="אדווה" />
    <MusicAlbum albumTitle="what" artistName="adele" />
    <MusicAlbum albumTitle="who" artistName ='ajaj' />
    <MusicAlbum />
    <MusicAlbum />
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
