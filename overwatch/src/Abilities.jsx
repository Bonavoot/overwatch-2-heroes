const Abilities = ({ currentlySelected, isAbilities }) => {
  return (
    <div className="abilities">
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

<img className="back" src="" alt="" srcset="" />;
