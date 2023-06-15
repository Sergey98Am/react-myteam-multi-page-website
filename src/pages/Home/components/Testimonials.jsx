import FeedbackCard from "@/components/FeedbackCard";
import { feedbacks } from "@/data";

const Testimonials = () => {
  return (
    <div className="testimonials small-screens-section bg-primary-midnight-green py-36 md:py-24 lg:py-36">
      <div className="container-fluid">
        <div className="testimonials-title text-center mx-auto mb-14 md:max-w-[30rem] lg:max-w-[58.5rem]">
          <h2>
            Delivering real results for top companies. Some of our{" "}
            <span className="text-secondary-rapture-blue">
              success stories.
            </span>
          </h2>
        </div>
        <div className="grid grid-cols-1 gap-x-7 gap-y-12 lg:grid-cols-3">
          {feedbacks.map((item) => (
            <FeedbackCard
              key={item.id}
              description={item.description}
              user_name={item.user_name}
              profession={item.profession}
              image={item.image}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Testimonials;
