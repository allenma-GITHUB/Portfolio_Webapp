import { useState, useEffect } from 'react';
import { useRouter } from 'next/router';
import axios from 'axios';

const BlogPostPage = () => {
    const [post, setPost] = useState(null);
    const router = useRouter();
    const { id } = router.query;

    useEffect(() => {
        if (id) {
            const fetchPost = async () => {
                try {
                    const { data } = await axios.get(`/api/blogs/${id}`);
                    setPost(data);
                } catch (error) {
                    console.error('Error fetching blog post:', error);
                }
            };
            fetchPost();
        }
    }, [id]);

    if (!post) {
        return <div>Loading...</div>;
    }

    return (
        <div>
            <h1 className="text-4xl font-bold my-8">{post.Title}</h1>
            <p className="text-gray-600 mb-8">Published on {new Date(post.PublishedDate).toLocaleDateString()}</p>
            <div className="prose lg:prose-xl">
                {post.Content}
            </div>
        </div>
    );
};

export default BlogPostPage;
