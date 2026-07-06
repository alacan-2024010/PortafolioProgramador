'use strict'

import { Router } from 'express';
import { createContact, getContacts } from './contact.controller.js';
import { contactLimiter } from '../middlewares/rate-limit.js';

const router = Router();

router.post('/', contactLimiter, createContact);
router.get('/', getContacts);

export default router;