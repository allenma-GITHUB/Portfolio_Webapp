import { useState, useEffect } from 'react';
import axios from 'axios';

const Certifications = () => {
    const [certifications, setCertifications] = useState([]);

    useEffect(() => {
        const fetchCertifications = async () => {
            try {
                const { data } = await axios.get('/api/certifications');
                setCertifications(data);
            } catch (error) {
                console.error('Error fetching certifications:', error);
            }
        };
        fetchCertifications();
    }, []);

    return (
        <section id="certifications" className="py-20 bg-gray-50">
            <h2 className="text-3xl font-bold text-center text-gray-800">Licenses & Certifications</h2>
            <div className="mt-12 grid gap-10 md:grid-cols-2 lg:grid-cols-3">
                {certifications.map((cert) => (
                    <div key={cert.CertificationID} className="bg-white rounded-lg shadow-lg p-6">
                        <h3 className="font-bold text-xl text-gray-800">{cert.CertificationName}</h3>
                        <p className="text-gray-600 mt-2">{cert.IssuingOrganization}</p>
                        <div className="mt-4">
                            <a href={cert.CredentialURL} target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">View Credential</a>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default Certifications;
