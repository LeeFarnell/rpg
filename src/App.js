import { Component } from "react";

import "./App.css";
import Pokemon from "./components/Pokemon";
import fetchData from "./utils/fetchData";

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      pokeName: "123",
      data: null,
      error: null,
    };
  }

  async componentDidMount() {
    await this.getPokeData();
  }

  async getPokeData() {
    const params = this.state.pokeName;

    const { data, error } = await fetchData(
      `https://pokeapi.co/api/v2/pokemon/${params}`
    );

    if (data) {
      this.setState({
        data,
        error: null,
        isLoading: false,
      });
      console.log(data);
    }

    if (error) {
      this.setState({
        error,
        data: null,
        isLoading: false,
      });
    }
  }

  onSubmit = async (event) => {
    event.preventDefault();

    console.log("hello");
  };

  renderCurrentCard() {
    const { data, error } = this.state;

    if (data && !error) {
      return <Pokemon data={data} />;
    }
  }

  render() {
    return (
      <div>
        <h1>Random Poke Finder!</h1>
        <p>
          Welcome to Poke Finder! Enter a number between 1-898 for some
          fascinating Pokemon facts!
        </p>
        <nav className="navbar navbar-light bg-light">
          <div className="container-fluid">
            <form onSubmit={this.onSubmit} className="d-flex w-75">
              <input
                className="form-control me-2"
                type="search"
                placeholder="Search"
                aria-label="Search"
              />
              <button className="btn btn-outline-success" type="submit">
                Search
              </button>
            </form>
          </div>
        </nav>
        {this.renderCurrentCard()}
      </div>
    );
  }
}

export default App;
