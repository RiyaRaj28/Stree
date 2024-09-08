import React from 'react';
import { Link } from 'react-router-dom';
// import './UserCard.css'; // Create a CSS file for styling if needed

const UserCard = ({ user, deleteUser }) => {
    return (
        <div className="user-card">
            <h3>{user.userName}</h3>
            <p>{user.email}</p>
            <div className="user-card-actions">
                <Link to={`/admin/users/${user._id}/edit`} className="edit-button">
                    Edit
                </Link>
                <button onClick={() => deleteUser(user._id)} className="delete-button">
                    Delete
                </button>
            </div>
        </div>
    );
};

export default UserCard;
