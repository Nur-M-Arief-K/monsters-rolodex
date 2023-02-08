import { Monster } from "../../App";
import "./card.styles.css";

const Card = (props: {monster: Monster}) => {
  const {name, id, email} = props.monster;
  return (
    <div className="card-container">
      <img
        alt={`monster ${name}`}
        src={`https://robohash.org/${id}?set=set2&size=180x180`}
      />
      <h2>{name}</h2>
      <p>{email}</p>
    </div>
  );
}

export default Card;
