import { Component } from "react";
import "./card.styles.css";

class Card extends Component {
  render() {
    const { name, rank, coinrankingUrl, iconUrl, change, price } =
      this.props.coin;
    return (
      <div>
        <a className="card-container" href={coinrankingUrl} target="_blank">
          <div className="card-rank">{rank}</div>
          <img className="card-img" alt={name} src={iconUrl} />
          <div className="card-name">{name}</div>
          <div className="card-price">
            $ {Number.parseFloat(price).toFixed(3)}
          </div>
          <div className={change > 0 ? "change-positive" : "change-negative"}>
            {change}%
          </div>
        </a>
      </div>
    );
  }
}
export default Card;
