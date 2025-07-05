import Link from 'next/link';
import styles from '../styles/Home.module.css';

export default function Home() {
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Welcome to the Blog Viewer</h1>
      <p className={styles.description}>Click below to browse posts</p>
      <Link href="/posts">
        <button className={styles.button}>View Posts</button>
      </Link>
    </div>
  );
}
