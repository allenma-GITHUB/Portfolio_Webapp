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
        <section id="certifications" className="py-10">
            <h2 className="text-3xl font-bold text-center">Certifications</h2>
            <div className="mt-8 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
                {certifications.map((cert) => (
                    <div key={cert.CertificationID} className="border p-4 rounded-lg">
                        <h3 className="font-bold text-xl">{cert.CertificationName}</h3>
                        <p>{cert.IssuingOrganization}</p>
                        <a href={cert.CredentialURL} className="text-blue-500 hover:underline">View Credential</a>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default Certifications;
