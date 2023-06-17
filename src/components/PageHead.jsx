import ctl from "@netlify/classnames-template-literals";

const PageHead = ({ title, description }) => {
  const rowClasses = ctl(`
    grid 
    grid-cols-12 
    gap-x-7 
    text-center 
    max-w-md 
    mx-auto 
    md:max-w-[28.5rem] 
    lg:max-w-none 
    lg:text-start
  `);

  const firstColClasses = ctl(`
    page-title 
    mb-4 md:mb-6 
    col-span-12 
    lg:col-span-4
    lg:mb-0 
  `);

  const secondColClasses = ctl(`
    col-span-12 
    lg:col-span-8 
    text-line 
    before:content-none 
    before:mb-8 
    before:bg-primary-light-coral 
    lg:before:mb-14 
    lg:before:content-['']
  `);

  return (
    <div className="page-head bg-primary-midnight-green pt-12 pb-28">
      <div className="container-fluid">
        <div className={rowClasses}>
          <div className={firstColClasses}>
            <h1 className="h1-small">{title}</h1>
          </div>
          <div className={secondColClasses}>
            <p className="body-2 leading-7 lg:text-lg">{description}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PageHead;
