import { useState, useEffect } from 'react';
import axios from 'axios';

const Experiences = () => {
    const [experiences, setExperiences] = useState([]);

    useEffect(() => {
        const fetchExperiences = async () => {
            try {
                const { data } = await axios.get('/api/experience');
                setExperiences(data);
            } catch (error) {
                console.error('Error fetching experiences:', error);
            }
        };
        fetchExperiences();
    }, []);

    return (
        <section id="experience" className="py-10">
            <h2 className="text-3xl font-bold text-center">Work Experience</h2>
            <div className="mt-8">
                {experiences.map((exp) => (
                    <div key={exp.ExperienceID} className="mb-8">
                        <h3 className="font-bold text-xl">{exp.JobTitle} at {exp.Company}</h3>
                        <p className="text-gray-600">{exp.Location} | {new Date(exp.StartDate).toLocaleDateString()} - {exp.EndDate ? new Date(exp.EndDate).toLocaleDateString() : 'Present'}</p>
                        <p className="mt-2">{exp.Description}</p>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default Experiences;
