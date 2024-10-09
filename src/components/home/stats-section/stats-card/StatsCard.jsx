// StatCard.jsx
import PropTypes from "prop-types";

const StatCard = ({ image, bgColor, title, subtitle }) => {
  return (
    <div className="flex flex-col items-center">
      <div className="p-7 rounded-full" style={{ backgroundColor: bgColor }}>
        <img className="h-[34px] w-[34px]" src={image} alt={title} />
      </div>
      <h3 className="font-bold mt-4" style={{ fontSize: "48px" }}>
        {title}
      </h3>
      <p style={{ fontSize: "24px", color: "#B7AACC" }}>{subtitle}</p>
    </div>
  );
};

// Define prop types
StatCard.propTypes = {
  image: PropTypes.string.isRequired,
  bgColor: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  subtitle: PropTypes.string.isRequired,
};

export default StatCard;
