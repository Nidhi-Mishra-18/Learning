import styles from '../styles/PostDetail.module.css';

export default function PostDetail({ post, onClose }) {
  return (
    <div className={styles.modal}>
      <img src={post.image} alt={post.title} className={styles.image} />
      <h2 className={styles.title}>{post.title}</h2>
      <p className={styles.content}>{post.content}</p><button className={styles.closeButton} onClick={onClose}>
        BACK
      </button>
    </div>
  );
}
