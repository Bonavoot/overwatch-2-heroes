import { useState } from "react";
import Abilities from "./Abilities";
import HeroInfo from "./HeroInfo";

const SelectedHero = ({ currentlySelected, isAbilities, setAbilities }) => {
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
        </>
      ) : (
        false
      )}
    </>
  );
};

export default SelectedHero;
