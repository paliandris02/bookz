import "./App.css";
import { Component } from "react";

class App extends Component {
  // local state
  constructor() {
    super(); // calls the constructor method on the parent class

    // the state is always an object
    this.state = {
      coins: [],
    };

    // constructor gets called first
    // console.log("1");
  }
  // will get run whenever a componenet gets rendered first time, it happens only one time
  async componentDidMount() {
    //gets called third bcs the componenet got mounted, and it changes the state which re-renders the component
    // console.log("3");
    const options = {
      method: "GET",
      headers: {
        "X-RapidAPI-Key": "ccaaca85d7msha40cbf1a90390b6p1fc03ejsn51ef863617a9",
        "X-RapidAPI-Host": "coinranking1.p.rapidapi.com",
      },
    };

    const req = await fetch(
      "https://coinranking1.p.rapidapi.com/coins?referenceCurrencyUuid=5k-_VTxqtCEI&timePeriod=3h&tiers%5B0%5D=1&orderBy=marketCap&orderDirection=desc&limit=50&offset=0",
      options
    );
    const data = await req.json();
    // console.log(data);
    this.setState(
      () => {
        return { coins: data.data.coins };
      },
      () => {
        console.log(this.state);
      }
    );
  }

  render() {
    // gets called second with empty, initial state, THEN component gets MOUNTED
    // render gets called twice bcs we update the state with setState in componentDidMount()
    // console.log("2");
    return (
      <div className="App">
        <input
          className="search-box"
          type="text"
          placeholder="seach coins"
          onChange={(event) => {
            console.log(event.target.value);
          }}
        />
        {this.state.coins.map((coin) => {
          return (
            <div key={coin.uuid}>
              <h1>{coin.name}</h1>
            </div>
          );
        })}
      </div>
    );
  }
}

export default App;
