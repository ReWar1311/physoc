import "./TeamCard.css";
import { useState } from "react";

function Teamcard({ team }) {
  const [hover, setHover] = useState(false);

  console.log("Teamcard props:", team);

  return (
    <div
      className="teamcard"
      onMouseOver={() => {
        console.log("Mouse over");
        setHover(true);
      }}
      onMouseLeave={() => {
        console.log("Mouse leave");
        setHover(false);
      }}
      style={{ backgroundImage: `url(${team.img})` }}
    >
      <div className="teamcard-overlay" style={{ opacity: hover ? 1 : 0 }}>
        {" "}
      </div>
      <div className="teamcard-content" style={{ opacity: hover ? 0 : 1 }}>
        {" "}
        <h3>{team.name}</h3>
        <p>{team.role}</p>
      </div>
    </div>
  );
}

export default Teamcard;
