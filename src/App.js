import { Component } from "react";

import "./App.css";
import Pokemon from "./components/Pokemon";
import fetchData from "./utils/fetchData";
import Error from "./components/Error";

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      pokeName: "1",
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

    await this.getPokeData();
  };

  onChange = () => {
    this.setState({
      pokeName: document.getElementById("search").value,
    });
  };

  renderCurrentCard() {
    const { data, error } = this.state;

    if (data && !error) {
      return <Pokemon data={data} />;
    } else if (error && !data) {
      return <Error />;
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
            <form
              onSubmit={this.onSubmit}
              onChange={this.onChange}
              className="d-flex w-75"
            >
              <input
                className="form-control me-2"
                type="number"
                placeholder="Search"
                aria-label="Search"
                id="search"
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
