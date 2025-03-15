import React, { useState } from "react";
// import BreakingNews from "./components/BreakingNews";

import HeroSection from "../HeroSection/HeroSection"
import NewsCard from "../NewsCard/NewsCard"
import NewsSubscriptionBanner from "../NewsSubscriptionBanner/NewsSubscriptionBanner"
import GamesSection from "../GamesSection/GamesSection"
import BreakingNews from "../BreakingNews/BreakingNews"
import ArabicNewsLayout from "../ArabicNewsLayout/ArabicNewsLayout"
import NewsSection from "../NewsSection/NewsSection"

function Home() {

  return (
    <div>
      <HeroSection/>
      <NewsSection/>
      <ArabicNewsLayout/>
      <NewsCard/>
      <NewsSubscriptionBanner/>
      {/* <BreakingNews/> */}
      <GamesSection/>
{/* <BookExperience/>    */}
 </div>
  
   
  )
}

export default Home