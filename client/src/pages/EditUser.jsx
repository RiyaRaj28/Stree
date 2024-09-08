import React, { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
const backendUrl = import.meta.env.VITE_BACKEND_URL;
import { useAuth } from '../store/auth';
import '../../src/editUser.css';

const EditUser = () => {
    const { id } = useParams(); // Extract `id` from URL params
    const { token } = useAuth();
    const [user, setUser] = useState({ userName: '', email: '' });
    const navigate = useNavigate(); // Use navigate for programmatic navigation

    useEffect(() => {
        const fetchUser = async () => {
            try {
                const config = {
                    method: "GET",
                    headers: {
                        Authorization: `Bearer ${token}`,
                        "Content-Type": "application/json",
                    }
                };
                const response = await fetch(`${backendUrl}/api/admin/getUser/${id}`, config);
                const data = await response.json();
                setUser(data);
            } catch (error) {
                console.error("Error fetching user details: ", error);
            }
        };

        fetchUser();
    }, [id, token]);

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setUser((prevUser) => ({
            ...prevUser, [name]: value
        }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const config = {
                method: "PATCH",
                headers: {
                    Authorization: `Bearer ${token}`,
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(user),
            };
            const response = await fetch(`${backendUrl}/api/admin/updateUser/${id}`, config);
            if (response.ok) {
                navigate('/admin/users'); // Redirect to the users list
            }
        } catch (error) {
            console.error("Error updating user details: ", error);
        }
    };

    return (
        <section className="edit-user-section">
            <div className="container">
                <h2>Edit User</h2>
                <form onSubmit={handleSubmit}>
                    <label>
                        User Name:
                        <input
                            type="text"
                            name="userName"
                            value={user.userName}
                            onChange={handleInputChange}
                        />
                    </label>
                    <label>
                        Email:
                        <input
                            type="email"
                            name="email"
                            value={user.email}
                            onChange={handleInputChange}
                        />
                    </label>
                    <button type="submit">Update User</button>
                </form>
            </div>
        </section>
    );
}

export default EditUser;
