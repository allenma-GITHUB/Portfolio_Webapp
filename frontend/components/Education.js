import { useState, useEffect } from 'react';
import axios from 'axios';

const Education = () => {
    const [education, setEducation] = useState([]);

    useEffect(() => {
        const fetchEducation = async () => {
            try {
                const { data } = await axios.get('/api/education');
                setEducation(data);
            } catch (error) {
                console.error('Error fetching education:', error);
            }
        };
        fetchEducation();
    }, []);

    return (
        <section id="education" className="py-20">
            <h2 className="text-3xl font-bold text-center text-gray-800">Education & Training</h2>
            <div className="mt-12 grid gap-10 md:grid-cols-2">
                {education.map((edu) => (
                    <div key={edu.EducationID} className="bg-white rounded-lg shadow-lg p-6">
                        <h3 className="font-bold text-xl text-gray-800">{edu.Institution}</h3>
                        <p className="text-gray-600 font-semibold">{edu.Degree}, {edu.FieldOfStudy}</p>
                        <p className="text-sm text-gray-500">{new Date(edu.StartDate).toLocaleDateString()} - {edu.EndDate ? new Date(edu.EndDate).toLocaleDateString() : 'Present'}</p>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default Education;
