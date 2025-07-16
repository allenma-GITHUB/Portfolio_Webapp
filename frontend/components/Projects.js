import { useState, useEffect } from 'react';
import axios from 'axios';

const Projects = () => {
    const [projects, setProjects] = useState([]);

    useEffect(() => {
        const fetchProjects = async () => {
            try {
                const { data } = await axios.get('/api/projects');
                setProjects(data);
            } catch (error) {
                console.error('Error fetching projects:', error);
            }
        };
        fetchProjects();
    }, []);

    return (
        <section id="projects" className="py-20">
            <h2 className="text-3xl font-bold text-center text-gray-800">Featured Projects</h2>
            <div className="mt-12 grid gap-10 md:grid-cols-2 lg:grid-cols-3">
                {projects.map((project) => (
                    <div key={project.ProjectID} className="bg-white rounded-lg shadow-lg overflow-hidden">
                        <div className="p-6">
                            <h3 className="font-bold text-xl text-gray-800">{project.ProjectName}</h3>
                            <p className="text-gray-600 mt-2">{project.Description}</p>
                            <div className="mt-4">
                                <a href={project.ProjectURL} target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">View Project</a>
                                <a href={project.RepositoryURL} target="_blank" rel="noopener noreferrer" className="ml-4 text-blue-600 hover:underline">View Code</a>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default Projects;
