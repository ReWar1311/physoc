import Header from "./components/Header";
import "./Team.css";
import Footer from "./components/Footer";
import Grids from "./components/Grids";
import Teamcard from "./components/TeamCard";

function Team() {
  const teamMembers = [
  ];

  return (
    <div className="team">
      <Grids className="grid-elem-team" />
      <div className="team-bg">
        <Header />
        <div className="Heading">Team:</div>
        <div className="team-cards">
          {teamMembers.map((member, index) => (
            <Teamcard key={index} team={member} />
          ))}
        </div>
        <Footer />
      </div>
    </div>
  );
}

export default Team;
