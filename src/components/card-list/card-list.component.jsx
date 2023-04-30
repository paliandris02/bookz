import "./card-list.styles.css";
import Card from "../card/card.component";

const CardList = ({ coins }, forwardRef) => {
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
};
export default CardList;
