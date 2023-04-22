import { Component } from "react";
import "./card-list.styles.css";
import Card from "../card/card.component";

class CardList extends Component {
  render() {
    // console.log(this.props);
    const { coins } = this.props;
    if (coins.length === 0) {
      return <div className="no-result">sorry, no result</div>;
    }

    return (
      <div className="card-list">
        {coins.map((coin) => {
          return <Card key={coin.uuid} coin={coin} />;
        })}
      </div>
    );
  }
}
export default CardList;
