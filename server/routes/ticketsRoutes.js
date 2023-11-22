
import express from 'express';
import {createTicketController, allTicketController, getTicketsController, ticketsStatusController, updateTicketController, getSingleTicketController, downloadTicketFileController, updateUserTicketController } from '../controllers/ticketsController.js';
import { isAdmin, requireSignIn } from "./../middlewares/authMiddleware.js";
import multer from 'multer';

const router = express.Router();
const storage = multer.memoryStorage();
const upload = multer({ storage });

// Create a new ticket
router.post('/create-ticket', requireSignIn, upload.single('file'),  createTicketController);

// Admin getALl ticket
router.get("/all-tickets",  allTicketController);

//single ticket
router.get("/get-tickets", requireSignIn, getTicketsController);

//single ticket user reply
router.put("/ticket-reply/:ticketId", requireSignIn, updateUserTicketController ); 
// admin single ticket
router.get('/ticket-detail/:ticketId',requireSignIn, getSingleTicketController)

// admin single ticket update
router.put('/ticket-update/:ticketId', requireSignIn, isAdmin, updateTicketController);

// router.get('/download/:ticketId', downloadTicketFileController);
router.get('/download-ticket-file/:ticketId', downloadTicketFileController);

router.put(
    "/ticket-status/:ticketId",
    requireSignIn,
    isAdmin,
    ticketsStatusController
  );


export default router;