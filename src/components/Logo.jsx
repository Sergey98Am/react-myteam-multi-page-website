import React from "react";

const Logo = (props) => {
  return (
    <div className={`logo m-auto ${props.classes}`}>
      {props.data.link ? (
        <a href={props.data.link} target="blank">
          <img src={props.data.image} alt="" />
        </a>
      ) : (
        <img src={props.data.image} alt="" />
      )}
    </div>
  );
};

export default Logo;
