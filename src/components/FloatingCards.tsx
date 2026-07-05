import RevenueCard from "./cards/RevenueCard";
import ProfileCard from "./cards/ProfileCard";
import AnalyticsCard from "./cards/AnalyticsCard";
import AIInfoCard from "./cards/AIInfoCard";
import TrainingCard from "./cards/TrainingCard";
import MobileCard from "./cards/MobileCard";

function FloatingCards() {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">

      {/* Revenue */}
      <div className="absolute left-[3%] top-[76%] z-10">
        <RevenueCard />
      </div>

      {/* Profile */}
      <div className="absolute left-[17%] top-[77%] z-20">
        <ProfileCard />
      </div>

      {/* Analytics */}
      <div className="absolute left-[32%] top-[73%] z-30">
        <AnalyticsCard />
      </div>

      {/* AI */}
      <div className="absolute left-[48%] top-[72%] z-40">
        <AIInfoCard />
      </div>

      {/* Training */}
      <div className="absolute left-[69%] top-[76%] z-20">
        <TrainingCard />
      </div>

      {/* Mobile */}
      <div className="absolute left-[84%] top-[75%] z-10">
        <MobileCard />
      </div>

    </div>
  );
}

export default FloatingCards;