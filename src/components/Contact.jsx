import React, {useState} from "react";
import "../styles/contact.css";
import toast from "react-hot-toast";

const Contact = () => {
    const [formData, setFormData] = useState({
        name: "", email: "", message: ""
    });

    const handleChange = (e) => {
        const {name, value} = e.target;
        setFormData({...formData, [name]: value});
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        const req = await fetch(`${process.env.REACT_APP_API_HOST}/api/contact/add`, {
            method: "POST", headers: {
                "Content-Type": "application/json",
            }, body: JSON.stringify(formData)
        })

        const res = await req.json();
        if (res.success) {
            toast.success(res.message)
        } else {
            toast.error(res.message)
        }

        setFormData({
            name: "", email: "", message: ""
        });
    };

    return (<section className="contact">
        <h1>Contact Us</h1>
        <form onSubmit={handleSubmit}>
            <div className="form-group">
                <label htmlFor="name">Name</label>
                <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                />
            </div>
            <div className="form-group">
                <label htmlFor="email">Email</label>
                <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                />
            </div>
            <div className="form-group">
                <label htmlFor="message">Message</label>
                <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                ></textarea>
            </div>
            <button type="submit">Submit</button>
        </form>
    </section>);
};

export default Contact;
