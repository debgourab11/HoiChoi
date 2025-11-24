import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <nav className="bg-black/80 backdrop-blur-md fixed top-0 w-full z-50 border-b border-red-600/40">
      <div className="max-w-6xl mx-auto flex items-center justify-between p-4">
        <h1 className="text-3xl font-bold text-red-600">Hoichoi</h1>
        <div className="flex gap-6 text-white text-lg">
          <Link to="/">Home</Link>
          <Link to="/movies">Movies</Link>
          <Link to="/shows">Shows</Link>
        </div>
        <button className="bg-red-600 px-4 py-2 rounded-lg text-white">
          Subscribe
        </button>
      </div>
    </nav>
  );
}