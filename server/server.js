require('dotenv').config();
const express = require('express');
const nodemailer = require('nodemailer');
const cors = require('cors');
const bodyParser = require('body-parser');

const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors());
app.use(bodyParser.json());

app.post('/api/contact', (req, res) => {
    const { name, email, message } = req.body;

    const handleSubmit = async (e) => {
        e.preventDefault();
        setLoading(true);
        setResponseMessage('');
    
        try {
            const response = await axios.post('http://localhost:5000/api/contact', formData);
            setResponseMessage(response.data.message);
            setFormData({ name: '', email: '', message: '' });
        } catch (error) {
            console.error(error);  // Add this for more detailed debugging
            setResponseMessage('Failed to send message. Please try again.');
        } finally {
            setLoading(false);
        }
    };
    

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
})
