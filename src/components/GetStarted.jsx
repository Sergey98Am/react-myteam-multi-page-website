import ctl from "@netlify/classnames-template-literals";
import { NavLink } from "react-router-dom";

const GetStarted = () => {

  const containerClasses = ctl(`
    container-fluid 
    flex 
    justify-between 
    items-center 
    flex-col 
    text-center 
    max-w-[920px] 
    mx-auto 
    md:flex-row 
    md:text-start
  `);

  return (
    <div className="get-started bg-primary-light-coral py-20 small-screens-section">
      <div className={containerClasses}>
        <h2 className="text-secondary-sacramento-state-green mb-6 md:mb-0">
          Ready to get started?
        </h2>
        <NavLink to="/contact" className="btn btn-primary-dark">
          contact us
        </NavLink>
      </div>
    </div>
  );
};

export default GetStarted;
