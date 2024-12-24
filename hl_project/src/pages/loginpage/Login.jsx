import React from "react";

const Login = () => {
  return (
    <div className="flex items-center justify-center min-h-screen w-full p-4 bg-cover bg-center relative" style={{ backgroundImage: `url('https://s.itl.cat/pngfile/s/220-2207142_sunset-pier-nature-sea-bench-wallpaper-bench-sunset.jpg'), linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5))` }}>
      <div className="w-full max-w-md bg-white/10 backdrop-blur-md rounded-lg p-8 text-center border border-white/50">
        <form className="flex flex-col">
          <h2 className="text-2xl font-bold mb-5 text-white">Login</h2>
          <div className="relative border-b-2 border-gray-300 mb-6">
            <input
              type="text"
              required
              placeholder="Enter your name"
              className="w-full bg-transparent border-none outline-none text-white text-lg h-10"
            />
            <label className="absolute top-1/2 left-0 transform -translate-y-1/2 text-white text-lg transition-all peer-placeholder-shown:top-1/2 peer-placeholder-shown:translate-y-1/2 peer-placeholder-shown:text-lg peer-focus:top-2 peer-focus:text-sm">
            
            </label>
          </div>
          <div className="relative border-b-2 border-gray-300 mb-6">
            <input
              type="password"
              required
              placeholder="Enter your password"
              className="w-full bg-transparent border-none outline-none text-white text-lg h-10"
            />
            <label className="absolute top-1/2 left-0 transform -translate-y-1/2 text-white text-lg transition-all peer-placeholder-shown:top-1/2 peer-placeholder-shown:translate-y-1/2 peer-placeholder-shown:text-lg peer-focus:top-2 peer-focus:text-sm">
              
            </label>
          </div>
          <div className="flex items-center justify-between text-white mb-6">
            <label className="flex items-center">
              <input type="checkbox" className="accent-white" />
              <span className="ml-2">Remember me</span>
            </label>
            <a href="#" className="hover:underline">Forgot password?</a>
          </div>
          <button
            type="submit"
            className="bg-white text-black font-semibold py-3 px-6 rounded-md border-2 border-transparent transition hover:bg-transparent hover:text-white hover:border-white"
          >
            Log In
          </button>
          <div className="mt-8 text-white">
            <p>
              Don't have an account? <a href="#" className="hover:underline hover:text-green-500">Register</a>
            </p>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Login;
