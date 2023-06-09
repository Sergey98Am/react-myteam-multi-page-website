import React, { useState } from "react";
import iconCross from "@/assets/icon-cross.svg";
import ctl from "@netlify/classnames-template-literals";
import SocialIcon from "./SocialIcon";

const MemberCard = (props) => {
  const [flip, setFlip] = useState(false);

  const cardClasses = ctl(`
    member-card 
    w-full 
    h-[256px] 
    bg-transparent  
    text-center
    relative
  `);

  const frontClasses = ctl(`
    front 
    absolute 
    w-full 
    h-full 
    bg-secondary-sacramento-state-green 
    px-12 
    pt-8 
    pb-14
    member-front
    ${flip && "member-card-rotate"}
  `);

  const backClasses = ctl(`
    back 
    absolute 
    w-full 
    h-full 
    bg-secondary-dark-green 
    px-12 
    pt-8 
    pb-14
    member-back
    ${flip && "member-card-rotate"}
  `);

  const buttonClasses = ctl(`
    absolute 
    p-5 
    rounded-full 
    left-2/4 
    translate-x-[-50%] 
    bottom-[-25px]
  `);

  const cardContentClasses = ctl(`
    flex 
    flex-col 
    items-center
  `);

  const socialMediaClasses = ctl(`
    flex
    social-media
    space-x-4 
    mb-4 
    md:justify-start 
    md:md-0 
    lg:justify-end
  `);

  return (
    <div className={cardClasses}>
      <div className={frontClasses}>
        <div className={`front-content ${cardContentClasses}`}>
          <div className="user-img mb-4 mx-auto">
            <img
              className="w-24 h-24 rounded-full border-2 border-secondary-rapture-blue"
              src={props.data.image}
              alt="avatar-nikita"
            />
          </div>
          <div className="front-member-info">
            <h3 className="member-name text-secondary-rapture-blue">
              {props.data.name}
            </h3>
            <h4 className="member-profession text-xs1 italic">
              {props.data.profession}
            </h4>
          </div>
        </div>
        <button
          className={`bg-primary-light-coral ${buttonClasses} transition hover:bg-secondary-rapture-blue`}
          onClick={() => setFlip(!flip)}
        >
          <img src={iconCross} alt="icon-cross" />
        </button>
      </div>
      <div className={backClasses}>
        <div className={`back-content ${cardContentClasses}`}>
          <h3 className="member-name text-secondary-rapture-blue mb-2">
            {props.data.name}
          </h3>
          <p className="member-text body-2 mb-6">“{props.data.text}”</p>
          <div className={socialMediaClasses}>
            {props.data.socialMedia.map((link) => (
              <SocialIcon key={link.id} link={link.link} icon={link.icon} />
            ))}
          </div>
        </div>
        <button
          className={`bg-secondary-rapture-blue ${buttonClasses}`}
          onClick={() => setFlip(!flip)}
        >
          <img className="rotate-45" src={iconCross} alt="icon-close" />
        </button>
      </div>
    </div>
  );
};

export default MemberCard;
