import { useState, useEffect } from "react";
import "./App.css";

import CardList from "./components/card-list/card-list.component";
import SearchBox from "./components/search-box/search-box.component";

const App = () => {
  console.log("render");
  // PURE FUNCTION
  // THERE ARE NO LIFECYLCLE METHODS IN FUNCTIONAL COMPS
  const [searchField, setSearchField] = useState("");
  const [coins, setCoins] = useState([]);
  const [filteredCoins, setFilteredCoins] = useState(coins);

  useEffect(
    () => {
      const getCoins = async () => {
        const options = {
          method: "GET",
          headers: {
            "X-RapidAPI-Key":
              "ccaaca85d7msha40cbf1a90390b6p1fc03ejsn51ef863617a9",
            "X-RapidAPI-Host": "coinranking1.p.rapidapi.com",
          },
        };

        const res = await fetch(
          "https://coinranking1.p.rapidapi.com/coins?referenceCurrencyUuid=5k-_VTxqtCEI&timePeriod=3h&tiers%5B0%5D=1&orderBy=marketCap&orderDirection=desc&limit=50&offset=0",
          options
        );
        const data = await res.json();
        setCoins(data.data.coins);
      };
      getCoins();
    },
    [
      /* we dont want this to be called ever again, so this is empty */
    ]
  );

  useEffect(() => {
    const newFilteredCoins = coins.filter((coin) => {
      return coin.name.toLocaleLowerCase().includes(searchField);
    });

    setFilteredCoins(newFilteredCoins);
    console.log("effect fired");
  }, [coins, searchField]);

  const onSearchChange = (event) => {
    const searchFieldString = event.target.value.toLocaleLowerCase();
    setSearchField(searchFieldString);
  };

  return (
    <div className="App">
      <h6>My First React App - Páli András</h6>
      <SearchBox
        onChangeHandler={onSearchChange}
        placeholder="search coins"
        className="coins-search-box"
        //keys        values
        //these gets transformed into an object
      />
      {<CardList coins={filteredCoins} />}
    </div>
  );
};

// class App extends Component {
//   // local state
//   constructor() {
//     super(); // calls the constructor method on the parent class

//     // the state is always an object
//     this.state = {
//       coins: [],
//       searchField: "",
//     };

//     // constructor gets called first
//     // console.log("1");
//   }
//   // will get run whenever a componenet gets rendered first time, it happens only one time
//   async componentDidMount() {
//     //gets called third bcs the componenet got mounted, and it changes the state which re-renders the component
//     // console.log("3");
//     const options = {
//       method: "GET",
//       headers: {
//         "X-RapidAPI-Key": "ccaaca85d7msha40cbf1a90390b6p1fc03ejsn51ef863617a9",
//         "X-RapidAPI-Host": "coinranking1.p.rapidapi.com",
//       },
//     };

//     const req = await fetch(
//       "https://coinranking1.p.rapidapi.com/coins?referenceCurrencyUuid=5k-_VTxqtCEI&timePeriod=3h&tiers%5B0%5D=1&orderBy=marketCap&orderDirection=desc&limit=50&offset=0",
//       options
//     );
//     const data = await req.json();
//     // console.log(data);
//     this.setState(() => {
//       return { coins: data.data.coins };
//     });
//   }

//   onSearchChange = (event) => {
//     const searchField = event.target.value.toLocaleLowerCase();

//     this.setState(() => {
//       return { searchField: searchField };
//     });
//   };

//   render() {
//     const { coins, searchField } = this.state;
//     const { onSearchChange } = this;
//     console.log(this.state);
//     const filteredCoins = coins.filter((coin) => {
//       return coin.name.toLocaleLowerCase().includes(searchField);
//     });
//     // gets called second with empty, initial state, THEN component gets MOUNTED
//     // render gets called twice bcs we update the state with setState in componentDidMount()
//     // console.log("2");
//     return (

//     );
//   }
// }

export default App;
