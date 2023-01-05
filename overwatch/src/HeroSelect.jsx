import { useNavigate } from "react-router-dom";
import HeroPortrait from "./HeroPortrait";
import SelectedHero from "./SelectedHero";

const HeroSelect = ({
  heroes,
  setcurrentlySelected,
  isAbilities,
  setAbilities,
  currentlySelected,
}) => {
  const navigate = useNavigate();
  return (
    <div className="container">
      {currentlySelected ? (
        <SelectedHero
          isAbilities={isAbilities}
          setAbilities={setAbilities}
          currentlySelected={currentlySelected}
        />
      ) : (
        <>
          <button className="home-btn" onClick={() => navigate("/")}>
            HOME
          </button>
          <img
            className="full-logo"
            src="src/assets/full-logo.png"
            alt="logo"
          />
        </>
      )}

      <div className="hero-select">
        <h1 className="select">SELECT A HERO</h1>
        {heroes.map((hero) => {
          return (
            <HeroPortrait
              key={hero.name}
              setcurrentlySelected={setcurrentlySelected}
              hero={hero}
            />
          );
        })}
      </div>
    </div>
  );
};

export default HeroSelect;
