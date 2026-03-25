/* eslint-disable @next/next/no-img-element */
import styles from "./Hero.module.css";

export default function Hero() {
  return (
    <section className={styles.hero}>
      <div className={styles.container}>

        <div className={styles.left}>
          <h1>
            Olá, eu sou Rudyhero,<br />
            Desenvolvedor Front-end
          </h1>

          <p>
            Desenvolvedor front-end focado em criar interfaces modernas,
            responsivas e com boa experiência do usuário. Tenho interesse em React, Next,
            JavaScript e boas práticas de desenvolvimento web.
          </p>

          <div className={styles.buttons}>
            <a 
              href="https://www.linkedin.com/in/rudyhero-maximo-210a8b104/" 
              target="_blank" 
              rel="noopener noreferrer"
              className={styles.primary}
            >
              LinkedIn
            </a>

            <a 
              href="https://github.com/Rudyhero-Maximo" 
              target="_blank" 
              rel="noopener noreferrer"
              className={styles.secondary}
            >
              GitHub
            </a>
          </div>
        </div>

        <div className={styles.right}>
          <img
            src="https://avatars.githubusercontent.com/u/255448044?v=4"
            alt="Rudy"
          />
        </div>

      </div>
    </section>
  );
}