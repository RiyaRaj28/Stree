import React, { useEffect, useState } from 'react';
import { useAuth } from '../store/auth';
import { Link } from 'react-router-dom';
import '../../src/adminUsers.css';
const backendUrl = import.meta.env.VITE_BACKEND_URL;

const AdminUsers = () => {
    const { user, token } = useAuth();
    const [mytoken, setMytoken] = useState(token);
    const [users, setUsers] = useState([]);

    const getAllUsersData = async () => {
        try {
            const config = {
                method: "GET",
                headers: {
                    Authorization: `Bearer ${mytoken}`,
                    "Content-Type": "application/json",
                }
            };
            const response = await fetch(`${backendUrl}/api/admin/getAllUsers`, config);
            const data = await response.json();
            setUsers(data);
        } catch (error) {
            console.error("Error fetching users data: ", error);
        }
    };

    const deleteUser = async (id) => {
        try {
            const config = {
                method: "DELETE",
                headers: {
                    Authorization: `Bearer ${mytoken}`,
                    "Content-Type": "application/json",
                }
            };
            const response = await fetch(`${backendUrl}/api/admin/deleteUser/${id}`, config);
            if (response.ok) {
                getAllUsersData();
            }
        } catch (error) {
            console.error("Error deleting user: ", error);
        }
    };

    useEffect(() => {
        getAllUsersData();
    }, []);

    return (
        <>
            <section className="admin-users-section">
                <div className="container">
                    <h2>Users Data</h2>
                </div>
                <div className="container admin-users">
                    <table>
                        <thead>
                            <tr>
                                <th>User Name</th>
                                <th>Email</th>
                                <th>Update</th>
                                <th>Delete</th>
                            </tr>
                        </thead>
                        <tbody>
                            {users.map((user, index) => (
                                <tr key={index}>
                                    <td>{user.userName}</td>
                                    <td>{user.email}</td>
                                    <td>
                                        <Link to={`/admin/users/${user._id}/edit`} className="edit-delete">
                                            <button className="edit-delete" >Edit</button>
                                        </Link>
                                    </td>
                                    <td>
                                        <button className="edit-delete" onClick={() => deleteUser(user._id)}>
                                            Delete
                                        </button>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </section>
        </>
    );
}

export default AdminUsers;
