import { useState } from "react";
import { createItem } from "../api/itemsApi";

function ReportItem({ type }) {
    const [formData, setFormData] = useState({
        itemName: "",
        category: "",
        description: "",
        location: "",
        date: "",
        contact: ""
    });

    const [message, setMessage] = useState("");

    function handleChange(e) {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
    }

    async function handleSubmit(e) {
        e.preventDefault();

        try {
            const newItem = {
                ...formData,
                type: type
            };

            await createItem(newItem);

            setMessage("Item reported successfully! ✅");

            setFormData({
                itemName: "",
                category: "",
                description: "",
                location: "",
                date: "",
                contact: ""
            });

        } catch (error) {
            console.error(error);
            setMessage("Failed to report item ❌");
        }
    }

    return (
        <div className="report-page">

            <h1>
                Report {type === "lost" ? "Lost" : "Found"} Item
            </h1>

            <form onSubmit={handleSubmit}>

                <label>Item Name</label>
                <input
                    type="text"
                    name="itemName"
                    value={formData.itemName}
                    onChange={handleChange}
                    placeholder="Example: College ID Card"
                    required
                />

                <label>Category</label>
                <select
                    name="category"
                    value={formData.category}
                    onChange={handleChange}
                    required
                >
                    <option value="">Select Category</option>
                    <option value="Electronics">Electronics</option>
                    <option value="ID Card">ID Card</option>
                    <option value="Books">Books</option>
                    <option value="Bags">Bags</option>
                    <option value="Keys">Keys</option>
                    <option value="Wallets">Wallets</option>
                    <option value="Other">Other</option>
                </select>

                <label>Description</label>
                <textarea
                    name="description"
                    value={formData.description}
                    onChange={handleChange}
                    placeholder="Describe the item..."
                    required
                />

                <label>Location</label>
                <input
                    type="text"
                    name="location"
                    value={formData.location}
                    onChange={handleChange}
                    placeholder="Where was it lost/found?"
                    required
                />

                <label>Date</label>
                <input
                    type="date"
                    name="date"
                    value={formData.date}
                    onChange={handleChange}
                    required
                />

                <label>Contact</label>
                <input
                    type="text"
                    name="contact"
                    value={formData.contact}
                    onChange={handleChange}
                    placeholder="Email or phone"
                    required
                />

                <button type="submit">
                    Report Item
                </button>

            </form>

            {message && <p>{message}</p>}

        </div>
    );
}

export default ReportItem;