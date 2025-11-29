import React from "react";
import { Button } from "../ui/button";
import { Mail, PhoneCall } from "lucide-react";

const EmergencyContact = () => {
  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-6 text-center">
        <h2 className="text-3xl font-bold">Emergency Contact</h2>
        <p className="mt-3 text-gray-600 text-lg">
          For immediate help during disasters or critical emergencies.
        </p>

        <div className="mt-6 flex justify-center gap-4">
          <Button className="flex items-center gap-2 bg-red-600! hover:bg-red-700! px-8 py-6 text-lg ">
            <PhoneCall size={20} /> Call 112
          </Button>{" "}
          <Button className="flex items-center gap-2 border-red-600! hover:bg-gray-100! bg-white! text-black! px-8 py-6 text-lg ">
            <Mail size={20} /> abcdef@gmail.com
          </Button>
        </div>
      </div>
    </section>
  );
};

export default EmergencyContact;
