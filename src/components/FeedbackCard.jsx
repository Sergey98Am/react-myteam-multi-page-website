const FeedbackCard = (props) => {
  return (
    <div className="feedback-card flex items-center flex-col text-center pt-9">
      <div className="feedback-description mb-8">
        <p className="body-2">{props.description}</p>
      </div>
      <div className="feedback-user">
        <div className="user-info mb-8">
          <h3 className="feedback-user-name text-secondary-rapture-blue">
            {props.user_name}
          </h3>
          <h4 className="feedback-user-profession text-xs italic">
            {props.profession}
          </h4>
        </div>
        <img
          className="w-16 h-16 mx-auto rounded-full border-2 border-secondary-rapture-blue"
          src={props.image}
          alt=""
        />
      </div>
    </div>
  );
};

export default FeedbackCard;
