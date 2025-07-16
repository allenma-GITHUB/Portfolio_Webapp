import { useState, useEffect } from 'react';
import axios from 'axios';
import Link from 'next/link';

const Blog = () => {
    const [posts, setPosts] = useState([]);

    useEffect(() => {
        const fetchPosts = async () => {
            try {
                const { data } = await axios.get('/api/blogs');
                setPosts(data);
            } catch (error) {
                console.error('Error fetching blog posts:', error);
            }
        };
        fetchPosts();
    }, []);

    return (
        <section id="blog" className="py-10">
            <h2 className="text-3xl font-bold text-center">Blog</h2>
            <div className="mt-8">
                {posts.map((post) => (
                    <div key={post.BlogID} className="mb-8">
                        <h3 className="font-bold text-xl">
                            <Link href={`/blog/${post.BlogID}`}>
                                <a>{post.Title}</a>
                            </Link>
                        </h3>
                        <p className="text-gray-600">Published on {new Date(post.PublishedDate).toLocaleDateString()}</p>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default Blog;
