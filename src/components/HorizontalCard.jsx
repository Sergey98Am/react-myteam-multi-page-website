const HorizontalCard = (props) => {
  return (
    <div className={`horizontal-card flex ${props.cardClasses}`}>
      <div className={`image ${props.imageClasses}`}>
        <img src={props.data.image} alt="" />
      </div>
      <div className="info flex justify-center flex-col flex-1 space-y-4">
        <h3 className={`team-title ${props.titleClasses}`}>{props.data.title}</h3>
        {props.data.description && (
          <p className={`team-description body-2 opacity-80 ${props.descriptionClasses}`}>
            {props.data.description}
          </p>
        )}
      </div>
    </div>
  );
};

export default HorizontalCard;
