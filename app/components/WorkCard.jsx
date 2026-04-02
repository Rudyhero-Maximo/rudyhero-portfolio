export default function WorkCard({ image, title, year, tech, description }) {
  return (
    <div className="flex flex-col md:flex-row gap-5 p-5 rounded-xl bg-white border border-gray-100 cursor-pointer transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_10px_25px_rgba(0,0,0,0.08)]">

      <img
        src={image}
        alt={title}
        className="w-full md:w-[200px] h-[180px] md:h-[140px] object-cover rounded-lg"
      />

      <div className="flex-1">
        <h3 className="text-xl font-semibold mb-2">{title}</h3>

        <div className="flex items-center gap-3 mb-2">
          <span className="bg-[#142850] text-white text-xs font-medium px-3 py-1 rounded-full">
            {year}
          </span>
          <span className="text-[#8695a4] text-sm">{tech}</span>
        </div>

        <p className="text-sm text-gray-500 leading-relaxed">{description}</p>
      </div>

    </div>
  );
}
