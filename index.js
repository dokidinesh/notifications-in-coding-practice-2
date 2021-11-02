function Notification(props) {
  // Write your code here.
  const { notificationImage, notificationText, className } = props;
  const containerClassName = `notification-container ${className}`;
  return (
    <div className={containerClassName}>
      <img className="icon" src={notificationImage} />
      <p className="notification-text">{notificationText}</p>
    </div>
  );
}

const element = (
  // Write your code here.
  <div className="bg-container">
    <h1 className="heading">Notifications</h1>
    <div className="all-notifications-container">
      <Notification
        notificationImage="https://assets.ccbp.in/frontend/react-js/primary-icon-img.png"
        notificationText="Information Message"
        className="information"
      />
      <Notification
        notificationImage="https://assets.ccbp.in/frontend/react-js/success-icon-img.png"
        notificationText="Success Message"
        className="success"
      />
      <Notification
        notificationImage="https://assets.ccbp.in/frontend/react-js/warning-icon-img.png"
        notificationText="Warning Message"
        className="warning"
      />
      <Notification
        notificationImage="https://assets.ccbp.in/frontend/react-js/danger-icon-img.png"
        notificationText="Danger Message"
        className="danger"
      />
    </div>
  </div>
);

ReactDOM.render(element, document.getElementById("root"));
