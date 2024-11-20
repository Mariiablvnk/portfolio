export default async function handler(req, res) {
    if (req.method === 'POST') {
        const { name, email, message, subject } = req.body;

        // Validate inputs
        if (!name || !email || !message || !subject) {
            return res.status(400).json({ error: 'All fields are required' });
        }

        try {
            // Send data to Formspree or another service
            const response = await fetch('https://formspree.io/f/xwpkqnpj', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({
                    name,
                    email,
                    message,
                    subject,
                }),
            });

            if (!response.ok) {
                throw new Error('Failed to send message');
            }

            res.status(200).json({ message: 'Form submitted successfully!' });
        } catch (error) {
            console.error('Error submitting form:', error);
            res.status(500).json({ error: 'Error submitting form' });
        }
    } else {
        res.status(405).end(); // Method not allowed
    }
}
