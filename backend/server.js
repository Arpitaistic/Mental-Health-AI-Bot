const express = require("express");
const { db } = require("./firebaseConfig");

const app = express();
app.use(express.json());

// API to add user data
app.post("/addUser", async (req, res) => {
    const { userId, name, phone, email, preferredLanguage } = req.body;

    try {
        await db.collection("Users").doc(userId).set({
            userId, name, phone, email, preferredLanguage,
            moodHistory: [], 
            lastInteraction: new Date()
        });

        res.status(200).send({ message: "User added successfully!" });
    } catch (error) {
        res.status(500).send({ error: error.message });
    }
});

app.listen(3000, () => console.log("Server running on port 3000"));
//djjdkddkj