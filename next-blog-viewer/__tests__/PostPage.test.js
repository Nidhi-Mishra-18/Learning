import { render, screen } from '@testing-library/react';
import PostsPage, { getStaticProps } from '../pages/posts.js';

const mockPosts = [
  {
    id: 1,
    title: "The Rise of AI",
    content:
      "Artificial Intelligence is transforming industries worldwide with automation, personalization, and predictive analytics. AI tools are now being adopted in healthcare, finance, education, and even creative fields.",
    image: "/images/tech.jpg",
  },
];

test('renders blog titles from props', () => {
  render(<PostsPage posts={mockPosts} />);
  expect(screen.getByText('The Rise of AI')).toBeInTheDocument();
});

test('getStaticProps fetches posts correctly', async () => {
  global.fetch = jest.fn(() =>
    Promise.resolve({
      json: () => Promise.resolve(mockPosts),
    })
  );

  const { props } = await getStaticProps();
  expect(props.posts).toEqual(mockPosts);
});

afterEach(() => {
  jest.resetAllMocks();
});
