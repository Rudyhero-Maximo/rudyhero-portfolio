import styles from "./Posts.module.css";
import PostCard from "./PostCard";

export default function Posts() {
  return (
    <section className={styles.posts}>
      <div className={styles.container}>

        <div className={styles.sectionHeader}>
          <h2>Recent posts</h2>
        </div>

        <div className={styles.postsGrid}>
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