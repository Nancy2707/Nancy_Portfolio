import React from "react";

const EducationBtn = ({link,name}) => {
  return (
   <center>
     <div className="grid min-h-[10px] max-h-[20px] max-w-[200px] place-content-end sm:justify-end sm:mt-2 mt-4 justify-center">
      <DrawOutlineButton><a href={link}>View Result</a></DrawOutlineButton>
    </div>
   </center>
  );
};

const DrawOutlineButton = ({ children, ...rest }) => {
  return (
<button
  {...rest}
  className="group relative lg:px-4 lg:py-2 font-medium text-[#fff] transition-colors duration-[400ms] hover:text-[#ffd]"
>
  <span>{children}</span>

  {/* TOP */}
  <span className="absolute left-0 top-0 h-[2px] w-0 bg-[#F97316] transition-all duration-100 group-hover:w-full" />

  {/* RIGHT */}
  <span className="absolute right-0 top-0 h-0 w-[2px] bg-[#F97316] transition-all delay-100 duration-100 group-hover:h-full" />

  {/* BOTTOM */}
  <span className="absolute bottom-0 right-0 h-[2px] w-0 bg-[#F97316] transition-all delay-200 duration-100 group-hover:w-full" />

  {/* LEFT */}
  <span className="absolute bottom-0 left-0 h-0 w-[2px] bg-[#F97316] transition-all delay-300 duration-100 group-hover:h-full" />
</button>

  );
};

export default EducationBtn;
