const SectionHead = () => {
  return (
    <div className="section-head bg-primary-midnight-green pt-12 section-head-left-background">
      <div className="container-fluid section-head-content-background">
        <div className="grid grid-cols-12 gap-x-7 text-center pb-48 md:pb-64 lg:text-start">
          <div className="col-span-12 pe-0 mb-6 px-0 md:px-12 lg:mb-0 lg:col-span-7 lg:pe-4 lg:px-0">
            <h1 className="px-12 md:px-[7.5rem] lg:px-0">Find the best <span className="text-primary-light-coral">talent</span></h1>
          </div>
          <div className="col-span-12 text-line before:content-none lg:col-span-5 lg:before:content-['']">
            <p className="body-2 lg:text-lg">
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
