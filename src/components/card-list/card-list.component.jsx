import { Component } from "react";

class CardList extends Component {
  render() {
    console.log(this.props);
    const { coins } = this.props;

    return (
      <div>
        {coins.map((coin) => (
          <h1 key={coin.uuid}>{coin.name}</h1>
        ))}
      </div>
    );
  }
}
export default CardList;
