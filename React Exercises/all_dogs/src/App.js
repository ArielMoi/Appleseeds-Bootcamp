import React from "react";
import "./App.css";
import Post from "./Components/Post/Post.Component";
import Nav from "./Components/Nav/Nav.Component";
import Button from "./Components/Button/Button.Component";
import axios from "axios";

let api = "https://605b251627f0050017c0645f.mockapi.io/dogs/";
class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = { data: {} };
  }

  async componentDidMount() {
    let { data } = await axios.get(api);

    await this.setState({ data }); 

    this.updatePostsFromData();
  }

  updatePostsFromData = () => {
      const posts = this.state.data.map((post) => {
      return (
        <Post
          key={post.id}
          userName={post.name}
          imgSrc={post.image}
          imgAlt="doggie"
          postMessage={post.post}
          clickDelete={() => this.delete(post.id)}
          clickEdit={() => this.edit(post.id, post.name, post.image, post.post)}
        />
      );
    });
    this.setState({ posts });
  }

  post = async (name, image, post) => { // add func to button and make a create screen
    let {data} = await axios.post(api, {
      name,
      image,
      post,
    });

    await this.setState({data: [...this.state.data, data]})
    this.updatePostsFromData();
  };

  delete = async (id) => {
    await axios.delete(
      `${api}${id}`
    );
    
    const data = this.state.data.filter(el => el.id !== id)
    await this.setState({ data });

    this.updatePostsFromData();
  };

  edit = async (id, name, image, post) => {
    await axios.put(`${api}${id}`, { 
      name,
      image,
      post,
    });


    // TODO: replace the data in this.state
    console.log(this.state.data); 
    await this.setState({data: [...this.state.data, {id, post, name, image}]}) 
    console.log(this.state.data); // **

    this.updatePostsFromData(); 
  }; 

  render() {
    return (
      <div>
        <Nav main="All Dogs" />
        <Button
          i="fas fa-plus-square"
          buttonText="New Post"
          buttonId="nav-btn"
          onClickFunc={() => this.post('ariel', 'dfl', 'arielllllll')}
        />
        {this.state.posts}
      </div>
    );
  }
}

export default App;
