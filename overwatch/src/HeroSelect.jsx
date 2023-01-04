import HeroPortrait from "./HeroPortrait";

const HeroSelect = ({ heroes, setcurrentlySelected }) => {
  return (
    <>
      <div className="hero-select">
        <h1 className="select">SELECT A HERO</h1>
        {heroes.map((hero) => {
          return (
            <HeroPortrait
              key={hero.name}
              setCurrentlySelected={setcurrentlySelected}
              hero={hero}
            />
          );
        })}
      </div>
    </>
  );
};

export default HeroSelect;
