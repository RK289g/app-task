// import FeedbackSection from "../../components/home/client-feedback/ClientFeedback";
import HeroSection from "../../components/home/hero-section/HeroSection";
import StatsSection from "../../components/home/stats-section/StatsSection";
import SubscriptionForm from "../../components/home/subscription-form/SubscriptionForm";

const Home = () => {
  return (
    <div>
      <HeroSection />
      <StatsSection />
      {/* <FeedbackSection /> */}
      <SubscriptionForm />
    </div>
  );
};

export default Home;
