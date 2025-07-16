import { useState, useEffect } from 'react';
import axios from 'axios';

const Skills = () => {
    const [skills, setSkills] = useState([]);

    useEffect(() => {
        const fetchSkills = async () => {
            try {
                const { data } = await axios.get('/api/skills');
                setSkills(data);
            } catch (error) {
                console.error('Error fetching skills:', error);
            }
        };
        fetchSkills();
    }, []);

    return (
        <section id="skills" className="py-20">
            <h2 className="text-3xl font-bold text-center text-gray-800">Core Competencies</h2>
            <div className="mt-12 flex flex-wrap justify-center gap-4">
                {skills.map((skill) => (
                    <div key={skill.SkillID} className="bg-blue-100 text-blue-800 text-sm font-semibold px-4 py-2 rounded-full">
                        {skill.SkillName}
                    </div>
                ))}
            </div>
        </section>
    );
};

export default Skills;
