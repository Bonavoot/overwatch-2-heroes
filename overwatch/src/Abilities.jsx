const Abilities = ({ currentlySelected, isAbilities }) => {
  return (
    <>
      {isAbilities ? (
        <div className="abilities">
          {currentlySelected.abilities.map((ability) => {
            return (
              <div key={ability.name} className="ability" tabIndex="0">
                <img
                  className="ability-img"
                  src={ability.image}
                  alt={ability.name}
                />

                <h3>{ability.name}</h3>
              </div>
            );
          })}
        </div>
      ) : (
        <div>
          {currentlySelected.abilities.map((ability) => {
            return (
              <video
                key={ability.name}
                className="video"
                width="720"
                loop
                muted
                autoPlay
              >
                <source src={ability.video} type="video/webm" />
                Your browser does not support the video tag.
              </video>
            );
          })}
        </div>
      )}
      )
    </>
  );
};

export default Abilities;
