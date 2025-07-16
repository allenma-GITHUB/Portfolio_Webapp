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
        <section id="education" className="py-10">
            <h2 className="text-3xl font-bold text-center">Education</h2>
            <div className="mt-8">
                {education.map((edu) => (
                    <div key={edu.EducationID} className="mb-8">
                        <h3 className="font-bold text-xl">{edu.Institution}</h3>
                        <p className="text-gray-600">{edu.Degree}, {edu.FieldOfStudy}</p>
                        <p className="text-gray-600">{new Date(edu.StartDate).toLocaleDateString()} - {edu.EndDate ? new Date(edu.EndDate).toLocaleDateString() : 'Present'}</p>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default Education;
