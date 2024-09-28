import { useEffect, useState } from 'react';
import api from '../../api';
import '../../styles/user/Program.css';  // Ensure this is styled properly

const Program = () => {
    const [programs, setPrograms] = useState([]);
    
    useEffect(() => {
        const fetchPrograms = async () => {
            try {
                const response = await api.get('/api/programs/');
                setPrograms(response.data);
            } catch (error) {
                console.error('Error fetching programs', error);
            }
        };
        fetchPrograms();
    }, []);

    return (
        <div className="programs-container">
            <h1>Programs</h1>
            {programs.length === 0 ? (
                <p className="no-programs-text">NO AVAILABLE PROGRAMS</p>
            ) : (
                <div className="program-grid">
                    {programs.map(program => (
                        <div key={program.id} className="program-item">
                            <img src={program.photo} alt={program.title} className="program-photo" />
                            <p>{program.title}</p>
                        </div>
                    ))}
                </div>
            )}
        </div>
    );
};

export default Program;
