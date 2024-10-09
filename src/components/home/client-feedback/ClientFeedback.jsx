import FeedbackCarousel from "./carousel/FeedbackCarousel ";

const FeedbackSection = () => {
  return (
    <div>
      <div className="flex flex-col items-center text-center mb-8  mt-8">
        <h2 className="mb-2" style={{ fontSize: "54px", fontWeight: "600" }}>
          What Customers are ,<br /> Saying About Us
        </h2>
        <p className="text-gray-600" style={{ fontSize: "18px" }}>
          Our commitment to quality, sustainability, and customer satisfaction
          remains unwavering.
        </p>
      </div>

      <div className="flex justify-center items-center space-x-6">
        <div className="slider-container">
          <FeedbackCarousel />
        </div>
      </div>
    </div>
  );
};

export default FeedbackSection;
