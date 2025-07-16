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
        <section id="skills" className="py-10">
            <h2 className="text-3xl font-bold text-center">Skills</h2>
            <div className="mt-8 flex flex-wrap justify-center">
                {skills.map((skill) => (
                    <div key={skill.SkillID} className="bg-gray-200 text-gray-800 rounded-full px-4 py-2 m-2">
                        {skill.SkillName}
                    </div>
                ))}
            </div>
        </section>
    );
};

export default Skills;
