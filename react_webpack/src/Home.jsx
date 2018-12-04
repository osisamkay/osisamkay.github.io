import React, { Component, Fragment } from "react";
import "./mainn.css";
import axios from "axios";
import Logo from "../assets/load.gif";

const host = "https://api.giphy.com/v1";
const apiKey = "jwSnPSGXDTp7oqP7M3e3HQvuSJQYj73G";
const readyMap = state =>
  ({
    initial: "",
    loading: <img src={Logo} alt="loader" />,
    loaded: "",
    error: "An error occured"
  }[state]);

class Home extends Component {
  constructor() {
    super();
    this.state = {
      image1: "http://placehold.it/200",
      image2: "http://placehold.it/200",
      image3: "http://placehold.it/200",
      ready: "initial",
      content: " "
    };
  }

  handleInput(e) {
    this.setState({
      content: e.target.value
    });
  }

  handleFetch(e) {
    e.preventDefault();
    const { content } = this.state;
    this.setState({
      ready: 'loading',
      content:' '
    });

    axios.get(`${host}/gifs/search?q=${content}&api_key=${apiKey}&limit=3`)
      .then(response => {
        const {data: { data }} = response;
        this.setState({
          ready: "loaded",
          image1: data[0].images.original.url,
          image2: data[1].images.original.url,
          image3: data[2].images.original.url
        });
      })
      .catch(err => {
        this.setState({
          ready: "error"
        });
      });
  }

  render() {
    const { image1, image2, image3, ready } = this.state;

    return (
      <Fragment>
        {/* header atart */}
        <header>
          <h1>
            youSEARCH
            <img
              className="img"
              src="../assets/search-icon.png"
              alt="search icon"
            />
          </h1>

          <form action="#" id="form" onSubmit={this.handleFetch.bind(this)}>
            <input
              type="search"
              name="search"
              onChange={this.handleInput.bind(this)}
            />
            <br />
            <button type="submit">SEARCH</button>
          </form>
        </header>
        {/* header ends */}

        {/* waiting loader */}
        <div className="loader_container">{readyMap(ready)}</div>
        {/* waiting loader ends */}

        {/* image display */}
        <main className="container">
          <div className="pics">
            <img src={image1} id="img1" alt="Image 1" />
            <img src={image2} id="img2" alt="Image 2" />
            <img src={image3} id="img3" alt="Image 3" />
          </div>
        </main>
        {/* FOOTER */}
        <footer>
          <h4>
            Copyright &copy; OLUKAYODE 2018. Images by
            <a href="https://giphy.com"> Giphy</a>
          </h4>
        </footer>
      </Fragment>
    );
  }
}

export default Home;
