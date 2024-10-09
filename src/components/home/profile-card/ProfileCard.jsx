/* eslint-disable react/prop-types */
const ProfileCard = ({ bgColor, name, designation, image }) => {
  return (
    <div
      style={{ background: bgColor }}
      className="relative h-[459px] w-[160px] flex flex-col justify-between items-center rounded-[200px] overflow-hidden"
    >
      <div className="text-center mt-16">
        <h2 className="text-[22px] font-bold text-[#001510]">{name}</h2>
        <p className="text-base text-[#001510]">{designation}</p>
      </div>
      <img
        src={image}
        alt={name}
        className="absolute bottom-[-5%] rounded-full mx-auto"
        style={{ left: "50%", transform: "translateX(-50%)" }}
      />
    </div>
  );
};

export default ProfileCard;
