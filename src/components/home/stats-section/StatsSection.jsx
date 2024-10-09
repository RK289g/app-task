import frame1 from "../../../assets/statsIcon/Frame1.png";
import frame2 from "../../../assets/statsIcon/Frame2.png";
import frame3 from "../../../assets/statsIcon/Frame3.png";
import frame4 from "../../../assets/statsIcon/Frame4.png";
import frame5 from "../../../assets/statsIcon/Frame5.png";
import StatCard from "./stats-card/StatsCard";

const StatsSection = () => {
  return (
    <section className="text-white bg-[#2B0D57]">
      <div
        className="container mx-auto grid grid-cols-2 md:grid-cols-5 gap-8 text-center"
        style={{ padding: "70px 206px" }}
      >
        <StatCard
          image={frame1}
          bgColor="#E7FF7A"
          title="360+"
          subtitle="Teachers"
        />
        <StatCard
          image={frame2}
          bgColor="#ff8fdf"
          title="30K+"
          subtitle="Students"
        />
        <StatCard
          image={frame3}
          bgColor="#ff5bb4"
          title="8K+"
          subtitle="Lessons"
        />
        <StatCard
          image={frame4}
          bgColor="#ff8787"
          title="200"
          subtitle="Partners"
        />
        <StatCard
          image={frame5}
          bgColor="#65fbd5"
          title="60%"
          subtitle="Success"
        />
      </div>
    </section>
  );
};

export default StatsSection;
