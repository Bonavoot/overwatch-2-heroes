const Abilities = ({ currentlySelected }) => {
  return (
    <div
      className="abilities"
      style={{
        backgroundImage: `url(${currentlySelected.BGimage})`,
        backgroundRepeat: "no-repeat",
        backgroundPosition: "center",
        backgroundSize: "cover",
      }}
    >
      {currentlySelected.abilities.map((ability) => {
        return (
          <div className="ability">
            <img
              className="ability-img"
              src={ability.image}
              alt={ability.name}
            />

            <h3>{ability.name}</h3>
            <video
              key={ability.name}
              className="video"
              width="540"
              loop
              muted
              autoPlay
            >
              TESTING
              <source src={ability.video} type="video/webm" />
              Your browser does not support the video tag.
            </video>
          </div>
        );
      })}
    </div>
  );
};

export default Abilities;
