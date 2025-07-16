import { useState } from 'react';
import axios from 'axios';

const ContactPage = () => {
    const [form, setForm] = useState({ name: '', email: '', message: '' });
    const [response, setResponse] = useState({ type: '', message: '' });

    const handleChange = (e) => {
        setForm({ ...form, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            await axios.post('/api/contact', form);
            setResponse({ type: 'success', message: 'Your message has been sent successfully!' });
            setForm({ name: '', email: '', message: '' });
        } catch (error) {
            setResponse({ type: 'error', message: 'There was an error sending your message. Please try again later.' });
        }
    };

    return (
        <div>
            <h1 className="text-3xl font-bold text-center my-8">Contact Me</h1>
            <form onSubmit={handleSubmit} className="max-w-xl mx-auto">
                <div className="mb-4">
                    <label htmlFor="name" className="block text-gray-700">Name</label>
                    <input type="text" id="name" name="name" value={form.name} onChange={handleChange} required className="w-full p-2 border border-gray-300 rounded" />
                </div>
                <div className="mb-4">
                    <label htmlFor="email" className="block text-gray-700">Email</label>
                    <input type="email" id="email" name="email" value={form.email} onChange={handleChange} required className="w-full p-2 border border-gray-300 rounded" />
                </div>
                <div className="mb-4">
                    <label htmlFor="message" className="block text-gray-700">Message</label>
                    <textarea id="message" name="message" value={form.message} onChange={handleChange} required rows="5" className="w-full p-2 border border-gray-300 rounded"></textarea>
                </div>
                <button type="submit" className="w-full bg-blue-500 text-white p-2 rounded">Send Message</button>
                {response.message && (
                    <p className={`mt-4 text-center ${response.type === 'success' ? 'text-green-500' : 'text-red-500'}`}>
                        {response.message}
                    </p>
                )}
            </form>
        </div>
    );
};

export default ContactPage;
