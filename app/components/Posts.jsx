import PostCard from "./PostCard";

export default function Posts() {
  return (
    <section className="py-20 bg-[#fafafa]">
      <div className="max-w-4xl mx-auto px-5">

        <div className="mb-10">
          <h2 className="text-[26px] font-semibold">Recent posts</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <PostCard
            title="Aprendendo React na prática"
            date="12 Fev 2026"
            category="React"
            description="Um resumo dos principais conceitos de React que estou estudando, incluindo componentes, props e hooks."
          />

          <PostCard
            title="Boas práticas em Front-end"
            date="02 Jan 2026"
            category="Front-end"
            description="Organização de código, componentização e responsividade para criar interfaces mais profissionais."
          />
        </div>

      </div>
    </section>
  );
}
