import { Link } from "react-router-dom";
import { Mail, Lock } from "lucide-react";

export default function Login() {
  return (
    <div className="min-h-screen bg-[#020817] flex items-center justify-center px-6">

      {/* Background Glow */}
      <div className="absolute w-[500px] h-[500px] rounded-full bg-blue-700/20 blur-3xl"></div>

      {/* Card */}
      <div className="relative z-10 w-full max-w-md">

        <div className="bg-slate-900/70 backdrop-blur-xl border border-slate-700 rounded-3xl p-10 shadow-2xl">

          <h1 className="text-4xl font-bold text-white text-center">
            Welcome Back
          </h1>

          <p className="text-slate-400 text-center mt-2">
            Continue protecting communities.
          </p>

          <form className="mt-8 space-y-5">

            {/* Email */}

            <div>
              <label className="text-slate-300 mb-2 block">
                Email
              </label>

              <div className="flex items-center bg-slate-800 rounded-xl px-4 py-3 border border-slate-700">

                <Mail size={20} className="text-slate-400"/>

                <input
                  type="email"
                  placeholder="you@example.com"
                  className="bg-transparent ml-3 w-full outline-none text-white"
                />
              </div>
            </div>

            {/* Password */}

            <div>

              <label className="text-slate-300 mb-2 block">
                Password
              </label>

              <div className="flex items-center bg-slate-800 rounded-xl px-4 py-3 border border-slate-700">

                <Lock size={20} className="text-slate-400"/>

                <input
                  type="password"
                  placeholder="********"
                  className="bg-transparent ml-3 w-full outline-none text-white"
                />

              </div>

            </div>

            <div className="flex justify-between text-sm">

              <label className="text-slate-400 flex items-center gap-2">
                <input type="checkbox" />
                Remember me
              </label>

              <button
                type="button"
                className="text-blue-400 hover:text-blue-300"
              >
                Forgot Password?
              </button>

            </div>

            <button
              className="w-full bg-blue-600 hover:bg-blue-700 transition rounded-xl py-3 font-semibold text-white"
            >
              Sign In
            </button>

          </form>

          <div className="mt-8 text-center">

            <p className="text-slate-400">

              Don't have an account?

              <Link
                to="/signup"
                className="text-blue-400 ml-2 hover:text-blue-300"
              >
                Create one
              </Link>

            </p>

          </div>

        </div>

      </div>

    </div>
  );
}