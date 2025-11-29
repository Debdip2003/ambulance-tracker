import React from "react";
import { Button } from "../ui/button";

const HeroSection = () => {
  return (
    <section className="w-full py-20 mt-20">
      <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-10 items-center">
        {/* Left text */}
        <div>
          <h1 className="text-4xl md:text-5xl font-bold leading-tight text-gray-800">
            Fast & Reliable
            <span className="text-blue-600"> Emergency Ambulance</span>
            Services Near You
          </h1>

          <p className="mt-4 text-gray-600 text-lg">
            Book an ambulance instantly with real-time tracking, emergency
            support, and verified medical teams available 24/7.
          </p>

          <div className="flex gap-4 mt-6">
            <Button className="bg-blue-600!  px-6 py-6 text-lg hover:bg-blue-700!">
              Book Ambulance
            </Button>

            <Button
              variant="outline"
              className="px-6 py-6 text-lg bg-white! text-black! border-black! hover:bg-gray-100!"
            >
              Track Ambulance
            </Button>
          </div>
        </div>

        {/* Right image */}
        <div className="flex justify-center">
          <img
            src="https://cdn-icons-png.flaticon.com/512/2965/2965879.png"
            alt="ambulance"
            className="w-[320px] md:w-[420px]"
          />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
