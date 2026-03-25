import styles from "./Works.module.css";

export default function WorkCard({
  image,
  title,
  year,
  tech,
  description,
}) {
  return (
    <div className={styles.card}>
      
      <img
        src={image}
        alt={title}
        className={styles.image}
      />

      <div className={styles.content}>
        <h3 className={styles.title}>{title}</h3>

        <div className={styles.meta}>
          <span className={styles.year}>{year}</span>
          <span className={styles.tech}>{tech}</span>
        </div>

        <p className={styles.description}>{description}</p>
      </div>

    </div>
  );
}