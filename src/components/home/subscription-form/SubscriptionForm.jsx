const SubscriptionForm = () => {
  return (
    <div
      className="flex items-center justify-center bg-white"
      style={{ padding: "70px 185px" }}
    >
      <div
        className="text-center p-10 rounded-[24px] shadow-lg"
        style={{ backgroundColor: "#4942BB" }}
      >
        <div>
          <h1
            className="text-white font-bold mb-6"
            style={{ fontSize: "60px" }}
          >
            Let’s work together to grow your business
          </h1>
          <p className="text-white opacity-70 mb-8">
            Here are many variations of passages of Lorem Ipsum available, but
            the majority have suffered alteration
          </p>
          <div className="flex justify-center gap-4">
            <input
              type="email"
              placeholder="Enter your email address"
              className="px-4 py-2 rounded-full w-72 text-gray-700 focus:outline-none focus:ring-2 focus:ring-yellow-400"
            />
            <button className="bg-yellow-400 hover:bg-yellow-500 text-white font-bold py-2 px-6 rounded-full transition duration-300 ease-in-out">
              Subscribe
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SubscriptionForm;
