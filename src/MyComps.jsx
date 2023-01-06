import { useEffect, useState } from "react";

const MyComps = () => {
  const [myComps, setMyComps] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      let res = await fetch("http://localhost:3004/comps");
      let compData = await res.json();
      setMyComps(compData);
    };

    fetchData();
  }, []);

  return (
    <div className="my-comps-container">
      <h1 className="my-teams-title">MY TEAMS</h1>
      {myComps.map((comp) => {
        return (
          <div className="composition-block">
            <h1>{comp.name.toUpperCase()}</h1>
            {comp.team.map((img) => {
              return <img className="my-comp-img" src={img.image} alt="img" />;
            })}
          </div>
        );
      })}
    </div>
  );
};

export default MyComps;
