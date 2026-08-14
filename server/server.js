require("dotenv").config();

const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");

const Item = require("./models/Item");

const app = express();

const PORT = process.env.PORT || 5000;

// Middleware
app.use(cors());
app.use(express.json());


// =========================
// HOME
// =========================

app.get("/", (req, res) => {
  res.json({
    message: "Smart Lost & Found API is running!"
  });
});


// =========================
// GET ALL ITEMS
// =========================

app.get("/api/items", async (req, res) => {
  try {
    const items = await Item.find().sort({
      createdAt: -1
    });

    res.json(items);

  } catch (error) {
    console.error("GET ITEMS ERROR:", error);

    res.status(500).json({
      message: "Failed to fetch items",
      error: error.message
    });
  }
});


// =========================
// CREATE ITEM
// =========================

app.post("/api/items", async (req, res) => {
  try {
    const newItem = new Item(req.body);

    const savedItem = await newItem.save();

    res.status(201).json(savedItem);

  } catch (error) {
    console.error("CREATE ITEM ERROR:", error);

    res.status(400).json({
      message: "Failed to create item",
      error: error.message
    });
  }
});


// =========================
// UPDATE ITEM
// =========================

app.put("/api/items/:id", async (req, res) => {
  try {
    const updatedItem = await Item.findByIdAndUpdate(
      req.params.id,
      req.body,
      {
        new: true,
        runValidators: true
      }
    );

    if (!updatedItem) {
      return res.status(404).json({
        message: "Item not found"
      });
    }

    res.json(updatedItem);

  } catch (error) {
    console.error("UPDATE ITEM ERROR:", error);

    res.status(400).json({
      message: "Failed to update item",
      error: error.message
    });
  }
});


// =========================
// DELETE ITEM
// =========================

app.delete("/api/items/:id", async (req, res) => {
  try {
    const deletedItem = await Item.findByIdAndDelete(
      req.params.id
    );

    if (!deletedItem) {
      return res.status(404).json({
        message: "Item not found"
      });
    }

    res.json({
      message: "Item deleted successfully"
    });

  } catch (error) {
    console.error("DELETE ITEM ERROR:", error);

    res.status(400).json({
      message: "Failed to delete item",
      error: error.message
    });
  }
});


// =========================
// CONNECT DATABASE
// THEN START SERVER
// =========================

mongoose
  .connect(process.env.MONGO_URI)
  .then(() => {

    console.log("MongoDB connected successfully");

    app.listen(PORT, () => {
      console.log(
        `Server running on http://localhost:${PORT}`
      );
    });

  })
  .catch((error) => {

    console.error(
      "MongoDB connection failed:",
      error.message
    );

    process.exit(1);
  });