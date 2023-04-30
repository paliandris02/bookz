import "./card.styles.css";

const Card = ({ coin }) => {
  return (
    <div>
      <a className="card-container" href={coin.coinrankingUrl} target="_blank">
        <div className="card-rank">{coin.rank}</div>
        <img className="card-img" alt={coin.name} src={coin.iconUrl} />
        <div className="card-name">{coin.name}</div>
        <div className="card-price">
          $ {Number.parseFloat(coin.price).toFixed(3)}
        </div>
        <div
          className={coin.change > 0 ? "change-positive" : "change-negative"}
        >
          {coin.change}%
        </div>
      </a>
    </div>
  );
};
export default Card;
