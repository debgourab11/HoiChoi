import hero from "../assets/doimonti.jpg";

export default function Hero() {
  return (
    <section
      className="h-[70vh] bg-cover bg-center relative"
      style={{ backgroundImage: `url(${hero})` }}
    >
      <div className="absolute inset-0 bg-black/60"></div>
      <div className="relative z-10 max-w-4xl mx-auto pt-40 text-white">
        <h1 className="text-5xl font-bold">Watch Bengali Movies & Web Series</h1>
        <p className="text-xl mt-4">Unlimited Bengali entertainment – anytime, anywhere.</p>
        <button className="bg-red-600 px-6 py-3 mt-6 rounded-lg text-xl">
          Start Watching
        </button>
      </div>
    </section>
  );
}