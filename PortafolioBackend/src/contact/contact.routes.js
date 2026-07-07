'use strict'

import { Router } from 'express';
import { createContact, getContacts } from './contact.controller.js';
import { contactLimiter } from '../middlewares/rate-limit.js';
import { verifyAdmin } from '../middlewares/verify-admin.js';

const router = Router();

router.post('/', contactLimiter, createContact);
router.get('/', verifyAdmin, getContacts);

export default router;