const API_URL = "https://smart-lost-and-found-3.onrender.com/api/items";

// Get all items
export async function getItems() {
    const response = await fetch(API_URL);

    if (!response.ok) {
        throw new Error("Failed to fetch items");
    }

    return response.json();
}


// Create a new item
export async function createItem(itemData) {
    const response = await fetch(API_URL, {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(itemData)
    });

    if (!response.ok) {
        throw new Error("Failed to create item");
    }

    return response.json();
}


// Update an item
export async function updateItem(id, itemData) {
    const response = await fetch(`${API_URL}/${id}`, {
        method: "PUT",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(itemData)
    });

    if (!response.ok) {
        throw new Error("Failed to update item");
    }

    return response.json();
}


// Delete an item
export async function deleteItem(id) {
    const response = await fetch(`${API_URL}/${id}`, {
        method: "DELETE"
    });

    if (!response.ok) {
        throw new Error("Failed to delete item");
    }

    return response.json();
}