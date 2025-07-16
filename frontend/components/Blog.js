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
        <section id="blog" className="py-20 bg-gray-50">
            <h2 className="text-3xl font-bold text-center text-gray-800">Insights & Articles</h2>
            <div className="mt-12 grid gap-10 md:grid-cols-2 lg:grid-cols-3">
                {posts.map((post) => (
                    <div key={post.BlogID} className="bg-white rounded-lg shadow-lg overflow-hidden">
                        <div className="p-6">
                            <h3 className="font-bold text-xl text-gray-800">
                                <Link href={`/blog/${post.BlogID}`}>
                                    <a className="hover:underline">{post.Title}</a>
                                </Link>
                            </h3>
                            <p className="text-sm text-gray-500 mt-2">Published on {new Date(post.PublishedDate).toLocaleDateString()}</p>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default Blog;
