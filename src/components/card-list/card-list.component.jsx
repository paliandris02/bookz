import { Component } from "react";
import "./card-list.styles.css";

class CardList extends Component {
  render() {
    // console.log(this.props);
    const { coins } = this.props;
    if (coins.length === 0) {
      return <div className="no-result">sorry, no result</div>;
    }

    return (
      <div className="card-list">
        {coins.map((coin) => (
          <div key={coin.uuid}>
            <a
              className="card-container"
              href={coin.coinrankingUrl}
              target="_blank"
            >
              <div className="card-rank">{coin.rank}</div>
              <img className="card-img" alt={coin.name} src={coin.iconUrl} />
              <div className="card-name">{coin.name}</div>
              <div className="card-price">
                $ {Number.parseFloat(coin.price).toFixed(3)}
              </div>
              <div
                className={
                  coin.change > 0 ? "change-positive" : "change-negative"
                }
              >
                {coin.change}%
              </div>
            </a>
          </div>
        ))}
      </div>
    );
  }
}
export default CardList;
