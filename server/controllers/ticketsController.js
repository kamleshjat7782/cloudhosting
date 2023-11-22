// import ticketModel from '../models/Ticket.js';
// import { v4 as uuidv4 } from 'uuid';
// import multer from 'multer';

// const storage = multer.memoryStorage(); // Store files in memory
// const upload = multer({ storage });

// export const createTicketController = async (req, res) => {
//   try {
//     const { department, subject, message, relatedService } = req.body;
//     const { file } = req;

//     // Handle file upload and save it on the server
//     if (file) {
//       const fileName = `${Date.now()}-${file.originalname}`;
//       const fileUrl = `/uploads/${fileName}`;

//       // Save the file to the server (e.g., in a designated uploads folder)
//       fs.writeFileSync(`.${fileUrl}`, file.buffer);

//     const newTicketData = {
//       department,
//       subject,
//       message,
//       relatedService,
//       buyer: req.user._id, // Assuming you have user authentication
//       status: 'Open', // Default status
//       fileName, // Save the file name in the database
//       fileUrl,  // Save the file URL in the database
//     };

    

//     const newTicket = new ticketModel(newTicketData);
//     await newTicket.save();
//   }

//     res.status(201).json({ message: 'Ticket created successfully' });
//   } catch (error) {
//     res.status(500).json({ error: 'An error occurred' });
//   }
// };

import fs from 'fs';

import ticketModel from '../models/Ticket.js';



export const createTicketController = async (req, res) => {
  try {
    const { department, subject, message, relatedService } = req.body;
    const { file } = req;

    if (!file) {
      // Handle the case where no file is uploaded
      const newTicketData = {
        department,
        subject,
        message,
        relatedService,
        buyer: req.user._id,
      };

      const newTicket = new ticketModel(newTicketData);
      await newTicket.save();

      return res.status(201).json({ message: 'Ticket created successfully' });
    }

    const fileName = `${Date.now()}-${file.originalname}`;
    const fileUrl = `/uploads/${fileName}`;

    // Save the file to the server (e.g., in a designated uploads folder)
    fs.writeFileSync(`.${fileUrl}`, file.buffer);

    const newTicketData = {
      department,
      subject,
      message,
      relatedService,
      buyer: req.user._id,
      fileName, // Save the file name in the database
      fileUrl,  // Save the file URL in the database
    };

    const newTicket = new ticketModel(newTicketData);
    await newTicket.save();

    res.status(201).json({ message: 'Ticket created successfully' });
  } catch (error) {
    res.status(500).json({ error: 'An error occurred' });
  }
};





export const allTicketController = async (req, res) => {
  try {
    const tickets = await ticketModel.find({});
    res.status(200).send({
      success: true,
      message: "All ticket List",
      tickets,
    });
  } catch (error) {
    console.log(error);
    res.status(500).send({
      success: false,
      error,
      message: "Error while getting all ticket",
    });
  }
};


export const getTicketsController = async (req, res) => {
  try {
    const tickets = await ticketModel
      .find({ buyer: req.user._id })
      // .populate("products", "-photo")
      .populate("buyer", "name");
    res.json(tickets);
  } catch (error) {
    console.log(error);
    res.status(500).send({
      success: false,
      message: "Error WHile Geting tickets",
      error,
    });
  }
};


export const ticketsStatusController = async (req, res) => {
  try {
    const { ticketId } = req.params;
    const { status } = req.body;
    const tickets = await ticketModel.findByIdAndUpdate(
      ticketId,
      { status },
      { new: true }
    );
    res.json(tickets);
  } catch (error) {
    console.log(error);
    res.status(500).send({
      success: false,
      message: "Error While Updateing ticket",
      error,
    });
  }
};


// Get a single ticket by ID
export const getSingleTicketController = async (req, res) => {
  try {
    const ticket = await ticketModel.findById(req.params.ticketId).populate("buyer");
    if (!ticket) {
      return res.status(404).json({ error: 'Ticket not found' });
    }
    res.status(200).json(ticket);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'An error occurred' });
  }
};

// Update a single ticket by ID (including reply and status)


export const updateTicketController = async (req, res) => {
  try {
    const { ticketId } = req.params;
    const { status } = req.body;
    const { reply } = req.body;
    const tickets = await ticketModel.findByIdAndUpdate(
      ticketId,
      { status, reply },
      { new: true }
    ).populate("buyer");
    res.json(tickets);
  } catch (error) {
    console.log(error);
    res.status(500).send({
      success: false,
      message: "Error While Updateing ticket",
      error,
    });
  }
};

// user update ticket 

export const updateUserTicketController = async (req, res) => {
  try {
    const { ticketId } = req.params;
    const { userReply } = req.body;
    const tickets = await ticketModel.findByIdAndUpdate(
      ticketId,
      {  userReply },
      { new: true }
    ).populate("buyer", "name");
    res.json(tickets);
  } catch (error) {
    console.log(error);
    res.status(500).send({
      success: false,
      message: "Error While Updateing ticket",
      error,
    });
  }
};



export const downloadTicketFileController = async (req, res) => {
  try {
    const { ticketId } = req.params;
    const ticket = await ticketModel.findById(ticketId);

    if (!ticket || !ticket.fileUrl) {
      return res.status(404).json({ error: 'Ticket or file not found' });
    }

    const filePath = `.${ticket.fileUrl}`;

    if (fs.existsSync(filePath)) {
      // Send the file as an attachment for download
      res.download(filePath, ticket.fileName);
    } else {
      // File does not exist, return a 404 response
      res.status(404).json({ error: 'File not found' });
    }
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'An error occurred while downloading the file' });
  }
};


