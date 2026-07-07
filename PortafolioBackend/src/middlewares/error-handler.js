'use strict';

export const errorHandler = (err, req, res, next) => {
  console.error('Error no controlado:', err.message);

  // Errores de validación de Mongoose
  if (err.name === 'ValidationError') {
    const errores = Object.values(err.errors).map((e) => e.message);
    return res.status(400).json({
      success: false,
      error: errores.join(' | '),
    });
  }

  // Cualquier otro error no esperado
  return res.status(500).json({
    success: false,
    error: 'Ocurrio un error en el servidor. Intenta de nuevo mas tarde.',
  });
};