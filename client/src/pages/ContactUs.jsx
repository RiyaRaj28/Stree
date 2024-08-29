import { useState, useEffect } from "react";
import { useAuth } from "../store/auth";
import '../../src/contact.css';
const backendUrl = import.meta.env.VITE_BACKEND_URL;

const defaultContactFormData = {
    userName: "",
    email: "",
    message: ""
};

function ContactUs() {
    const [contact, setContact] = useState(defaultContactFormData);
    const [userData, setUserData] = useState(true);
    const { user } = useAuth();

    useEffect(() => {
        if (user && userData) {
            setContact({
                userName: user.userName,
                email: user.email,
                message: "",
            });
            setUserData(false);
        }
    }, [user, userData]);

    const handleInput = (e) => {
        const name = e.target.name;
        const value = e.target.value;

        setContact({
            ...contact,
            [name]: value,
        });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        
        try {
            const response = await fetch(`${backendUrl}/api/contact/contactData`, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(contact),
            });

            if (response.ok) {
                const data = await response.json();
                console.log(data);
                alert("Your message has been sent.");

                // Clear only the message field
                setContact({
                    ...contact,
                    message: "",
                });
            } else {
                alert("Something went wrong. Please try again.");
            }
        } catch (error) {
            console.error(error);
        }
    };

    return (
        <>
            <section className="section-contact">
                <div className="contact-content container">
                    <h1 className="main-heading">Contact Us</h1>
                </div>

                <div className="container grid grid-cols-1 lg:grid-cols-2 gap-8">
                    <div className="contact-img">
                        <img src="/images/support.png" alt="We are always ready to help" />
                    </div>

                    <section className="section-form">
                        <form onSubmit={handleSubmit}>
                            <div>
                                <label htmlFor="userName">Username</label>
                                <input
                                    type="text"
                                    name="userName"
                                    id="userName"
                                    autoComplete="off"
                                    value={contact.userName}
                                    onChange={handleInput}
                                    required
                                    readOnly 
                                />
                            </div>

                            <div>
                                <label htmlFor="email">Email</label>
                                <input
                                    type="email"
                                    name="email"
                                    id="email"
                                    autoComplete="off"
                                    value={contact.email}
                                    onChange={handleInput}
                                    required
                                    readOnly 
                                />
                            </div>

                            <div>
                                <label htmlFor="message">Message</label>
                                <textarea
                                    name="message"
                                    id="message"
                                    autoComplete="off"
                                    value={contact.message}
                                    onChange={handleInput}
                                    required
                                    cols="30"
                                    rows="10"
                                ></textarea>
                            </div>

                            <div>
                                <button type="submit">Submit</button>
                            </div>
                        </form>
                    </section>
                </div>
            </section>
        </>
    );
}

export default ContactUs;
