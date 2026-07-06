'use strict'

import {Router} from 'express';
import { createContact, getContacts } from './contact.controller.js';

const router = Router();

router.post(
    '/contact', 
    createContact);
router.get(
    '/contacts', 
    getContacts);

export default router;