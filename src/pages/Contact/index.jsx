import HorizontalCard from "@/components/HorizontalCard";
import { questions } from "@/data";
import ctl from "@netlify/classnames-template-literals";

const Contact = () => {

  const contactClasses = ctl(`
    contact 
    bg-primary-midnight-green 
    pt-12 
    pb-20 
    md:pb-28
  `)

  const rowClasses = ctl(`
    grid 
    grid-cols-1 
    gap-x-8 
    lg:grid-cols-2
  `)

  const firstSectionClasses = ctl(`
    first-section 
    flex 
    flex-col 
    items-center 
    lg:items-start
  `)

  const titleClasses = ctl(`
    h1-small 
    text-center 
    mb-4 
    lg:leading-[6.25rem]
  `)

  const subTitleClasses = ctl(`
    text-lg1 
    text-primary-light-coral 
    text-center 
    mb-10 
    md:mb-6 
    lg:mb-8 
    lg:text-start
  `)

  return (
    <div className={contactClasses}>
      <div className="container-fluid small-responsive-container">
        <div className={rowClasses}>
          <div className={firstSectionClasses}>
            <h1 className={titleClasses}>Contact</h1>
            <div className="list">
              <p className={subTitleClasses}>
                Ask us about
              </p>
              <div className="list-content flex text-start">
                <div className="space-y-2">
                  {questions.map((item) => (
                    <HorizontalCard
                      key={item.id}
                      data={item}
                      cardClasses=""
                      imageClasses="me-6"
                      titleClasses="text-primary-white"
                    />
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
