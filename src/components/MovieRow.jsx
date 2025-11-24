export default function MovieRow({ title, movies }) {
  return (
    <div className="mt-10">
      <h2 className="text-2xl font-semibold text-white mb-4">{title}</h2>
      <div className="flex gap-4 overflow-x-scroll p-2">
        {movies.map((m, i) => (
          <img key={i} src={m} className="w-40 rounded-lg hover:scale-105 transition" />
        ))}
      </div>
    </div>
  );
}