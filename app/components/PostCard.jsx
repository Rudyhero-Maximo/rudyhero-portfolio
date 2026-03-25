import styles from "./Posts.module.css";

export default function PostCard({ title, date, category, description }) {
  return (
    <article className={styles.card}>
      <h3>{title}</h3>
      <span>
        {date} • {category}
      </span>
      <p>{description}</p>
    </article>
  );
}