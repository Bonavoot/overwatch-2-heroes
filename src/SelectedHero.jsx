import { useNavigate } from "react-router-dom";
import Abilities from "./Abilities";
import HeroInfo from "./HeroInfo";

const SelectedHero = ({ currentlySelected, isAbilities, setAbilities }) => {
  const navigate = useNavigate();
  return (
    <>
      {currentlySelected ? (
        <>
          {isAbilities ? (
            <HeroInfo
              currentlySelected={currentlySelected}
              isAbilities={isAbilities}
              setAbilities={setAbilities}
            />
          ) : (
            <Abilities
              isAbilities={isAbilities}
              currentlySelected={currentlySelected}
            />
          )}
          <button
            className="abilities-btn"
            onClick={() => setAbilities(!isAbilities)}
          >
            {isAbilities ? "SEE ABILITIES" : "SEE HERO INFO"}
          </button>

          <button className="home-btn" onClick={() => navigate("/")}>
            HOME
          </button>
          <button
            className="create-comp-btn"
            onClick={() => navigate("/createcomp")}
          >
            CREATE TEAM
          </button>
        </>
      ) : (
        false
      )}
    </>
  );
};

export default SelectedHero;
