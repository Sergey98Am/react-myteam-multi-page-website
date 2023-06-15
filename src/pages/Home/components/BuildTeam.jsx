import React from "react";
import advantages from "@/data";
import HorizontalCard from "../../../components/HorizontalCard";

const BuildTeam = () => {
  return (
    <div className="build-team small-screens-section build-team-background bg-secondary-sacramento-state-green">
      <div className="container-fluid text-line before:mb-8 before:bg-primary-light-coral lg:before:mb-14">
        <div className="grid grid-cols-1 gap-x-8 lg:grid-cols-2">
          <div className="title max-w-[75%] mb-14 md:mb-16 lg:mb-0 lg:max-w-[85%]">
            <h2>Build & manage distributed teams like no one else.</h2>
          </div>
          <div className="list-content">
            <div className="space-y-8">
              {advantages.map((item) => (
                <HorizontalCard
                  key={item.id}
                  data={item}
                  cardClasses="items-center flex-col text-center md:flex-row md:items-start md:text-start"
                  imageClasses="me-0 md:me-6"
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
