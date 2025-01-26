const express = require('express');

const app = express();
const port = 3000;

// Middleware to parse JSON request bodies
app.use(express.json());

// Model Initialization


app.post('/api/agent', async (req, res) => {
  try {
    // Validate if ChatHistory is provided in the request body
    const { ChatHistory } = req.body;
    if (!ChatHistory || !Array.isArray(ChatHistory)) {
      return res.status(400).json({
        error: "Invalid request. ChatHistory must be an array of messages.",
      });
    }

    return res.status(200).json({
      success: true,
      message: "Response generated successfully.",
      aiResponse: result.content,
    });
  } catch (err) {
    console.error("Error processing request:", err.message);
    return res.status(500).json({
      error: "An internal server error occurred.",
    });
  }
});

// Start the server
app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
