import React, { useEffect, useState } from 'react';
const backendUrl = import.meta.env.VITE_BACKEND_URL;
import { useAuth } from '../store/auth';
import '../../src/adminUsers.css';

const AdminContacts = () => {
    const { user, token } = useAuth();
    const [mytoken, setMytoken] = useState(token);
    const [contacts, setContacts] = useState([]);

    const getAllUsersContacts = async () => {
        try {
            const config = {
                method: 'GET',
                headers: {
                    Authorization: `Bearer ${mytoken}`,
                    'Content-Type': 'application/json',
                },
            };
            const response = await fetch(`${backendUrl}/api/admin/getAllContactMessages`, config);
            console.log("Token from contacts", mytoken)
            const data = await response.json();
            console.log("Data from contacts", data)
            setContacts(data);
        } catch (error) {
            console.error('Error fetching contacts: ', error);
        }
    };

    const deleteContacts = async (id) => {
        try {
            const config = {
                method: 'DELETE',
                headers: {
                    Authorization: `Bearer ${token}`,
                    'Content-Type': 'application/json',
                },
            };
            const response = await fetch(`${backendUrl}/api/admin/deleteContactMessage/${id}`, config);
            if (response.ok) {
                getAllUsersContacts();
            }
        } catch (error) {
            console.error('Error deleting contact: ', error);
        }
    };

    useEffect(() => {
        getAllUsersContacts();
    }, []);

    return (
        <section className="admin-users-section">
            <div className="container">
                <h1>Contacts Data</h1>
            </div>
            <div className="container admin-users">
                <table>
                    <thead>
                        <tr>
                            <th className ="contact-name-col">User Name</th>
                            <th className ="contact-email-col">Email</th>
                            <th className ="contact-msg-col=">Message</th>
                        </tr>
                    </thead>
                    <tbody>
                        {contacts.map((contact, index) => {
                            return (

                                <tr key={index}>
                                    <td>{contact.userName}</td>
                                    <td>{contact.email}</td>
                                    <td>{contact.message}</td>
                                    <td><button className="edit-delete"> Edit</button></td>
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

export default AdminContacts;
