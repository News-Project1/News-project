import React from "react";

import HeroSection from "../HeroSection/HeroSection";
import NewsCard from "../NewsCard/NewsCard";
import NewsSubscriptionBanner from "../NewsSubscriptionBanner/NewsSubscriptionBanner";
import GamesSection from "../GamesSection/GamesSection";
import BreakingNews from "../BreakingNews/BreakingNews";
import ArabicNewsLayout from "../ArabicNewsLayout/ArabicNewsLayout";
import NewsSection from "../NewsSection/NewsSection";
import NewsTicker from "../NewsTicker/NewsTicker";
import NewsDashboard from "../NewsDashboard/NewsDashboard";

function Home() {
  return (
    <>
      <HeroSection />
      <NewsTicker />
      <div className="container mx-auto px-4 space-y-6">
      <NewsDashboard />
      <ArabicNewsLayout />
      <NewsCard />
      <NewsSubscriptionBanner />
      <GamesSection />
    </div>
    </>

  );
}

export default Home;
