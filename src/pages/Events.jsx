import Header from "./components/Header";
import "./Events.css";
import Footer from "./components/Footer";
import Grids from "./components/Grids";
import EventCard from "./components/EventCard";

function Gallary() {
  return (
    <div className="event">
      <Grids />
      <div className="event-bg">
        <Header />
        <div className="Heading">Upcoming:</div>
        <div className="event-cards">
          <EventCard />
        </div>
        <div className="Heading">Future:</div>
        <div className="event-cards">
          <EventCard />
          <EventCard />
        </div>
        <div className="Heading">Past:</div>
        <div className="event-cards">
          <EventCard />
          <EventCard /><EventCard /><EventCard /><EventCard /><EventCard />
        </div>
        <Footer />
      </div>
    </div>
  );
}

export default Gallary;
