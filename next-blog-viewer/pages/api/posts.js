
import posts from '../../data/PostsData';

export default function handler(req, res) {
  res.status(200).json(posts);
}
