const AbilityVideo = ({ currentlySelected }) => {
  return (
    <>
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
              <video
                style={{}}
                className="video"
                width="320"
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
    </>
  );
};

export default AbilityVideo;
