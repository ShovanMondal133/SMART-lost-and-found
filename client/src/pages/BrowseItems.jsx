import { useEffect, useState } from "react";
import { getItems } from "../api/itemsApi";

function BrowseItems() {
  const [items, setItems] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    loadItems();
  }, []);

  async function loadItems() {
    try {
      const data = await getItems();
      setItems(data);
    } catch (error) {
      console.error(error);
      setError("Failed to load items.");
    } finally {
      setLoading(false);
    }
  }

  return (
    <div className="browse-page">

      <div className="browse-header">
        <p>Smart Lost & Found</p>
        <h1>Browse Lost & Found Items</h1>
        <span>
          Find items reported by students on campus.
        </span>
      </div>

      {loading && (
        <p className="loading">
          Loading items...
        </p>
      )}

      {error && (
        <p className="error">
          {error}
        </p>
      )}

      {!loading && !error && items.length === 0 && (
        <div className="empty-state">
          <h2>No items reported yet</h2>
          <p>
            Be the first person to report a lost or found item.
          </p>
        </div>
      )}

      <div className="items-grid">

        {items.map((item) => (

          <div
            className="item-card"
            key={item._id}
          >

            <div className="item-card-top">

              <span
                className={
                  item.type === "lost"
                    ? "lost-badge"
                    : "found-badge"
                }
              >
                {item.type === "lost"
                  ? "🔴 LOST"
                  : "🟢 FOUND"}
              </span>

              <span className="category-badge">
                {item.category}
              </span>

            </div>

            <h2>
              {item.itemName}
            </h2>

            <p className="item-description">
              {item.description}
            </p>

            <div className="item-details">

              <p>
                📍 <strong>Location:</strong>{" "}
                {item.location}
              </p>

              <p>
                📅 <strong>Date:</strong>{" "}
                {item.date
                  ? new Date(item.date).toLocaleDateString()
                  : "Not provided"}
              </p>

            </div>

            <button className="contact-btn">
              Contact Reporter
            </button>

          </div>

        ))}

      </div>

    </div>
  );
}

export default BrowseItems;