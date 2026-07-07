'use strict';

export const verifyAdmin = (req, res, next) => {
  const key = req.header('x-api-key');

  if (!key || key !== process.env.ADMIN_API_KEY) {
    return res.status(401).json({
      success: false,
      error: 'No autorizado.',
    });
  }

  next();
};