import React, { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
const backendUrl = import.meta.env.VITE_BACKEND_URL;
import { useAuth } from '../store/auth';
import '../../src/editUser.css';

const EditIncident = () => {
    const { id } = useParams(); // Extract `id` from URL params
    const { token } = useAuth();
    const [incident, setIncident] = useState({
        description: '',
        category: 'mistreatment',
        date: '',
        time: '',
        latitude: '',
        longitude: '',
        // name: ''
    });
    const navigate = useNavigate(); // Use navigate for programmatic navigation

    useEffect(() => {
        const fetchIncident = async () => {
            try {
                const config = {
                    method: "GET",
                    headers: {
                        Authorization: `Bearer ${token}`,
                        "Content-Type": "application/json",
                    }
                };
                const response = await fetch(`${backendUrl}/api/admin/getIncident/${id}`, config);
                const data = await response.json();
                setIncident({
                    description: data.description,
                    category: data.category,
                    date: data.date.split('T')[0],
                    time: data.time,
                    latitude: data.location.coordinates[1],
                    longitude: data.location.coordinates[0],
                    name: data.userName
                });
            } catch (error) {
                console.error("Error fetching incident details: ", error);
            }
        };

        fetchIncident();
    }, [id, token]);

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setIncident((prevIncident) => ({
            ...prevIncident, [name]: value
        }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        const updatedIncident = {
            ...incident,
            location: {
                type: 'Point',
                coordinates: [incident.longitude, incident.latitude]
            }
        };
        try {
            const config = {
                method: "PATCH",
                headers: {
                    Authorization: `Bearer ${token}`,
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(updatedIncident),
            };
            const response = await fetch(`${backendUrl}/api/admin/updateIncident/${id}`, config);
            if (response.ok) {
                navigate('/admin/incidents'); // Redirect to the incidents list
            }
        } catch (error) {
            console.error("Error updating incident details: ", error);
        }
    };

    return (
        <section className="edit-incident-section">
            <div className="container">
                <h2>Edit Incident</h2>
                <form onSubmit={handleSubmit}>
                    {/* <label>
                        Name:
                        <input
                            type="text"
                            name="name"
                            value={incident.name}
                            readOnly
                        />
                    </label> */}
                    <label>
                        Description:
                        <textarea
                            type="text"
                            name="description"
                            value={incident.description}
                            onChange={handleInputChange}
                            required
                        />
                    </label>
                    <label>
                        Category:
                        <select
                            name="category"
                            value={incident.category}
                            onChange={handleInputChange}
                            required
                        >
                            <option value="mistreatment">Mistreatment</option>
                            <option value="hooligans">Hooligans</option>
                            <option value="cat-calling">Cat-calling</option>
                            <option value="shady-area">Shady Area</option>
                        </select>
                    </label>
                    <label>
                        Date:
                        <input
                            type="date"
                            name="date"
                            value={incident.date}
                            onChange={handleInputChange}
                            required
                        />
                    </label>
                    <label>
                        Time:
                        <input
                            type="time"
                            name="time"
                            value={incident.time}
                            onChange={handleInputChange}
                            required
                        />
                    </label>
                    <label>
                        Latitude:
                        <input
                            type="text"
                            name="latitude"
                            value={incident.latitude}
                            onChange={handleInputChange}
                            required
                        />
                    </label>
                    <label>
                        Longitude:
                        <input
                            type="text"
                            name="longitude"
                            value={incident.longitude}
                            onChange={handleInputChange}
                            required
                        />
                    </label>
                    <button type="submit">Update Incident</button>
                </form>
            </div>
        </section>
    );
}

export default EditIncident;
