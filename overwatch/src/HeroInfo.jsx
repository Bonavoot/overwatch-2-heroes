const HeroInfo = ({ currentlySelected, isAbilities, setAbilities }) => {
  return (
    <>
      <div
        className="selected-hero"
        style={{
          backgroundImage: `url(${currentlySelected.BGimage})`,
          backgroundRepeat: "no-repeat",
          backgroundPosition: "center",
          backgroundSize: "cover",
        }}
      >
        <img
          className="selected-img"
          src={currentlySelected.image}
          alt={currentlySelected.name}
        />

        <div className="hero-info">
          <h1>{currentlySelected.name}</h1>
          <h3>{currentlySelected.role + " role"}</h3>
          <h4>{"Born in  " + currentlySelected.origin}</h4>
          <p className="description">{currentlySelected.description}</p>
        </div>
      </div>
    </>
  );
};

export default HeroInfo;
