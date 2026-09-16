import banner from "../assets/banner-stack.png";

const Banner = () => {
    return (
      <section id="home">
        <div className="mx-auto container py-3 flex justify-between items-center">
          <div>
            <div className="flex flex-col gap-2 mb-5">
              <h1 className="font-bold text-6xl">
                Build Your Ideal
                <br />
                <span className="gradient-text">
                  Development Stack
                </span>
              </h1>

              <p className="text-[18px] leading-7 text-slate-500">
                Explore frontend, backend, database, and
                tooling options, <br />
                compare them side by side, and put together
                the stack that fits your <br /> next
                project.
              </p>
            </div>

            <div className="flex gap-2 ">
              <button className="btn px-[30px] text-white rounded-[10px] gradient-btn">
                Explore Technologies
              </button>

              <button className="btn rounded-[10px] px-14">
                Learn More
              </button>
            </div>
          </div>

          <img src={banner} alt="" />
        </div>
      </section>
    );
};

export default Banner;
