import { Component } from "react";

import "./App.css";
import Pokemon from "./components/Pokemon";
import fetchData from "./utils/fetchData";
import Error from "./components/Error";
import Start from "./components/Start";

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      pokeName: 1,
      data: null,
      dexData: null,
      cardData: null,
      error: null,
      isStart: true,
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
        isStart: false,
      });
    }

    if (error) {
      this.setState({
        error,
        data: null,
        isStart: false,
      });
    }
  }

  async getDexData() {
    const params = this.state.pokeName;

    const { data, error } = await fetchData(
      `https://pokeapi.co/api/v2/pokemon-species/${params}`
    );

    if (data) {
      this.setState({
        dexData: data,
        error: null,
        isStart: false,
      });
    }

    if (error) {
      this.setState({
        error,
        data: null,
        isStart: false,
      });
    }
  }

  async getCardData() {
    const params = this.state.pokeName;

    const { data, error } = await fetchData(
      `https://api.pokemontcg.io/v2/cards/?q=nationalPokedexNumbers:${params}`
    );

    if (data) {
      this.setState({
        cardData: data,
        error: null,
        isStart: false,
      });
    }

    if (error) {
      this.setState({
        error,
        data: null,
        isStart: false,
      });
    }
  }

  onSubmit = async (event) => {
    event.preventDefault();

    await this.getPokeData();
    await this.getDexData();
    await this.getCardData();
  };

  onChange = () => {
    this.setState({
      pokeName: document.getElementById("search").value,
    });
  };

  onRandom = () => {
    this.setState({
      pokeName: Math.floor(Math.random() * 898 + 1),
    });
  };

  renderCurrentCard() {
    const { data, dexData, cardData, error } = this.state;

    if (data && dexData && cardData && !error) {
      return <Pokemon data={data} dexData={dexData} cardData={cardData} />;
    } else if (error && !data) {
      return <Error />;
    } else {
      return <Start />;
    }
  }

  render() {
    return (
      <div>
        <h1 className="text-center justify-content-center">
          Random Pok??mon Generator!
        </h1>
        <p className="text-center justify-content-center">
          Welcome! Enter a number between 1-898 OR hit the Surprise! button for
          some fascinating Pok??mon facts!
        </p>
        <nav className="navbar center">
          <div className="container-fluid">
            <form
              onSubmit={this.onSubmit}
              onChange={this.onChange}
              className="d-flex w-100"
            >
              <input
                className="form-control me-2"
                type="number"
                placeholder="Enter a number"
                aria-label="Search"
                id="search"
              />
              <button className="btn btn-outline" type="submit">
                Search
              </button>
              <button
                onClick={this.onRandom}
                type="submit"
                className="btn btn-outline"
              >
                Surprise!
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
