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
        <section id="experience" className="py-20 bg-gray-50">
            <h2 className="text-3xl font-bold text-center text-gray-800">Professional Experience</h2>
            <div className="mt-12 relative">
                <div className="border-l-2 border-gray-200 absolute h-full left-1/2 transform -translate-x-1/2"></div>
                {experiences.map((exp, index) => (
                    <div key={exp.ExperienceID} className={`mb-8 flex justify-between items-center w-full ${index % 2 === 0 ? 'flex-row-reverse' : ''}`}>
                        <div className="w-5/12"></div>
                        <div className="z-20 flex items-center bg-gray-50">
                            <div className="bg-blue-600 rounded-full h-4 w-4"></div>
                        </div>
                        <div className="w-5/12 bg-white p-6 rounded-lg shadow-lg">
                            <h3 className="font-bold text-xl text-gray-800">{exp.JobTitle}</h3>
                            <p className="text-gray-600 font-semibold">{exp.Company} | {exp.Location}</p>
                            <p className="text-sm text-gray-500">{new Date(exp.StartDate).toLocaleDateString()} - {exp.EndDate ? new Date(exp.EndDate).toLocaleDateString() : 'Present'}</p>
                            <p className="mt-4 text-gray-600">{exp.Description}</p>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default Experiences;
