import React, { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
const backendUrl = import.meta.env.VITE_BACKEND_URL;
import { useAuth } from '../store/auth';
import '../../src/editUser.css';

const EditContact = () => {
    const { id } = useParams(); 
    const { token } = useAuth();
    const [contact, setContact] = useState({ userName: '', email: '', message: ''});
    const navigate = useNavigate(); 

    useEffect(() => {
        const fetchContact = async () => {
            try {
                const config = {
                    method: "GET",
                    headers: {
                        Authorization: `Bearer ${token}`,
                        "Content-Type": "application/json",
                    }
                };
                // /getContactMessage/:id
                const response = await fetch(`${backendUrl}/api/admin/getContactMessage/${id}`, config);
                const data = await response.json();
                setContact(data);
            } catch (error) {
                console.error("Error fetching contact details: ", error);
            }
        };

        fetchContact();
    }, [id, token]);

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setContact((prevUser) => ({
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
                body: JSON.stringify(contact),
            };
            console.log(id); 
            const response = await fetch(`${backendUrl}/api/admin/updateContactMessage/${id}`, config);
            if (response.ok) {
                navigate('/admin/contacts'); // Redirect to the users list
            }
        } catch (error) {
            console.error("Error updating user details: ", error);
        }
    };

    return (
        <section className="edit-user-section">
            <div className="container">
                <h2>Edit Contact</h2>
                <form onSubmit={handleSubmit}>
                    <label>
                        User Name:
                        <input
                            type="text"
                            name="userName"
                            value={contact.userName}
                            onChange={handleInputChange}
                        />
                    </label>
                    <label>
                        Email:
                        <input
                            type="email"
                            name="email"
                            value={contact.email}
                            onChange={handleInputChange}
                        />
                    </label>
                    <label>
                        Message:
                        <input
                            type="text"
                            name="message"
                            value={contact.message}
                            onChange={handleInputChange}
                        />
                    </label>
                    <button type="submit">Update Contact</button>
                </form>
            </div>
        </section>
    );
}

export default EditContact;
