import { Link } from "react-router-dom";
import { Mail, Lock, User } from "lucide-react";

export default function Signup() {
  return (
    <div className="min-h-screen bg-[#020817] flex items-center justify-center px-6">

      <div className="absolute w-[500px] h-[500px] rounded-full bg-cyan-600/20 blur-3xl"></div>

      <div className="relative z-10 w-full max-w-md">

        <div className="bg-slate-900/70 backdrop-blur-xl border border-slate-700 rounded-3xl p-10">

          <h1 className="text-4xl font-bold text-center text-white">
            Create Account
          </h1>

          <p className="text-center text-slate-400 mt-2">
            Join OutbreakAI
          </p>

          <form className="space-y-5 mt-8">

            <Input icon={<User size={20}/>}>
              <input
                placeholder="Full Name"
                className="bg-transparent outline-none text-white w-full ml-3"
              />
            </Input>

            <Input icon={<Mail size={20}/>}>
              <input
                placeholder="Email"
                className="bg-transparent outline-none text-white w-full ml-3"
              />
            </Input>

            <Input icon={<Lock size={20}/>}>
              <input
                type="password"
                placeholder="Password"
                className="bg-transparent outline-none text-white w-full ml-3"
              />
            </Input>

            <Input icon={<Lock size={20}/>}>
              <input
                type="password"
                placeholder="Confirm Password"
                className="bg-transparent outline-none text-white w-full ml-3"
              />
            </Input>

            <button className="w-full bg-cyan-600 hover:bg-cyan-700 transition rounded-xl py-3 font-semibold text-white">
              Create Account
            </button>

          </form>

          <p className="text-center mt-8 text-slate-400">

            Already have an account?

            <Link
              to="/login"
              className="text-cyan-400 ml-2"
            >
              Sign In
            </Link>

          </p>

        </div>

      </div>

    </div>
  );
}

function Input({ icon, children }) {
  return (
    <div className="flex items-center px-4 py-3 rounded-xl bg-slate-800 border border-slate-700 text-slate-400">
      {icon}
      {children}
    </div>
  );
}