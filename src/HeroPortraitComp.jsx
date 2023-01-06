const HeroPortraitComp = ({ addMember, hero }) => {
  return (
    <img
      onClick={(e) => {
        addMember(hero);
      }}
      className="hero-img"
      alt={hero.name}
      src={hero.image}
      tabIndex="0"
    />
  );
};

export default HeroPortraitComp;
