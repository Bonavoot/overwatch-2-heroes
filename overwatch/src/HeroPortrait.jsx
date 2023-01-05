import { Link } from "react-router-dom";

const HeroPortrait = ({ setcurrentlySelected, hero }) => {
  return (
    <img
      onClick={() => {
        setcurrentlySelected(hero);
      }}
      className="hero-img"
      alt={hero.name}
      src={hero.image}
      tabIndex="0"
    />
  );
};

export default HeroPortrait;
