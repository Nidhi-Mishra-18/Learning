import styles from '../styles/PostList.module.css';

export default function PostList({ posts, onSelect }) {
    return (
        <div className={styles.container}>
            {posts.map((post) => (
                <div
                    key={post.id}
                    className={styles.card}
                    onClick={() => onSelect(post)}
                >
                    <img src={post.image} alt={post.title} className={styles.image} />
                    <h3 className={styles.title}>{post.title}</h3>
                </div>
            ))}
        </div>
    );
}
