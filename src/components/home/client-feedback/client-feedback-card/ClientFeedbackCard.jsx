import PropTypes from "prop-types";

const FeedbackCard = ({ name, title, feedback, stars, image }) => {
  return (
    <div className="flex flex-col items-center justify-center p-6 bg-white rounded-lg shadow-lg w-80">
      <img
        src={image}
        alt={`${name}`}
        className="w-16 h-16 rounded-full mb-4"
      />
      <h3 className="text-lg font-semibold">{name}</h3>
      <p className="text-gray-500 text-sm mb-4">{title}</p>

      {/* Star rating */}
      <div className="flex mb-4">
        {Array.from({ length: stars }).map((_, index) => (
          <svg
            key={index}
            className="w-5 h-5 text-yellow-400"
            fill="currentColor"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M9.049 2.927a.75.75 0 011.414 0l1.518 3.26 3.594.52a.75.75 0 01.416 1.278l-2.6 2.533.614 3.575a.75.75 0 01-1.088.791L10 13.347l-3.21 1.688a.75.75 0 01-1.088-.79l.614-3.576-2.6-2.533a.75.75 0 01.416-1.278l3.594-.52 1.518-3.26z" />
          </svg>
        ))}
      </div>

      <p className="text-gray-600 text-center italic mb-4">
        {`${feedback}`}&quot;
      </p>
    </div>
  );
};

FeedbackCard.propTypes = {
  name: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  feedback: PropTypes.string.isRequired,
  stars: PropTypes.number.isRequired,
  image: PropTypes.string.isRequired,
};

export default FeedbackCard;
