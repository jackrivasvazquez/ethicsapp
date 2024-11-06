// Import necessary packages
import express from 'express';
import OpenAI from 'openai';
import cors from 'cors';

const app = express();
const openai = new OpenAI({ apiKey: 'YOUR_OPENAI_API_KEY' }); // Replace with your actual OpenAI API key

app.use(cors());  // Enable CORS to allow requests from your React frontend
app.use(express.json());  // Enable JSON parsing for request bodies

// Endpoint for handling questions from the frontend
app.post('/ask', async (req, res) => {
    const { question } = req.body;  // Get the question from the request body
    try {
        // Make a request to OpenAI's Chat Completion API
        const completion = await openai.chat.completions.create({
            model: "gpt-3.5-turbo",  // You can use 'gpt-4' if you have access
            messages: [{ "role": "user", "content": question }],
            max_tokens: 100,
            temperature: 0.7
        });

        // Send the OpenAI response back to the React frontend
        res.json({ response: completion.choices[0].message.content });
    } catch (error) {
        console.error('Error fetching response:', error);
        res.status(500).json({ error: 'Failed to fetch response' });
    }
});

// Start the server
const PORT = 5000;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});

