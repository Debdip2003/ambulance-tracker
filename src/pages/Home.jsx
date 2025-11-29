import EmergencyContact from "@/components/home/EmergencyContact";
import Features from "@/components/home/Features";
import HeroSection from "@/components/home/HeroSection";
import TrackingSection from "@/components/home/TrackingSection";
import React from "react";

const Home = () => {
  return (
    <>
      <HeroSection />
      <Features />
      <TrackingSection />
      <EmergencyContact />
    </>
  );
};

export default Home;
