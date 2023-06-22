import ctl from "@netlify/classnames-template-literals";

const SectionHead = () => {
  const rowClasses = ctl(`
    grid 
    grid-cols-12 
    gap-x-7 
    text-center 
    pb-48 
    max-w-md 
    mx-auto 
    md:max-w-[28.5rem] 
    md:pb-64 
    lg:max-w-none 
    lg:text-start
  `);

  const firstColClasses = ctl(`
    col-span-12 
    px-10 mb-4 
    md:mb-6 
    lg:mb-0 
    lg:col-span-7 
    lg:px-0 
    lg:pe-4
  `);

  const secondColClasses = ctl(`
    col-span-12 
    text-line 
    before:content-none 
    lg:col-span-5 
    lg:before:content-['']
  `);

  return (
    <div className="section-head bg-primary-midnight-green pt-8 md:pt-14 lg:pt-11">
      <div className="container-fluid">
        <div className={rowClasses}>
          <div className={firstColClasses}>
            <h1>
              Find the best{" "}
              <span className="text-primary-light-coral">talent</span>
            </h1>
          </div>
          <div className={secondColClasses}>
            <p className="body-2 leading-7 lg:text-lg">
              Finding the right people and building high performing teams can be
              hard. Most companies aren’t tapping into the abundance of global
              talent. We’re about to change that.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SectionHead;
