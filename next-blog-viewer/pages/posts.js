import { useState } from 'react';
import PostList from '../components/PostList';
import PostDetail from '../components/PostDetail';
import styles from '../styles/PostPage.module.css';

export default function PostsPage({ posts }) {
  const [selectedPost, setSelectedPost] = useState(null);

  return (
    <div className={styles.container}>
      <h1 className={styles.heading}>📝 Blog Posts</h1>
      <PostList posts={posts} onSelect={setSelectedPost} />
      {selectedPost && (
        <PostDetail post={selectedPost} onClose={() => setSelectedPost(null)} />
      )}
    </div>
  );
}

export async function getStaticProps() {
  const res = await fetch('http://localhost:3000/api/posts');
  const posts = await res.json();
  return {
    props: { posts },
  };
}
