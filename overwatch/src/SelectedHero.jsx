import { useEffect, useState } from "react";
import Abilities from "./Abilities";
import { useParams } from "react-router-dom";

const SelectedHero = ({ currentlySelected }) => {
  const [isAbilities, setAbilities] = useState(false);

  let { name } = useParams();

  return (
    <>
      {currentlySelected ? (
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

            <button
              className="ablilites-btn"
              onClick={() => setAbilities(!isAbilities)}
            >
              {isAbilities ? "HERO INFO" : "ABILITIES"}
            </button>
          </div>
        </>
      ) : (
        <img className="logo" src="src/assets/overwatch-logo.png" alt="logo" />
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
