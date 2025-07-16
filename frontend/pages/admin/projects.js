import { useState, useEffect } from 'react';
import axios from 'axios';
import withAuth from '../../components/withAuth';

const AdminProjects = () => {
    const [projects, setProjects] = useState([]);
    const [form, setForm] = useState({ projectName: '', description: '', projectURL: '', repositoryURL: '', startDate: '', endDate: '', role: '' });

    const fetchProjects = async () => {
        try {
            const { data } = await axios.get('http://localhost:3001/api/projects');
            setProjects(data);
        } catch (error) {
            console.error('Error fetching projects:', error);
        }
    };

    useEffect(() => {
        fetchProjects();
    }, []);

    const handleChange = (e) => {
        setForm({ ...form, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        const token = localStorage.getItem('token');
        try {
            await axios.post('http://localhost:3001/api/projects', form, {
                headers: { Authorization: `Bearer ${token}` }
            });
            fetchProjects();
            setForm({ projectName: '', description: '', projectURL: '', repositoryURL: '', startDate: '', endDate: '', role: '' });
        } catch (error) {
            console.error('Error creating project:', error);
        }
    };

    return (
        <div>
            <h1 className="text-3xl font-bold">Manage Projects</h1>
            <form onSubmit={handleSubmit} className="my-8 p-4 border rounded">
                <h2 className="text-2xl font-bold mb-4">Add New Project</h2>
                <input type="text" name="projectName" value={form.projectName} onChange={handleChange} placeholder="Project Name" className="w-full p-2 mb-2 border rounded" />
                <textarea name="description" value={form.description} onChange={handleChange} placeholder="Description" className="w-full p-2 mb-2 border rounded"></textarea>
                <input type="text" name="projectURL" value={form.projectURL} onChange={handleChange} placeholder="Project URL" className="w-full p-2 mb-2 border rounded" />
                <input type="text" name="repositoryURL" value={form.repositoryURL} onChange={handleChange} placeholder="Repository URL" className="w-full p-2 mb-2 border rounded" />
                <input type="date" name="startDate" value={form.startDate} onChange={handleChange} className="w-full p-2 mb-2 border rounded" />
                <input type="date" name="endDate" value={form.endDate} onChange={handleChange} className="w-full p-2 mb-2 border rounded" />
                <input type="text" name="role" value={form.role} onChange={handleChange} placeholder="Role" className="w-full p-2 mb-2 border rounded" />
                <button type="submit" className="bg-blue-500 text-white p-2 rounded">Add Project</button>
            </form>
            <div>
                <h2 className="text-2xl font-bold mb-4">Existing Projects</h2>
                {projects.map((project) => (
                    <div key={project.ProjectID} className="p-4 border rounded mb-4">
                        <h3 className="font-bold">{project.ProjectName}</h3>
                        <p>{project.Description}</p>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default withAuth(AdminProjects);
