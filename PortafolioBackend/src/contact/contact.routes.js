'use strict'

import { Router } from 'express';
import { createContact, getContacts } from './contact.controller.js';

const router = Router();

router.post('/', createContact);
router.get('/', getContacts);

export default router;