import React from "react";
import { Button } from "../ui/button";

const TrackingSection = () => {
  return (
    <section className="w-full bg-blue-600 py-16 text-white">
      <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-10 items-center">
        <div>
          <h2 className="text-3xl font-bold">Real-Time Ambulance Tracking</h2>
          <p className="mt-4 text-lg text-blue-100">
            Our system uses GPS-enabled vehicles to help you track your
            ambulance live. See the exact location, route, and estimated arrival
            time instantly.
          </p>

          <Button
            variant="secondary"
            className="mt-6 px-6 py-6 text-lg bg-white! hover:bg-gray-100!"
          >
            Start Tracking
          </Button>
        </div>

        {/* Map or illustration */}
        <div className="flex justify-center">
          <img
            src="https://cdn-icons-png.flaticon.com/512/854/854866.png"
            alt="tracking"
            className="w-[300px] md:w-[380px]"
          />
        </div>
      </div>
    </section>
  );
};

export default TrackingSection;
