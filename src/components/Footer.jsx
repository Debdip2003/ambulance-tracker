import { Facebook, Instagram, Twitter, Linkedin } from "lucide-react";
import { Separator } from "@/components/ui/separator";

export default function Footer() {
  // Links using map()
  const quickLinks = ["Home", "Services", "About Us", "Contact"];
  const supportLinks = [
    "FAQs",
    "Help Center",
    "Privacy Policy",
    "Terms & Conditions",
  ];

  return (
    <div className="w-full">
      {/* Grid Section */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-10">
        {/* Logo + About */}
        <div>
          <h2 className="text-white text-2xl font-bold mb-3">Swift Rescue</h2>
          <p className="text-sm">
            Your trusted platform for booking ambulances quickly and safely. We
            ensure fast response, verified operators, and transparent pricing.
          </p>

          {/* Social Icons */}
          <div className="flex gap-4 mt-4">
            <Facebook className="w-5 h-5 hover:text-white cursor-pointer" />
            <Instagram className="w-5 h-5 hover:text-white cursor-pointer" />
            <Twitter className="w-5 h-5 hover:text-white cursor-pointer" />
            <Linkedin className="w-5 h-5 hover:text-white cursor-pointer" />
          </div>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="text-white text-lg font-semibold mb-3">Quick Links</h3>
          <ul className="space-y-2 text-sm">
            {quickLinks.map((link, idx) => (
              <li key={idx} className="hover:text-white cursor-pointer">
                {link}
              </li>
            ))}
          </ul>
        </div>

        {/* Support */}
        <div>
          <h3 className="text-white text-lg font-semibold mb-3">Support</h3>
          <ul className="space-y-2 text-sm">
            {supportLinks.map((link, idx) => (
              <li key={idx} className="hover:text-white cursor-pointer">
                {link}
              </li>
            ))}
          </ul>
        </div>

        {/* Contact */}
        <div>
          <h3 className="text-white text-lg font-semibold mb-3">Contact Us</h3>
          <ul className="space-y-2 text-sm">
            <li>Email: support@mywebsite.com</li>
            <li>Phone: +91 98765 43210</li>
            <li>Kolkata, West Bengal</li>
            <li>Available 24/7</li>
          </ul>
        </div>
      </div>

      <Separator className="my-6 bg-gray-700" />

      {/* Bottom */}
      <p className="text-center  text-sm">
        © {new Date().getFullYear()} Swift Rescue. All rights reserved.
      </p>
    </div>
  );
}
