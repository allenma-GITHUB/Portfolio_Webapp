import { useState, useEffect } from 'react';
import axios from 'axios';

const ChangelogPage = () => {
    const [changelog, setChangelog] = useState([]);

    useEffect(() => {
        const fetchChangelog = async () => {
            try {
                const { data } = await axios.get('/api/changelog');
                setChangelog(data);
            } catch (error) {
                console.error('Error fetching changelog:', error);
            }
        };
        fetchChangelog();
    }, []);

    return (
        <div>
            <h1 className="text-3xl font-bold text-center my-8">Changelog</h1>
            <div className="space-y-8">
                {changelog.map((entry) => (
                    <div key={entry.ChangeID}>
                        <h2 className="text-2xl font-bold">{entry.Version}</h2>
                        <p className="text-gray-600">{new Date(entry.ChangeDate).toLocaleDateString()}</p>
                        <p className="mt-2">{entry.ChangeDescription}</p>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default ChangelogPage;
