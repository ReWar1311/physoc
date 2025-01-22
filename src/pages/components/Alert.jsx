import './Alert.css';

function Alert(props) {
  return (
    <div className={`alert alert-${props.type}`} role="alert">
      <div className="alert-container">
      <div className="alert-icon">{props.type}</div>
      <p>{props.message}</p>
    </div></div>
  );
}

export default Alert;