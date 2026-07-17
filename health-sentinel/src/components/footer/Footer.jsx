import {
  FaGithub,
  FaLinkedin,
  FaInstagram,
  FaXTwitter,
  FaEnvelope,
  FaPhone,
  FaLocationDot,
} from "react-icons/fa6";

export default function Footer() {
  return (
    <footer className="bg-[#020817] border-t border-slate-800 text-white mt-20">

      
      <div className="max-w-7xl mx-auto px-8 py-14 text-center">

        <h1 className="text-4xl font-bold text-cyan-400">
          Episense
        </h1>

        <p className="text-gray-400 max-w-10xl mx-auto mt-5 leading-8">
          Aritificial Intelligence powered platform to predict the outbreak of fatal diseases across various parts of India in order to prevent its citizens from any future epidemics by taking preventive measures at the right time.
        </p>

        <p className="mt-6 text-cyan-300 font-semibold">
          For the people of India
        </p>

      </div>

      <div className="border-t border-slate-800"></div>

      
      <div className="max-w-7xl mx-auto px-8 py-14 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mt-20">

       
        <div>

          <h2 className="text-xl font-semibold mb-5">
            Quick Links
          </h2>

          <ul className="space-y-3 text-gray-400">

            <li>Home</li>

            <li>About</li>

            <li>Login</li>

            <li>Sign Up</li>

            <li>Contact</li>

          </ul>

        </div>

        {/* Features */}
        <div>

          <h2 className="text-xl font-semibold mb-5">
            Features
          </h2>

          <ul className="space-y-3 text-gray-400">

            <li>AI Prediction</li>

            <li>Weather Analysis</li>

            <li>Citizen Reporting</li>

            <li>Health Dashboard</li>

            <li>Heatmaps</li>

          </ul>

        </div>

        {/* Contact */}
        <div>

          <h2 className="text-xl font-semibold mb-5">
            Contact
          </h2>

          <div className="space-y-4 text-gray-400">

            <div className="flex items-center gap-3">
              <FaEnvelope className="text-cyan-400" />
              episenseforyou@gmail.com
            </div>

            <div className="flex items-center gap-3">
              <FaPhone className="text-cyan-400" />
              +91 9695567325
            </div>

            <div className="flex items-center gap-3">
              <FaLocationDot className="text-cyan-400" />
              IISER Bhopal, India
            </div>

          </div>

        </div>

        {/* Follow Us */}
        <div>

          <h2 className="text-xl font-semibold mb-5">
            Follow Us
          </h2>

          <div className="flex gap-5 text-2xl">

            <FaGithub className="cursor-pointer hover:text-cyan-400 transition" />

            <FaLinkedin className="cursor-pointer hover:text-cyan-400 transition" />

            <FaInstagram className="cursor-pointer hover:text-cyan-400 transition" />

            <FaXTwitter className="cursor-pointer hover:text-cyan-400 transition" />

          </div>

        </div>

      </div>

      <div className="border-t border-slate-800"></div>

      {/* Copyright */}
      <div className="max-w-7xl mx-auto px-8 py-6 text-center text-gray-500">

        © 2026 Episense. All Rights Reserved.

      </div>

    </footer>
  );
}