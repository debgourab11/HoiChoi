import Hero from "../components/Hero";
import MovieRow from "../components/MovieRow";
import Bhog from "../assets/bhog.jpg";
import movies2 from "../assets/Kolonko Web Series Official Poster.jpg";
import movies3 from "../assets/1098x1626-164d578870c9-4e27-b573-4b169be27a41-Gobhir-Joler-Mach-2_1098x1626.webp";
import movies4 from "../assets/sreekanto.jpg";
import movies5 from "../assets/nastonir.webp";
import movies6 from "../assets/sabdojobdo.jpg";
import movies7 from "../assets/birangona.jpg";
import movies8 from "../assets/mohomaya.jpg";

export default function Home() {
  const trending = [Bhog, movies2, movies3,movies4,movies5,movies6,movies7,movies8];
  const originals = [movies7, movies6, Bhog,movies8,movies4,movies5,movies2,movies3];

  return (
    <div className="bg-black min-h-screen pt-20 text-white">
      <Hero />
      <div className="max-w-6xl mx-auto">
        <MovieRow title="Trending Now" movies={trending} />
        <MovieRow title="Hoichoi Originals" movies={originals} />
      </div>
    </div>
  );
}