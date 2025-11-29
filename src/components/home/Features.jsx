import { Ambulance, Clock, MapPin } from "lucide-react";
import React from "react";

const Features = () => {
  return (
    <section className="w-full py-16 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <h2 className="text-3xl font-bold text-center text-gray-800">
          Why Choose Our Emergency Service?
        </h2>

        <div className="grid md:grid-cols-3 gap-10 mt-12">
          {/* Card 1 */}
          <div className="p-6 shadow-md rounded-xl bg-white text-center">
            <Clock className="mx-auto mb-4" size={40} />
            <h3 className="text-xl font-semibold">Fast Response</h3>
            <p className="text-gray-600 mt-2">
              Get instant ambulance dispatch with <b>real-time availability</b>.
            </p>
          </div>

          {/* Card 2 */}
          <div className="p-6 shadow-md rounded-xl bg-white text-center">
            <MapPin className="mx-auto mb-4" size={40} />
            <h3 className="text-xl font-semibold">Live Tracking</h3>
            <p className="text-gray-600 mt-2">
              Track the ambulance location and <b>estimated arrival time</b>.
            </p>
          </div>

          {/* Card 3 */}
          <div className="p-6 shadow-md rounded-xl bg-white text-center">
            <Ambulance className="mx-auto mb-4" size={40} />
            <h3 className="text-xl font-semibold">Verified Ambulances</h3>
            <p className="text-gray-600 mt-2">
              All ambulances are government-registered and well equipped.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Features;
