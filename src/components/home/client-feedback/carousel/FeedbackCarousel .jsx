import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import client1 from "../../../../assets/client-feedback/client1.png";
import client2 from "../../../../assets/client-feedback/client2.png";
import client3 from "../../../../assets/client-feedback/client2.png";
import FeedbackCard from "../client-feedback-card/ClientFeedbackCard";

const FeedbackCarousel = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
  };

  return (
    <Slider {...settings}>
      <div>
        <FeedbackCard
          name="Joe Root"
          title="Marketing Specialist"
          feedback="The ease of use, quality of coffee, and the outstanding customer support make Corfeel choice for all things coffee."
          stars={5}
          image={client1}
        />

        <div>
          <FeedbackCard
            name="David Malan"
            title="Sales Manager"
            feedback="The Corfeel team has exceeded our in the providing top notch service and delicious coffee."
            stars={5}
            image={client2}
          />
        </div>

        <div>
          <FeedbackCard
            name="Harry Book"
            title="Investment Planner"
            feedback="The positive feedback we've on the quality of coffee variety of options available is a testament to Corfeel's excellence."
            stars={5}
            image={client3}
          />
        </div>
      </div>
    </Slider>
  );
};

export default FeedbackCarousel;
