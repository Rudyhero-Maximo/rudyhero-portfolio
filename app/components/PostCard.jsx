export default function PostCard({ title, date, category, description }) {
  return (
    <article className="bg-white p-5 rounded-xl border border-gray-100 cursor-pointer transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_10px_25px_rgba(0,0,0,0.08)]">
      <h3 className="text-lg font-semibold mb-2">{title}</h3>
      <span className="text-[13px] text-[#8695a4] block mb-2">
        {date} • {category}
      </span>
      <p className="text-sm text-gray-500 leading-relaxed">{description}</p>
    </article>
  );
}
