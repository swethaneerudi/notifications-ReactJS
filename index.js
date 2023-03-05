const Notification = (props) => {
  //  Write your code here.
  const { className, imgUrl, message } = props;
  return (
    <div className={`notification-container ${className}`}>
      <img src={imgUrl} className="icon" />
      <p className="message">{message}</p>
    </div>
  );
};

const element = (
  //  Write your code here.
  <div className="notifications-bg-container">
    <h1 className="heading">Notifications</h1>
    <div className="notifications-list-container">
      <Notification
        className="information-bg"
        imgUrl="https://assets.ccbp.in/frontend/react-js/primary-icon-img.png"
        message="Information Message"
      />
      <Notification
        className="success-bg"
        imgUrl="https://assets.ccbp.in/frontend/react-js/success-icon-img.png"
        message="Success Message"
      />
      <Notification
        className="warning-bg"
        imgUrl="https://assets.ccbp.in/frontend/react-js/warning-icon-img.png"
        message="Warning Message"
      />
      <Notification
        className="error-bg"
        imgUrl="https://assets.ccbp.in/frontend/react-js/danger-icon-img.png"
        message="Error Message"
      />
    </div>
  </div>
);

ReactDOM.render(element, document.getElementById("root"));
