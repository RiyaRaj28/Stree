import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
const backendUrl = import.meta.env.VITE_BACKEND_URL;
import { useAuth } from '../store/auth';
import '../../src/adminUsers.css';

const AdminIncidents = () => {
    const { user, token } = useAuth();
    const [mytoken, setMytoken] = useState(token);
    const [incidents, setIncidents] = useState([]);

    const getAllUsersIncidents = async () => {
        try {
            const config = {
                method: 'GET',
                headers: {
                    Authorization: `Bearer ${mytoken}`,
                    'Content-Type': 'application/json',
                },
            };
            const response = await fetch(`${backendUrl}/api/admin/getAllIncidents`, config);
            console.log("Token from admin", mytoken)
            const data = await response.json();
            console.log("Data from admin", data)
            // for(let i=0; i<31; i++)
            //     console.log(data[22].user.userName);
            setIncidents(data);
        } catch (error) {
            console.error('Error fetching incidents: ', error);
        }
    };

    const deleteUser = async (id) => {
        try {
            const config = {
                method: 'DELETE',
                headers: {
                    Authorization: `Bearer ${token}`,
                    'Content-Type': 'application/json',
                },
            };
            const response = await fetch(`${backendUrl}/api/admin/deleteIncident/${id}`, config);
            if (response.ok) {
                getAllUsersIncidents();
            }
        } catch (error) {
            console.error('Error deleting incident: ', error);
        }
    };

    useEffect(() => {
        if (token) {
            getAllUsersIncidents();
        }
    }, [token]);

    return (
        <section className="admin-users-section">
            <div className="container">
                <h1>Incidents Data</h1>
            </div>
            <div className="container admin-users">
                <table>
                    <thead>
                        <tr>
                            <th class="username-column">User Name</th>
                            <th class="category-column">Category</th>
                            <th class="description-column">Description</th>
                            <th class="date-column">Date</th>
                            <th class="time-column">Time</th>
                            <th class="location-column">Location</th>
                            <th class="update-column">Update</th>
                            <th class="delete-column">Delete</th>
                        </tr>
                    </thead>
                    <tbody>
                        {incidents.map((incident, index) => {
                            return (
                                <tr key={index}>
                                    <td>{incident.user.userName}</td>
                                    <td>{incident.category}</td>
                                    <td>{incident.description}</td>
                                    <td>{incident.date.split('T')[0]}</td>
                                    <td>{incident.time}</td>
                                    <td>{incident.location.coordinates[0]}, {incident.location.coordinates[1]}</td>
                                    <td>
                                        <Link to={`/admin/incidents/${incident._id}/edit`} className="edit-delete">
                                            <button className="edit-delete" >Edit</button>
                                        </Link>
                                    </td>
                                    <td><button className="edit-delete" onClick={() => deleteUser(incident._id)}>Delete</button></td>
                                </tr>
                            );
                        }
                        )}
                    </tbody>
                </table>

            </div>
        </section>
    );
};

export default AdminIncidents;
