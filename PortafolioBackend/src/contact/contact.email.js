'use strict';

import { Resend } from 'resend';

export const sendContactEmail = async ({ name, email, message }) => {
  const resend = new Resend(process.env.RESEND_API_KEY);

  const { data, error } = await resend.emails.send({
    from: process.env.EMAIL_FROM,
    to: process.env.EMAIL_TO,
    reply_to: email,
    subject: `Nuevo mensaje de portafolio: ${name}`,
    html: `
      <div style="font-family: sans-serif; line-height: 1.6;">
        <h2>Alguien quiere contactarme desde mi Portafolio</h2>
        <p><strong>Nombre:</strong> ${name}</p>
        <p><strong>Correo:</strong> ${email}</p>
        <p><strong>Mensaje:</strong></p>
        <p>${message}</p>
      </div>
    `,
  });

  if (error) {
    throw new Error(error.message || 'Error al enviar el correo');
  }

  return data;
};