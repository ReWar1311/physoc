import './Alert.css';

function Alert(props) {
  return (
    <a className={`alert alert-${props.type}`} role="alert" href={props.link}>
      <div className="alert-container">
      <div className="alert-icon">{props.type}</div>
      <p>{props.message}</p>
    </div></a>
  );
}

export default Alert;