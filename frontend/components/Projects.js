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
        <section id="projects" className="py-10">
            <h2 className="text-3xl font-bold text-center">Projects</h2>
            <div className="mt-8 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
                {projects.map((project) => (
                    <div key={project.ProjectID} className="border p-4 rounded-lg">
                        <h3 className="font-bold text-xl">{project.ProjectName}</h3>
                        <p>{project.Description}</p>
                        <a href={project.ProjectURL} className="text-blue-500 hover:underline">View Project</a>
                        <a href={project.RepositoryURL} className="ml-4 text-blue-500 hover:underline">View Code</a>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default Projects;
