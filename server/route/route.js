import express, { Router } from 'express';
import { login, signup } from '../auth/auth.js';
import { createPdf, fetchPdf } from '../pdf/index.js';
const route = express.Router();
route.post('/signup', signup)
route.post('/login', login);
route.post("/create-pdf", createPdf);
route.get("/fetch-pdf", fetchPdf);
export default route;