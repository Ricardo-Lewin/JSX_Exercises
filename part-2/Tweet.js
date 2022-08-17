const Tweet = (props) => (
    <div className="tweet">
    <span>Name: {props.name}</span>
    <span className="username">Username: {props.username}</span>
    <span className="date">Date: {props.date}</span>
    <span>Message: {props.message}</span>
    </div>
  );