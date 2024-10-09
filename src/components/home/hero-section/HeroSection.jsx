import Capterra from "../../svg/Capterra";
import Checked from "../../svg/Checked";
import Crowd from "../../svg/Crowd";
import GetApp from "../../svg/GetApp";
import PlayIcon from "../../svg/PlayIcon";
import prolfile_one from "../../../assets/profile-1.jpg";
import prolfile_two from "../../../assets/profile-2.jpg";
import prolfile_three from "../../../assets/profile-3.jpg";
import ProfileCard from "../profile-card/ProfileCard";

const HeroSection = () => {
  return (
    <section className="bg-[#160A3A] text-white w-full px-4 md:px-8 lg:px-16 xl:px-[135px] py-16">
      <div className=" flex flex-col lg:flex-row justify-between items-center">
        <div className="lg:w-1/2 text-center lg:text-left">
          <div className="mb-4">
            <div className="bg-[linear-gradient(90deg,_#241457_2.27%,_#4F2BBD_102.95%)] rounded-[8px] py-2 w-[220px] flex justify-center items-center gap-2">
              <Checked />
              <p className="text-sm p-0">Verified by Coursera</p>
            </div>
          </div>
          <h1 className="text-4xl lg:text-6xl font-bold mb-6">
            Learn Code <br /> From top{" "}
            <span className="text-[#EAE34A] border-[#EAE34A] border-b-4">
              Coder
            </span>
          </h1>
          <p className="text-white-500 mb-8 leading-relaxed max-w-[570px]">
            It is a long established fact that a reader will be distracted by
            the readable content of a page when looking at its layout.
          </p>

          <div className="space-x-4 w-full flex items-center">
            <button className="bg-[#EAE34A] text-[#10005A] font-bold py-3 px-6 rounded-[4px] shadow-[0px_10px_30px_0px_#E5DE3529] hover:bg-[#E2D15B] transition">
              Get Started
            </button>

            <button className="bg-[#291B52] py-3 px-6 rounded-[4px] hover:bg-[#241147] transition flex justify-center items-center gap-2">
              <PlayIcon />
              How it works
            </button>
          </div>

          <div className="mt-8">
            <p className="text-base text-white-500">
              ⭐️⭐️⭐️⭐️⭐️ Based on 10,000+ reviews on
            </p>
            <div className="flex space-x-4 mt-2 justify-center lg:justify-start">
              <Crowd />
              <Capterra />
              <GetApp />
            </div>
          </div>
        </div>

        <div className="lg:w-1/2 mt-12 lg:mt-0 flex flex-wrap justify-center space-y-6 lg:space-y-0 lg:space-x-6">
          <ProfileCard
            bgColor="linear-gradient(180deg, #98FDE3 11.76%, #3E3761 100%)"
            name="Zillio Moniel"
            designation="Data Engineer"
            image={prolfile_one}
          />
          <div className="pt-14">
            <ProfileCard
              bgColor="linear-gradient(180deg, #DCB1FF 11.2%, #221644 109.89%)"
              name="Lissa Kie"
              designation="React Enginee"
              image={prolfile_two}
            />
          </div>

          <ProfileCard
            bgColor="linear-gradient(180deg, #98FDE3 0%, #3E3761 100%)"
            name="Killan James"
            designation="Laravel Engineer"
            image={prolfile_three}
          />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
