import express from 'express';
import Contact from '../models/contact.js';

const router = express.Router();

router.post('/', async (req, res) => {
  try {
    const { name, email, subject, message } = req.body;
    const newContact = new Contact({ name, email, subject, message });
    await newContact.save();
    res.status(201).json({ message: 'Contact saved successfully' });
  } catch (error) {
    res.status(500).json({ message: 'Error saving contact', error });
  }
});

export default router;