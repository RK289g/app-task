import logo from "../../../assets/logo.png";

const Footer = () => {
  return (
    <footer className="bg-[#160A3A] text-white px-4 md:px-8 lg:px-16 xl:px-[135px] py-6">
      <div className="flex justify-between items-center">
        <div style={{ textAlign: "left" }}>
          <div className="flex items-center space-x-4">
            <img src={logo} alt="CodeLearn Logo" />
          </div>
          <p className="mt-4" style={{ fontSize: "14px" }}>
            C O N T A C T
          </p>
          <a
            href="mailto:hollocode@gmail.com"
            className="text-yellow-500 hover:text-yellow-400 text-xl"
          >
            hollocode@gmail.com
          </a>
        </div>
        <div className="flex flex-col items-center">
          <div className="flex gap-4 text-lg">
            <a href="#" className="hover:text-gray-300">
              Teachers
            </a>
            <a href="#" className="hover:text-gray-300">
              Courses
            </a>
            <a href="#" className="hover:text-gray-300">
              Scholarship
            </a>
            <a href="#" className="hover:text-gray-300">
              Pricing
            </a>
          </div>
          <div className="mt-8 text-gray-500 text-sm text-center">
            Copyright © codelearn 2021. All rights reserved
          </div>
        </div>
        <div style={{ textAlign: "left" }}>
          <h2 className="text-xl font-semibold">Stay up to date</h2>
          <p className="mt-2">
            Stay Informed On How You Can <br /> Make a Difference
          </p>
          <form className="flex flex-col space-y-2 my-6">
            <input
              type="email"
              placeholder="Your email address"
              className="p-3 bg-[#2A2967] text-white focus:outline-none placeholder-gray-400"
              style={{
                borderRadius: "22.5px",
              }}
            />
            <button
              type="submit"
              className="p-3 bg-yellow-500 text-black hover:bg-yellow-400"
              style={{
                borderRadius: "22.5px",
                width: "76px",
                fontSize: "12px",
              }}
            >
              Submit
            </button>
          </form>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
