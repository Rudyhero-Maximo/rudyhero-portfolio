/* eslint-disable @next/next/no-img-element */

export default function Hero() {
  return (
    <section className="py-24">
      <div className="max-w-4xl mx-auto px-5 flex flex-col-reverse md:flex-row items-center justify-between gap-12">

        <div className="flex-1 text-center md:text-left">
          <h1 className="text-5xl font-bold mb-5 leading-tight">
            Ola, eu sou Rudyhero,<br />
            Desenvolvedor Front-end
          </h1>

          <p className="text-gray-500 leading-relaxed mb-8 text-[15px]">
            Desenvolvedor front-end focado em criar interfaces modernas,
            responsivas e com boa experiencia do usuario. Tenho interesse em React, Next,
            JavaScript e boas praticas de desenvolvimento web.
          </p>

          <div className="flex gap-4 justify-center md:justify-start">
            <a
              href="https://www.linkedin.com/in/rudyhero-maximo-210a8b104/"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-[#ff6464] hover:bg-[#e05555] text-white px-6 py-3 rounded-md text-sm transition-all duration-300 hover:-translate-y-0.5"
            >
              LinkedIn
            </a>

            <a
              href="https://github.com/Rudyhero-Maximo"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-[#ff6464] hover:bg-[#e05555] text-white px-6 py-3 rounded-md text-sm transition-all duration-300 hover:-translate-y-0.5"
            >
              GitHub
            </a>
          </div>
        </div>

        <div className="flex justify-center items-center">
          <img
            src="https://avatars.githubusercontent.com/u/255448044?v=4"
            alt="Rudy"
            className="w-[180px] h-[180px] md:w-[220px] md:h-[220px] rounded-full object-cover"
          />
        </div>

      </div>
    </section>
  );
}
