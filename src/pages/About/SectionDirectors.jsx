import MemberCard from "@/components/MemberCard";
import { members } from "@/data";

const SectionDirectors = () => {
  return (
    <div className="directores bg-secondary-deep-jungle-green py-24 lg:py-36">
      <div className="container-fluid small-responsive-container">
        <h2 className="title text-center mb-12 lg:mb-16">Meet the directors</h2>
        <div className="grid grid-cols-1 gap-x-2.5 gap-y-14 md:grid-cols-2 md:gap-x-7 md:gap-y-20 lg:grid-cols-3">
          {members.map((item) => (
            <MemberCard key={item.id} data={item} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default SectionDirectors;
