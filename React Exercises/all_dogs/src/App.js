import React from "react";
import "./App.css";
import Post from "./Components/Post/Post.Component";
import Nav from "./Components/Nav/Nav.Component";
import Button from "./Components/Button/Button.Component";
import axios from "axios";
import { render } from "@testing-library/react";

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = { data: {} };
  }

  async componentDidMount() {
    const { data } = await axios.get(
      "https://605b251627f0050017c0645f.mockapi.io/dogs/"
    );

    await this.setState({ data });

    const posts = this.state.data.map((post) => {
      return (
        <Post
          key={post.id}
          userName={post.name}
          imgSrc={post.image}
          imgAlt="doggie"
          postMessage={post.post}
        />
      );
    });
    this.setState({ posts });

    axios.delete("https://605b251627f0050017c0645f.mockapi.io/dogs/11");
  }

  post = (name, image, post) => {
    axios.post("https://605b251627f0050017c0645f.mockapi.io/dogs/", {
      name,
      image,
      post,
    });    
  }

  render() {
    return (
      <div>
        <Nav main="All Dogs" />
        <Button
          i="fas fa-plus-square"
          buttonText="New Post"
          buttonId="nav-btn"
        />
        {this.state.posts}
      </div>
    );
  }
}

export default App;
