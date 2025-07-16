import { useState } from 'react';
import axios from 'axios';
import { useRouter } from 'next/router';

const LoginPage = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');
    const router = useRouter();

    const handleSubmit = async (e) => {
        e.preventDefault();
        setError('');
        try {
            const { data } = await axios.post('http://localhost:3001/api/auth/login', { username, password });
            localStorage.setItem('token', data.token);
            router.push('/admin');
        } catch (err) {
            setError('Invalid credentials');
        }
    };

    return (
        <div className="flex justify-center items-center h-screen">
            <form className="bg-white p-6 rounded shadow-md" onSubmit={handleSubmit}>
                <h2 className="text-2xl font-bold mb-4">Admin Login</h2>
                {error && <p className="text-red-500">{error}</p>}
                <div className="mb-4">
                    <label className="block text-gray-700">Username</label>
                    <input
                        type="text"
                        className="w-full p-2 border border-gray-300 rounded"
                        value={username}
                        onChange={(e) => setUsername(e.target.value)}
                    />
                </div>
                <div className="mb-4">
                    <label className="block text-gray-700">Password</label>
                    <input
                        type="password"
                        className="w-full p-2 border border-gray-300 rounded"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                    />
                </div>
                <button type="submit" className="w-full bg-blue-500 text-white p-2 rounded">
                    Login
                </button>
            </form>
        </div>
    );
};

export default LoginPage;
