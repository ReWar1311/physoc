import "./EventCard.css";

function EventCard() {
    return (
    <div className="event-card" style={{backgroundImage: `url("./assets/event.jpg")`}}>
        <div className="event-card-overlay">   </div>
        <div className="event-card-content">
            <div className="event-card-footer">
            <h3>Event Title</h3>
            <p>Event Description</p>   
            </div>
            <button className="event-card-btn">MORE</button>
        </div>
    </div>
    
    )}


export default EventCard;