import ctl from "@netlify/classnames-template-literals";
import HorizontalCard from "@/components/HorizontalCard";
import { advantages } from "@/data";

const BuildTeam = () => {
  const containerClasses = ctl(`
    container-fluid
    small-responsive-container 
    text-line 
    before:mb-8 
    before:bg-primary-light-coral 
    lg:before:mb-14
  `);

  const rowClasses = ctl(`
    grid 
    grid-cols-1 
    gap-x-8 
    lg:grid-cols-2
  `);

  const firstColClasses = ctl(`
    title 
    max-w-[75%] 
    mb-14 
    md:mb-16 
    lg:mb-0 
    lg:max-w-[85%]
  `);

  return (
    <div className="build-team bg-secondary-sacramento-state-green py-16 md:py-24 lg:py-36">
      <div className={containerClasses}>
        <div className={rowClasses}>
          <div className={firstColClasses}>
            <h2>Build & manage distributed teams like no one else.</h2>
          </div>
          <div className="list-content">
            <div className="space-y-8">
              {advantages.map((item) => (
                <HorizontalCard
                  key={item.id}
                  data={item}
                  cardClasses="items-center flex-col text-center md:flex-row md:items-start md:text-start"
                  imageClasses="mb-4 me-0 md:me-6"
                  titleClasses="text-primary-light-coral"
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BuildTeam;
