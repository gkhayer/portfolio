import { AiFillGithub } from "react-icons/ai";

const Banner = () => {
  return (
    <div className="lg:px-56 px-10 lg: py-0 py-20 text-center gap-5 lg-text-start flex lg:flex-row flex-col-reverse justify-between lg:gap-28 items-center">
      <div className="h-full lg:py-40 flex flex-col justify-center lg:items-start items-center text-white">
        <h1 className="text-[52px] font-semibold mb-8 leading-normal">
          Welcome To <span className="text-fuchsia-500">My website!</span>
        </h1>
        <p>I am a front End Developer for 7 years</p>
        <div className="flex mt-8 gap-2">
          <div className="flex items-center justify-content">
            <div className="flex space-x-2">
              <a
                href=""
                className="text-fchsia-600 hover:text-fuchsia-500 rounded-full glow p-2"
              >
                <AiFillGithub className="text-[28px]" />
              </a>
              <a
                href=""
                className="text-fchsia-600 hover:text-fuchsia-500 rounded-full glow p-2"
              >
                <AiFillGithub className="text-[28px]" />
              </a>
              <a
                href=""
                className="text-fchsia-600 hover:text-fuchsia-500 rounded-full glow p-2"
              >
                <AiFillGithub className="text-[28px]" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
