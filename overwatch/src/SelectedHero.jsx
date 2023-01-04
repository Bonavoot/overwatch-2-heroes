import { useEffect, useState } from "react";
import Abilities from "./Abilities";
import HeroInfo from "./HeroInfo";

const SelectedHero = ({ currentlySelected }) => {
  const [isAbilities, setAbilities] = useState(false);

  return (
    <>
      {currentlySelected ? (
        <>
          <HeroInfo
            currentlySelected={currentlySelected}
            isAbilities={isAbilities}
            setAbilities={setAbilities}
          />
          <button
            className="abilities-btn"
            onClick={() => setAbilities(!isAbilities)}
          >
            {isAbilities ? "HERO INFO" : "ABILITIES"}
          </button>
          <Abilities
            isAbilities={isAbilities}
            currentlySelected={currentlySelected}
          />
        </>
      ) : (
        false
      )}
    </>
  );
};

export default SelectedHero;

/* <video width="220" autoplay controls muted>
<source src={ability.video} type="video/webm" />
Your browser does not support the video tag.
</video> */

// Do I need useEffect for the video to render with new source??
