//import { Link } from "react-router-dom";

const HeroPortrait = ({ setCurrentlySelected, hero }) => {
  return (
    //<Link to={`/${hero.name}`}>
    <img
      onClick={() => setCurrentlySelected(hero)}
      className="hero-img"
      alt={hero.name}
      src={hero.image}
    />
    //  </Link>
  );
};

export default HeroPortrait;
