'use strict';

import { Contact } from './contact.model.js';
import { sendContactEmail } from './contact.email.js';

export const createContact = async (req, res) => {
  const { name, email, message } = req.body;

  const contact = await Contact.create({ name, email, message });

  try {
    await sendContactEmail({ name, email, message });
    contact.emailSent = true;
    await contact.save();
  } catch (emailError) {
    console.log(`El mensaje se guardo pero el correo fallo: ${emailError.message}`);
  }

  return res.status(201).json({
    success: true,
    message: 'Mensaje recibido correctamente. Te contactare pronto.',
  });
};

export const getContacts = async (req, res) => {
  const contacts = await Contact.find().sort({ createdAt: -1 });

  return res.status(200).json({
    success: true,
    data: contacts,
  });
};