import { render, screen, fireEvent } from '@testing-library/react';
import PostDetail from '../components/PostDetail';

const post = {
    id: 1,
    title: 'Test Detail',
    content: 'This is the full blog post content.',
    image: '/image.jpg',
};

test('renders post title, content and image', () => {
    render(<PostDetail post={post} onClose={() => { }} />);
    expect(screen.getByText(post.title)).toBeInTheDocument();
    expect(screen.getByText(post.content)).toBeInTheDocument();
    expect(screen.getByRole('img')).toHaveAttribute('src', post.image);
});

test('clicking close button triggers onClose', () => {
    const handleClose = jest.fn();
    render(<PostDetail post={post} onClose={handleClose} />);
    fireEvent.click(screen.getByRole('button'));
    expect(handleClose).toHaveBeenCalled();
});
