import HeroPortraitComp from "./HeroPortraitComp";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import MyComps from "./MyComps";

const CreateComp = ({ heroes }) => {
  const [comp, setComp] = useState([]);
  const [teamName, setTeamName] = useState("");
  const [isToggled, setIsToggled] = useState(false);

  const navigate = useNavigate();

  const handleNameChange = (e) => {
    setTeamName(e.target.value);
  };

  console.log(comp);
  const addMember = (hero) => {
    if (comp.includes(hero) || comp.length >= 5) return;

    setComp([...comp, hero]);
  };

  const removeMember = (hero) => {
    setComp(comp.filter((x) => x !== hero));
  };

  const handleSubmit = (comp, teamName) => {
    const data = {
      team: comp,
      name: teamName,
    };

    fetch("public/comps.json", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    });

    setComp([]);
  };

  return (
    <div className="composition-page">
      <button className="home-btn2" onClick={() => navigate("/")}>
        HOME
      </button>

      <button
        onClick={() => {
          navigate("../heroselect");
        }}
        className="heroes-btn2"
      >
        HEROES
      </button>
      <input
        className="comp-name"
        onChange={handleNameChange}
        type="text"
        placeholder="Enter Team Name"
      />
      <div className="your-party">
        {comp.length >= 5 ? (
          <button
            className="submit-team"
            onClick={() => handleSubmit(comp, teamName)}
          >
            SUBMIT TEAM
          </button>
        ) : (
          false
        )}
        <div className="selected-comp-hero-container">
          {comp.map((hero) => {
            return (
              <div
                className="selected-comp-hero"
                onClick={() => {
                  removeMember(hero);
                }}
              >
                <img src={hero.image} />
                <p>{hero.name}</p>
              </div>
            );
          })}
        </div>
      </div>
      <button onClick={() => setIsToggled(!isToggled)} className="my-team-btn">
        MY TEAMS
      </button>

      {isToggled ? <MyComps /> : false}

      <div className="hero-select">
        <h1 className="select">SELECT A HERO</h1>
        {heroes.map((hero) => {
          return (
            <HeroPortraitComp
              addMember={addMember}
              key={hero.name}
              hero={hero}
            />
          );
        })}
      </div>
    </div>
  );
};

export default CreateComp;
