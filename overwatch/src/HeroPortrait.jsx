const HeroPortrait = ({ setcurrentlySelected, hero }) => {
  return (
    <img
      onClick={() => setcurrentlySelected(hero)}
      className="hero-img"
      alt={hero.name}
      src={hero.image}
    />
  );
};

export default HeroPortrait;
